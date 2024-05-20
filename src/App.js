// import logo from './logo.svg';
import './App.css';
import { useState, React } from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
//Components
import TopNavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';

//antD
import { Layout, ConfigProvider, theme, Button } from 'antd';
const { Header, Content, Footer } = Layout;


function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
   };

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
      }}>
        
        <BrowserRouter>

          <Layout>
            
            <Layout>
              <TopNavigationBar/>
              
              <Content style={{ padding: '0 48px', }}>
                <Routes>
                  <Route path='/' element={<LandingPage />}/>
                  <Route path='/home' element={<HomePage />}/>
                  
                </Routes>
              </Content>
            </Layout>

            <Footer>
              <Button onClick={handleClick}>
                Change Theme to {isDarkMode ? "Light" : "Dark"}
              </Button>
            </Footer>
          </Layout>

        </BrowserRouter>



   </ConfigProvider>
    
    
  );
}

export default App;
