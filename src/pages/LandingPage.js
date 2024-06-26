import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import background from '../images/background.jpg'

//antD
import { ConfigProvider, Button, Col, Row } from 'antd'
// const { Content } = Layout


const LandingPage = () => {
  const configContext = useContext(ConfigProvider.ConfigContext);
  const isDarkMode = configContext.theme?.isDarkMode
  
  // useEffect(()=> {
  //   console.log(isDarkMode);
  // })

  const myInterest = [
    "Full Stack Developer",
    "Software Developer",
    "Music Fan",
    "Basketball Fan",
  ]

  return (
    <div 
      className={isDarkMode ? 'app-content-dark' : 'app-content-light'}
      // className='app-content'
    >
      
       
      
      <Row justify={'center'} align={'middle'}>
        
        <Col xs={22} sm={22} md={20} lg={18} xl={18} >
            <div >
            <h3 >Welcome to my personal website,</h3>
                <div><h1 >I'm <b> Ziyu(Jeffrey) Zhou</b></h1> </div>
                <h2 >I'm a <b>{myInterest.map((interest) => interest + " | ")}</b> </h2>
                
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
      
        
    </div>
  );
};

export default LandingPage;