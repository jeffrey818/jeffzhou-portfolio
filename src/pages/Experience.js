import React from 'react';
import { Row, Col, Space, Card } from 'antd';
import photocontestImage from '../images/photocontest.png';
import projectA from '../images/projectA.JPG'
import shiftscheduler from '../images/shift-calendar.png'

const Experience = () => {
  return (
    <div className='app-content'>
      <Row justify='center' align='middle'>
        <Col span={2} />
        <Col span={19} >
          <div style={{ textAlign: 'center' }}>
            <Space
              direction="vertical"
              size="middle"
              style={{ width: '100%' }}>
                <Card
                    title="First Nation Asset Management and Data Analytical CRUD Django-React Full Stack Web-application"
                    bordered={false}
                    style={{
                    width: '100%',
                    fontSize: "14px"
                    }}
                >
                    <div>
                        <p style={{ fontSize: '16px' }}>
                            Demo Upon Request 
                        </p>
                        <p>
                            Project Info: The web application focus on pulling data from the tablet submissions with Restful APIs and stores the data in the customized format in the database, which is to automate the procedures for making PDFs/Excel Reports for sending to the government for further purposes.
                        </p>
                        <img src={projectA} alt="projectA" style={{ maxWidth: '100%' }} width="70%" height="auto"/>
                        
                        
                    </div>
                </Card>
                <Card
                    title="Photo Contest – Full Stack Web App"
                    bordered={false}
                    style={{
                    width: '100%',
                    fontSize: "14px"
                    }}
                >
                    <div>
                        <p style={{ fontSize: '16px' }}>
                            Github Link: 
                            <a href="https://github.com/jeffrey818/Photo-Competition-Web-App"
                                target="_blank" rel="noopener noreferrer" >Link Text</a>
                        </p>
                        <p>
                        Project Info: The Web application is a platform where photo lovers can view photos from each other and vote for their favorite photos.
                        </p>
                        <img src={photocontestImage} alt="photocontest" style={{ maxWidth: '100%' }} width="70%" height="auto"/>
                        
                        
                    </div>
                </Card>
                <Card
                    title="Shift Scheduler - Android App (Java)"
                    bordered={false}
                    style={{
                    width: '100%',
                    fontSize: "14px"
                    }}
                >
                    <div>
                        <p style={{ fontSize: '16px' }}>
                            Demo Upon Request 
                        </p>
                        <p>
                        Project Info: The Android application is for a restaurant manager to manage the schedules shifts for his employees.
                        </p>
                        <img src={shiftscheduler} alt="shiftscheduler" style={{ maxWidth: '100%' }} width="30%" height="auto"/>
                    </div>
                </Card>
                {/* <Card
                    title="Edmonton Property Assessment"
                    bordered={false}
                    style={{
                    width: '100%',
                    fontSize: "14px"
                    }}
                >
                    
                </Card> */}

            </Space>
            
            </div>
        </Col>
        <Col span={2} />
      </Row>
      
    </div>
  );
};

export default Experience;