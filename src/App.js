// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Components
import TopNavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import Experience from './pages/Experience';
//antD
import { Layout, ConfigProvider, theme,  FloatButton } from 'antd';
import { MoonFilled, SunFilled } from '@ant-design/icons';
const { Content, Footer } = Layout;


function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
   };

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        isDarkMode,
      }}
      >
        
        <BrowserRouter>
          <Layout>
            <Layout>
              
              <TopNavigationBar/>
              
              <Content >
                <Routes>
                  <Route path='/' element={<LandingPage />}/>
                  <Route path='/home' element={<HomePage />}/>
                  <Route path='/experience' element={<Experience />}/>
                  
                </Routes>
              </Content>
            </Layout>

            <Footer>
              <FloatButton 
                onClick={handleClick} 
                icon={isDarkMode ? <SunFilled /> : <MoonFilled/>}
                tooltip={isDarkMode ? <div>Light Theme</div> : <div>Dark Theme</div> }
                >
                {/* Change Theme to {isDarkMode ? "Light" : "Dark"} */}
              </FloatButton>
            </Footer>
          </Layout>

        </BrowserRouter>



   </ConfigProvider>
    
    
  );
}

export default App;
