import { SideBarNavigation } from '../types/index';
import Dashboard from '../public/Icons/Dashboard';
import Market from '../public/Icons/Marketplace';
import Marketplace from '../public/Icons/Marketplace';
import Bids from '../public/Icons/Bids';

export const sideBarNavigation: SideBarNavigation[] = [
    {
        id: 1,
        name: 'Dashboard',
        url: './dashboard',
        icon: Dashboard,
        // children?: SideBarNavigation[];
    },
    {
        id: 2,
        name: 'Market',
        url: './marketplace',
        icon: Marketplace,
    },
    {
        id: 3,
        name: 'Active Bids',
        url: './bids',
        icon: Bids,
    },
]