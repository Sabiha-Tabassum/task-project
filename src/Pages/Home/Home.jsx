import React from 'react';
import MainHeader from './MainHeader/MainHeader';
import Content from './Content/Content';
import SideBar from './SideBar/SideBar';



const Home = () => {
    return (
        <div>
           <SideBar></SideBar>
           <MainHeader></MainHeader>
           <Content></Content>
        </div>
    );
};

export default Home;

