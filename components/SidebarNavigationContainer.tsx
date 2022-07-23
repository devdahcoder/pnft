import React from 'react';
import Link from 'next/link';
import { SiAngularjs } from 'react-icons/si';
import Marketplace from '../public/Icons/Marketplace';
import Portfolio from '../public/Icons/Portfolio';
import { sideBarNavigation } from '../constant/sidebarNavigation';

type Props = {
    header?: string;
    className?: string;
}

const SidebarNavigationContainer = ({ header, className}: Props) => {
    
    return (
        <div className="flex flex-col w-full border">
            <div className={`text-xs text-black font-medium uppercase tracking-widest`}>
                <p>{header}</p>
            </div>

            <div className="flex flex-row w-full flex-col">
                {
                    sideBarNavigation && sideBarNavigation.map((item, index) => {
                        return (
                            <Link href={item?.url} passHref key={item.id}>
                                <a className={`flex flex-row w-full items-center`}>
                                    <item.icon />

                                    <div className="flex flex-row text-black ml-5">
                                        <p>{item?.name}</p>
                                    </div>
                                </a>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SidebarNavigationContainer