import React from 'react';
import {getMainLayout} from './MainLayout';
import Sidebar from '../Sidebar';

type Props = {
    children: React.ReactNode;
}

const DashboardLayout = ({children}: Props) => {
    return (
        <div>
            <Sidebar />
            <div className="ml-72">
                {/* <Header /> */}
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export const getDashboardLayout = (page: React.ReactElement) => 
    getMainLayout(<DashboardLayout>{page}</DashboardLayout>, "Welcome to nft dashboard");


export default DashboardLayout;