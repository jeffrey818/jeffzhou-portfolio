import React from 'react';
import { Row, Col, Space } from 'antd';
//components
import Intro from './Intro';
import Skill from './Skill';

const HomePage = () => {
  return (
    <div className='app-content'>
      <Row justify='center' align='middle'>
        <Col span={3} />
        <Col span={18} >
          <div style={{ textAlign: 'center' }}>
            <Space
              direction="vertical"
              size="middle">
              <Intro />
              <Skill />
            </Space>
            
          </div>
        </Col>
        <Col span={3} />
      </Row>
      
    </div>
  );
};

export default HomePage