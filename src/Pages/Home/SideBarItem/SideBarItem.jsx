import React from 'react';

const SideBarItem = () => {
    return (
        <div className='item-area'>
            <div >
                <input className='w-64 mb-1 p-1 ' type="text" defaultValue='Item 1'/>
            </div>

            <div >
                <input className='mb-1 ml-12 w-52 p-1 bg-slate-300 text-center' type="text" defaultValue='Item A' />
            </div>
            <div >
                <input className='mb-1 ml-12 w-52 p-1 bg-slate-300 text-center' type="text"  defaultValue='Item B'/>
            </div>
            <div >
                <input className='w-64 mb-1 p-1' type="text" defaultValue='Item 2'/>
            </div>
            <div >
                <input className='w-64 mb-1 p-1' type="text" defaultValue='Item 3' />
            </div>
           

        </div>
    );
};

export default SideBarItem;