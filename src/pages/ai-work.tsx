import { Layout, Typography, Tag, Row, Col, Divider, List, Collapse, Space, Avatar } from "antd";
import { RocketOutlined } from "@ant-design/icons";
import { Project } from "../utils/types.ts";
import projectsData from "../assets/projects.json";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

// Category 1 = AI / LLM Systems & Automation
const aiProjects: Project[] = (projectsData as Project[]).filter(
  (p) => p.skillCategories?.includes(1)
);

// Parse longDescription sections for problem/solution/highlights/impact
function parseSection(md: string, heading: string): string {
  const regex = new RegExp(`##\\s+${heading}\\s*\\n([\\s\\S]*?)(?=\\n##|$)`, "i");
  const match = md.match(regex);
  return match ? match[1].trim() : "";
}

function parseBullets(text: string): string[] {
  return text
    .split("\n")
    .map((l) => l.replace(/^[-*]\s+/, "").trim())
    .filter(Boolean);
}

export function AiWorkPage() {
  return (
    <Layout style={{ background: "#0f172a", minHeight: "100vh" }}>
      <Content style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 20px" }}>
        {/* Hero Section */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <Space direction="vertical" size={16}>
            <Avatar
              size={72}
              icon={<RocketOutlined />}
              style={{ background: "linear-gradient(135deg,#2563eb,#7c3aed)" }}
            />
            <Title style={{ color: "#ffffff", marginBottom: 0 }}>
              AI Systems & Intelligent Architectures
            </Title>
            <Paragraph
              style={{
                color: "#94a3b8",
                maxWidth: 700,
                margin: "0 auto",
                fontSize: 16,
              }}
            >
              Production-grade AI systems built around persistent memory, domain intelligence,
              automation workflows, and scalable real-world deployment.
            </Paragraph>
          </Space>
        </div>

        {/* Projects Accordion */}
        <Collapse
          accordion
          bordered={false}
          expandIconPosition="end"
          style={{ background: "transparent" }}
        >
          {aiProjects.map((project) => {
            const md = project.longDescription ?? "";
            const overview = parseSection(md, "Overview");
            const problem = parseSection(md, "Problem(\\s+It\\s+Solves)?");
            const solution = parseSection(md, "Solution");
            const highlightsRaw = parseSection(md, "Technical\\s+Highlights");
            const impactRaw = parseSection(md, "Impact");
            const highlights = parseBullets(highlightsRaw);
            const capabilities = project.features ?? [];
            const category = project.tags?.[0] ?? "AI";

            return (
              <Collapse.Panel
                key={project.slug}
                style={{
                  marginBottom: 24,
                  background: "#ffffff",
                  borderRadius: 16,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  overflow: "hidden",
                }}
                header={
                  <Row justify="space-between" align="middle" style={{ width: "100%" }}>
                    <Col>
                      <Space direction="vertical" size={0}>
                        <Title level={4} style={{ marginBottom: 0 }}>
                          {project.name}
                        </Title>
                        <Text type="secondary" style={{ fontSize: 14 }}>
                          {project.description}
                        </Text>
                      </Space>
                    </Col>
                    <Col>
                      <Tag
                        color="geekblue"
                        style={{
                          borderRadius: 20,
                          padding: "4px 12px",
                          fontWeight: 500,
                        }}
                      >
                        {category}
                      </Tag>
                    </Col>
                  </Row>
                }
              >
                <div style={{ paddingTop: 10 }}>
                  {overview && (
                    <Paragraph style={{ fontSize: 15 }}>{overview}</Paragraph>
                  )}

                  {(problem || solution) && <Divider />}

                  {problem && (
                    <>
                      <Title level={5}>Problem</Title>
                      <Paragraph type="secondary" style={{ fontSize: 14 }}>
                        {problem}
                      </Paragraph>
                    </>
                  )}

                  {solution && (
                    <>
                      <Title level={5}>Solution</Title>
                      <Paragraph type="secondary" style={{ fontSize: 14 }}>
                        {solution}
                      </Paragraph>
                    </>
                  )}

                  {(capabilities.length > 0 || highlights.length > 0) && (
                    <Row gutter={40} style={{ marginTop: 24 }}>
                      {capabilities.length > 0 && (
                        <Col xs={24} md={12}>
                          <Title level={5}>Key Capabilities</Title>
                          <List
                            size="small"
                            dataSource={capabilities}
                            renderItem={(item) => (
                              <List.Item style={{ paddingLeft: 0 }}>
                                <Text>• {item}</Text>
                              </List.Item>
                            )}
                          />
                        </Col>
                      )}
                      {highlights.length > 0 && (
                        <Col xs={24} md={12}>
                          <Title level={5}>Technical Highlights</Title>
                          <List
                            size="small"
                            dataSource={highlights}
                            renderItem={(item) => (
                              <List.Item style={{ paddingLeft: 0 }}>
                                <Text>• {item}</Text>
                              </List.Item>
                            )}
                          />
                        </Col>
                      )}
                    </Row>
                  )}

                  {impactRaw && (
                    <>
                      <Divider />
                      <Title level={5}>Impact</Title>
                      <Paragraph type="secondary" style={{ fontSize: 14 }}>
                        {impactRaw}
                      </Paragraph>
                    </>
                  )}
                </div>
              </Collapse.Panel>
            );
          })}
        </Collapse>
      </Content>
    </Layout>
  );
}
