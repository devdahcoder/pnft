import Link from 'next/link';
import React from 'react';
import { SideBarNavigation } from '../types/index';

type Props = {
    item: SideBarNavigation;
}

const SidebarNavigationLink = ({item}: Props) => {
    return (
        <Link href={item?.url} passHref key={item.id}>
            <a className={`flex flex-row w-full items-center mb-1 py-2`}>
                <item.icon />

                <div className="flex flex-row text-gray-main text-sm font-medium capitalize ml-4">
                    <p>{item?.name}</p>
                </div>
            </a>
        </Link>
    )
}

export default SidebarNavigationLink