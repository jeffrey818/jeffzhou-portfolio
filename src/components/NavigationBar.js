import React from 'react';
import { Menu, Switch } from 'antd';
import { MailOutlined, AppstoreOutlined, HomeOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const TopNavigationBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Mapping from pathname to keys
  const pathToKey = {
    '/': 'landing',
    '/home': 'home',
  };

  const items = [
    {
      label: <Link to="/" >Intro</Link>,
      key: 'landing',
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link to="/home" >Home</Link>,
      key: 'home',
      icon: <HomeOutlined />,
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