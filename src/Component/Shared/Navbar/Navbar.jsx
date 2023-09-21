import React, { useState } from 'react';
import './navbar.css';
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="nav">
            <div>
                <div className='menu flex flex-row gap-2 sm:block md:hidden'>
                    <div className='mb-1'>Menu</div>
                    <div onClick={() => setIsOpen(!isOpen)}
                        className='pb-1 pt-1'
                    >
                        {isOpen ? 'X' : <AiOutlineMenu />}

                    </div>

                </div>

                <div className='hidden md:block'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>



            </div>
            {
                isOpen && (
                    <div className='responsive-list'>
                        <div className='list-item'>
                            <div>Home</div>
                            <div className='my-2'>About</div>
                            <div className='my-2'>Blog</div>
                            <div>Contact</div>
                        </div>


                    </div>
                )
            }


        </div>
    );
};

export default Navbar;
