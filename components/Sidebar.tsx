import React from 'react';
import Logo from './Logo';
import SidebarNavigationContainer from './SidebarNavigationContainer';
import { sideBarNavigation, sideBarNavigationProfile, sideBarNavigationOthers } from '../constant/sidebarNavigation';
import SidebarCryptoBalance from './SidebarCryptoBalance';


type Props = {}

const Sidebar = (props: Props) => {
    return (
        <div className="w-72 h-screen bg-white fixed top-0 left-0 shadow-md px-7">
            <div className="flex flex-col">
                <Logo />
                {/* <div className="flex flex-col w-full mt-11">
                    <SidebarNavigationContainer navigation={sideBarNavigation} />
                    <SidebarNavigationContainer header="Profile" navigation={sideBarNavigationProfile} />
                    <SidebarNavigationContainer header="Others" navigation={sideBarNavigationOthers} />
                </div> */}
                <SidebarCryptoBalance />
            </div>
        </div>
    )
}

export default Sidebar