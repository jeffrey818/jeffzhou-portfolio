import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const TopNavigationBar = () => {
  return (
    <Menu mode="horizontal">
        <Menu.Item key="home">
            <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="landing">
            <Link to="/landing">Landing</Link>
        </Menu.Item>
    </Menu>
  );
};

export default TopNavigationBar;