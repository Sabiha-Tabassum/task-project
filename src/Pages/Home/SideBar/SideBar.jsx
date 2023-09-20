import React from 'react';
import './sidebar.css'
import SideBarItem from '../SideBarItem/SideBarItem';

const SideBar = () => {
    return (
        <>
            <div className='sidebar-content'>
                <div className='sidebar-area'>
                    <div className='sidebar'>
                        <p>Sidebar</p>
                        <SideBarItem></SideBarItem>
                    </div>

                </div>
                

            </div>


        </>
    );
};

export default SideBar;