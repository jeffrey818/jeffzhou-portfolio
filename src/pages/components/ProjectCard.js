import { Card, Row, Col, Typography } from 'antd';

// images
import assets from '../../images/projectA/assets.png';
import comment from '../../images/projectA/comment.png';
import graphs from '../../images/projectA/graphs.png';
import reports from '../../images/projectA/report.png';

const { Title, Paragraph } = Typography;

const projectImages = [
    { src: assets, alt: "Assets" },
    { src: comment, alt: "Comment" },
    { src: graphs, alt: "Graphs" },
    { src: reports, alt: "Reports" }
];

const ProjectCard = () => {
    
    return (
        <Card
            title="First Nation Asset Management and Data Analytical CRUD Django-React Full Stack Web Application"
            bordered={false}
            style={{
                width: '100%',
                fontSize: "14px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                padding: "10px"
            }}
        >
            <Title level={5} style={{ marginBottom: "8px" }}>
                Demo Upon Request
            </Title>

            <Paragraph>
                <strong>Project Info:</strong> This web application focuses on pulling data from tablet submissions using RESTful APIs and storing it in a customized format in the database. It automates the process of generating PDF/Excel reports for submission to the government.
            </Paragraph>

            {/* Image Grid */}
            <Row gutter={[16, 16]} justify="center">
                {projectImages.map((image, index) => (
                    <Col xs={24} sm={12} md={12} lg={6} key={index} style={{ textAlign: "center" }}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            style={{
                                maxWidth: "100%",
                                height: "auto",
                                borderRadius: "6px",
                                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"
                            }}
                        />
                        <Paragraph style={{ marginTop: "8px", fontSize: "14px", fontWeight: "500" }}>
                            {image.alt}
                        </Paragraph>
                    </Col>
                ))}
            </Row>
        </Card>
    );
};

export default ProjectCard;
