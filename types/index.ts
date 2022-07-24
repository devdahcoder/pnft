import React from 'react';

export type SideBarNavigation = {
    id: number;
    name: string;
    url: string;
    icon: any;
    link: boolean;
    children?: SideBarNavigation[];
}