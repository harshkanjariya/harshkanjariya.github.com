import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import type { Project } from "../../utils/types";

const W = 2;
const H = 1.25;
const D = 0.4;
const GRID_COLS = 4;
const SPACING_X = 2.4;
const SPACING_Z = 1.85;

function getCardRotation(index: number) {
  const seed = index * 17 + 7;
  return {
    x: ((-5 + (seed % 11)) * Math.PI) / 180,
    y: ((-6 + ((seed * 11) % 13)) * Math.PI) / 180,
  };
}

/** One face of the box - different color per side so 3D is obvious */
function BoxFace({
  position,
  rotation,
  size,
  color,
  castShadow,
  receiveShadow,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  size: [number, number];
  color: string;
  castShadow?: boolean;
  receiveShadow?: boolean;
}) {
  return (
    <mesh position={position} rotation={rotation} castShadow={castShadow} receiveShadow={receiveShadow}>
      <planeGeometry args={size} />
      <meshStandardMaterial color={color} side={THREE.DoubleSide} />
    </mesh>
  );
}

function BlockCard({ project, index }: { project: Project; index: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const { x: rotX, y: rotY } = useMemo(() => getCardRotation(index), [index]);

  const col = index % GRID_COLS;
  const row = Math.floor(index / GRID_COLS);
  const x = (col - (GRID_COLS - 1) / 2) * SPACING_X;
  const z = -row * SPACING_Z;

  const [hovered, setHovered] = useState(false);
  const liftRef = useRef(0);
  const rotXRef = useRef(rotX);
  const rotYRef = useRef(rotY);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const speed = Math.min(delta * 6, 0.5);
    rotXRef.current = THREE.MathUtils.lerp(rotXRef.current, hovered ? 0 : rotX, speed);
    rotYRef.current = THREE.MathUtils.lerp(rotYRef.current, hovered ? 0 : rotY, speed);
    liftRef.current = THREE.MathUtils.lerp(liftRef.current, hovered ? 0.4 : 0, speed);
    groupRef.current.rotation.set(rotXRef.current, rotYRef.current, 0);
    groupRef.current.position.set(x, 0, z + liftRef.current);
  });

  return (
    <group
      ref={groupRef}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* 6 faces with different colors so rotation looks clearly 3D */}
      <BoxFace position={[0, 0, D / 2]} rotation={[0, 0, 0]} size={[W, H]} color="#ffffff" castShadow receiveShadow />
      <BoxFace position={[0, 0, -D / 2]} rotation={[0, Math.PI, 0]} size={[W, H]} color="#cbd5e1" castShadow receiveShadow />
      <BoxFace position={[W / 2, 0, 0]} rotation={[0, Math.PI / 2, 0]} size={[D, H]} color="#94a3b8" castShadow receiveShadow />
      <BoxFace position={[-W / 2, 0, 0]} rotation={[0, -Math.PI / 2, 0]} size={[D, H]} color="#64748b" castShadow receiveShadow />
      <BoxFace position={[0, H / 2, 0]} rotation={[-Math.PI / 2, 0, 0]} size={[W, D]} color="#e2e8f0" castShadow receiveShadow />
      <BoxFace position={[0, -H / 2, 0]} rotation={[Math.PI / 2, 0, 0]} size={[W, D]} color="#475569" castShadow receiveShadow />

      <Html
        position={[0, 0, D / 2 + 0.01]}
        transform
        style={{ pointerEvents: "auto", width: "240px" }}
        distanceFactor={3.5}
      >
        <ProjectCardContent project={project} />
      </Html>
    </group>
  );
}

function ProjectCardContent({ project }: { project: Project }) {
  return (
    <div
      className="rounded-lg overflow-hidden bg-white/95 border border-slate-200 shadow-md p-3 flex flex-col"
      style={{ width: 240, minHeight: 160 }}
      onClick={(e) => e.stopPropagation()}
    >
      {project.logo ? (
        <div className="flex justify-center mb-1">
          <img src={project.logo} alt="" className="w-10 h-10 object-contain rounded bg-slate-100" />
        </div>
      ) : (
        <div className="w-10 h-10 mx-auto mb-1 rounded bg-slate-200 flex items-center justify-center text-slate-500 text-sm font-semibold">
          {project.name.charAt(0)}
        </div>
      )}
      <h3 className="font-semibold text-slate-800 text-center text-xs truncate">{project.name}</h3>
      <p className="text-slate-500 text-[11px] text-center mt-0.5 line-clamp-2 flex-1">{project.description}</p>
      <div className="flex flex-wrap justify-center gap-1 mt-2">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-2 py-0.5 rounded bg-cyan-100 text-cyan-700 hover:bg-cyan-200 text-[11px] font-medium"
        >
          Preview
        </a>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-2 py-0.5 rounded bg-slate-200 text-slate-700 hover:bg-slate-300 text-[11px] font-medium"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

function Floor({ rowCount }: { rowCount: number }) {
  const w = GRID_COLS * SPACING_X + 6;
  const h = rowCount * SPACING_Z + 6;
  const z = -((rowCount - 1) * SPACING_Z) / 2;
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -H / 2 - 0.01, z]} receiveShadow>
      <planeGeometry args={[w, h]} />
      <meshStandardMaterial color="#e2e8f0" roughness={1} metalness={0} />
    </mesh>
  );
}

export function ProjectsScene({ projects }: { projects: Project[] }) {
  const rowCount = Math.ceil(projects.length / GRID_COLS);
  const gridCenterZ = -((rowCount - 1) * SPACING_Z) / 2;

  return (
    <div className="absolute inset-0 w-full h-full min-h-0">
      <Canvas
        camera={{
          position: [0, 3, 16],
          fov: 52,
          near: 0.1,
          far: 100,
        }}
        shadows
        gl={{ antialias: true, alpha: false }}
        frameloop="always"
      >
        <color attach="background" args={["#f1f5f9"]} />
        <ambientLight intensity={0.55} />
        <directionalLight
          position={[8, 14, 6]}
          intensity={1.3}
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-camera-far={35}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={6}
          shadow-camera-bottom={-10}
        />
        <directionalLight position={[-6, 8, -4]} intensity={0.4} />
        <OrbitControls
          target={[0, 0, gridCenterZ]}
          enablePan
          enableZoom
          minDistance={10}
          maxDistance={24}
          maxPolarAngle={Math.PI / 2 - 0.05}
        />
        <Floor rowCount={rowCount} />
        {projects.map((project, i) => (
          <BlockCard key={i} project={project} index={i} />
        ))}
      </Canvas>
    </div>
  );
}
