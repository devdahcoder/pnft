import React from 'react';
import Logo from './Logo';
import SidebarNavigationContainer from './SidebarNavigationContainer';

type Props = {}

const Sidebar = (props: Props) => {
    return (
        <div className="w-72 h-screen bg-white fixed top-0 left-0 shadow-md px-7">
            <div className="flex flex-col">
                <Logo />
                <div className="flex flex-col border w-full">
                    <SidebarNavigationContainer />
                </div>
                Sidebar is this side of the app 
            </div>
        </div>
    )
}

export default Sidebar