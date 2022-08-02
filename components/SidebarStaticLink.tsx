import React from 'react'
import { SideBarNavigation } from '../types/index';

type Props = {
    item: SideBarNavigation;
}

const SidebarStaticLink = ({item}: Props) => {
    return (
        <div>
            <div className={`flex flex-row w-full items-center justify-between mb-1 py-2`}>
                <div className={`flex flex-row w-full items-center`}>
                    <item.icon />

                    <div className="flex flex-row text-gray-main text-sm font-medium capitalize ml-4">
                        <p>{item?.name}</p>
                    </div>
                </div>

                <div>
                    <item.component />
                </div>
            </div>
        </div>
    )
}

export default SidebarStaticLink