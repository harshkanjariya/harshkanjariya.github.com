import { Layout, Typography, Tag, Row, Col, Divider, List, Collapse, Space, Avatar } from "antd";
import { RocketOutlined } from "@ant-design/icons";
import projects from "../assets/ai-work.json";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

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
                    {projects.map((project) => (
                        <Collapse.Panel
                            key={project.id}
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
                                                {project.title}
                                            </Title>
                                            <Text type="secondary" style={{ fontSize: 14 }}>
                                                {project.tagline}
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
                                            {project.category}
                                        </Tag>
                                    </Col>
                                </Row>
                            }
                        >
                            <div style={{ paddingTop: 10 }}>
                                <Paragraph style={{ fontSize: 15 }}>
                                    {project.overview}
                                </Paragraph>

                                <Divider />

                                <Title level={5}>Problem</Title>
                                <Paragraph type="secondary" style={{ fontSize: 14 }}>
                                    {project.problemStatement}
                                </Paragraph>

                                <Title level={5}>Solution</Title>
                                <Paragraph type="secondary" style={{ fontSize: 14 }}>
                                    {project.solution}
                                </Paragraph>

                                <Row gutter={40} style={{ marginTop: 24 }}>
                                    <Col xs={24} md={12}>
                                        <Title level={5}>Key Capabilities</Title>
                                        <List
                                            size="small"
                                            dataSource={project.keyCapabilities}
                                            renderItem={(item) => (
                                                <List.Item style={{ paddingLeft: 0 }}>
                                                    <Text>• {item}</Text>
                                                </List.Item>
                                            )}
                                        />
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Title level={5}>Technical Highlights</Title>
                                        <List
                                            size="small"
                                            dataSource={project.technicalHighlights}
                                            renderItem={(item) => (
                                                <List.Item style={{ paddingLeft: 0 }}>
                                                    <Text>• {item}</Text>
                                                </List.Item>
                                            )}
                                        />
                                    </Col>
                                </Row>

                                <Divider />

                                <Title level={5}>Impact</Title>
                                <Paragraph type="secondary" style={{ fontSize: 14 }}>
                                    {project.impact}
                                </Paragraph>
                            </div>
                        </Collapse.Panel>
                    ))}
                </Collapse>
            </Content>
        </Layout>
    );
}