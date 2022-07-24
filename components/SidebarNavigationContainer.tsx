import React from 'react';
import Link from 'next/link';
import { SiAngularjs } from 'react-icons/si';
import Marketplace from '../public/Icons/Marketplace';
import Portfolio from '../public/Icons/Portfolio';
import { SideBarNavigation } from '../types/index';

type Props = {
    header?: string;
    className?: string;
    navigation: SideBarNavigation[];
}

const SidebarNavigationContainer = ({ header, className, navigation}: Props) => {
    
    return (
        <div className={`flex flex-col w-full mb-7 last:mb-0 ${className}`}>
            <div className={`text-xs text-black font-bold uppercase tracking-widest ${header ? 'mb-3' : ''}`}>
                <p>{header}</p>
            </div>

            <div className="flex flex-col w-full">
                {
                    navigation && navigation.map((item, index) => {
                        return (
                            <Link href={item?.url} passHref key={item.id}>
                                <a className={`flex flex-row w-full items-center mb-1 py-2 hover:bg-slate-500`}>
                                    <item.icon />

                                    <div className="flex flex-row text-gray-main text-sm font-medium capitalize ml-4">
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