import React from 'react';
import Link from 'next/link';
import { SiAngularjs } from 'react-icons/si';
import Marketplace from '../public/Icons/Marketplace';
import Portfolio from '../public/Icons/Portfolio';
import { SideBarNavigation } from '../types/index';
import SidebarNavigationLink from './SidebarNavigationLink';
import SidebarStaticLink from './SidebarStaticLink';

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
                            <>
                                {
                                    item.link ? <SidebarNavigationLink key={index} item={item} /> : <SidebarStaticLink key={index} item={item} />
                                }
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SidebarNavigationContainer