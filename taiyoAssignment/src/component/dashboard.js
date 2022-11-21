import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import CovidCase from './covidcase'
import CovidMaps from './covidmaps';


// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const Dashboard = () => {
  
  return (
      <>
    <Link to='cases'>Covid Cases</Link> 
    <Link to='maps'>Covid Map</Link>
    <Routes>
        <Route exact path='/cases' element= {<CovidCase/>}/>
        <Route exact path='/maps' element= {<CovidMaps/>}/>
    </Routes>
    </>
  );
};
export default Dashboard;