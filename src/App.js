// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Components
import TopNavigationBar from './components/NavigationBar';
import HomePage from './pages/Home/HomePage';
import LandingPage from './pages/Home/LandingPage';

//antD
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;



function App() {
  return (
    <BrowserRouter>
      <Layout>

        <Header>
          <TopNavigationBar />
        </Header>

        <Layout>
          {/* <Sider>left sidebar</Sider> */}
          <Content>
            <Routes>
              <Route path='/home' element={<HomePage />}/>
              <Route path='/landing' element={<LandingPage />}/>
            </Routes>
          </Content>
        </Layout>

        <Footer>footer</Footer>

      </Layout>
    </BrowserRouter>
    
  );
}

export default App;
