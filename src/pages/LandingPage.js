import React from 'react';
import { Link } from 'react-router-dom';
import background from '../images/background.jpg'

//antD
import { Button, Col, Layout, Row } from 'antd'
const { Content } = Layout


const LandingPage = () => {
  const myInterest = [
    "Full Stack Developer",
    "Software Developer",
    "Music",
    "Sports, Basketball fan",
  ]

  return (
    <div className='app-content'>
      <Layout >
        <Content >
          <Row style={{justifyContent: 'center'}}>

            <Col xs={12} sm={10} md={8} lg={6} xl={6} >
                <div style={{marginTop: 15}} >
                    <h3 >Welcome to my personal website,</h3>
                    <div><h1 >I'm <b> Ziyu Zhou</b></h1> </div>
                    <h4 >I'm a <b>{myInterest.map((interest) => interest + " | ")}</b> </h4>
                </div>
                <br />
                <div>
                  <Button  shape="round" size="large" >
                    <Link to="/home" > 
                      Go to my Portfolio Website
                    </Link>
                  </Button>
                </div>

            </Col>


          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default LandingPage;