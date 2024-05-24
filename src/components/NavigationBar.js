import React from 'react';
import { Menu, Switch } from 'antd';
import { MailOutlined, AppstoreOutlined, HomeOutlined, CodeTwoTone} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const TopNavigationBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Mapping from pathname to keys
  const pathToKey = {
    '/': 'landing',
    '/home': 'home',
    '/experience':'experience',
  };

  const items = [
    {
      label: <Link to="/" >Intro</Link>,
      key: 'landing',
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link to="/home" >About & Skills</Link>,
      key: 'home',
      icon: <HomeOutlined />,
    },
    {
      label: <Link to="/experience" >Project Experience</Link>,
      key: 'experience',
      icon: <CodeTwoTone />,
    },
    
  ]
  

  return (
    <Menu 
      mode="horizontal" 
      // theme='dark' 
      items={items}
      selectedKeys={pathToKey[currentPath]} 
      
      
    >
      
    </Menu>
  );
};

export default TopNavigationBar;