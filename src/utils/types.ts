export interface Project {
  name: string;
  slug: string;
  description: string;
  longDescription?: string; // markdown
  url?: string;
  github?: string;
  logo?: string;
  tags?: string[];
  techStack?: string[];
  year?: string;
  screenshots?: string[];
  screenshotFolder?: string;
  features?: string[]; // bullet highlights
  architecture?: string; // markdown
}