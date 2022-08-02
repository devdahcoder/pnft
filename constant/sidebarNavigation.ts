import { SideBarNavigation } from '../types/index';
import Dashboard from '../public/Icons/Dashboard';
import Market from '../public/Icons/Marketplace';
import Marketplace from '../public/Icons/Marketplace';
import Bids from '../public/Icons/Bids';
import Portfolio from '../public/Icons/Portfolio';
import Wallet from '../public/Icons/Wallet';
import Favorite from '../public/Icons/Favorite';
import Setting from '../public/Icons/Setting';
import Clock from '../public/Icons/Clock';
import Theme from '../public/Icons/Theme';
import ToggleSwitch from '../components/ToggleSwitch';

export const sideBarNavigation: SideBarNavigation[] = [
    {
        id: 1,
        name: 'Dashboard',
        url: '/',
        icon: Dashboard,
        link: true,
        hasComponent: false,
        // children?: SideBarNavigation[],
    },
    {
        id: 2,
        name: 'Market',
        url: './marketplace',
        icon: Marketplace,
        link: true,
        hasComponent: false,
    },
    {
        id: 3,
        name: 'Active Bids',
        url: './bids',
        icon: Bids,
        link: true,
        hasComponent: false,
    },
]

export const sideBarNavigationProfile: SideBarNavigation[] = [
    {
        id: 1,
        name: 'My Portfolio',
        url: './portfolio',
        icon: Portfolio,
        link: true,
        hasComponent: false,
    },
    {
        id: 2,
        name: 'Wallet',
        url: './wallet',
        icon: Wallet,
        link: true,
        hasComponent: false,
    },
    {
        id: 3,
        name: 'Favorite',
        url: './favorite',
        icon: Favorite,
        link: true,
        hasComponent: false,
    },
    {
        id: 4,
        name: 'History',
        url: './history',
        icon: Clock,
        link: true,
        hasComponent: false,
    },
    {
        id: 5,
        name: 'Setting',
        url: './setting',
        icon: Setting,
        link: true,
        hasComponent: false,
    }
]

export const sideBarNavigationOthers: SideBarNavigation[] = [
    {
        id: 1,
        name: 'Light Mode',
        url: './theme',
        icon: Theme,
        link: false,
        hasComponent: true,
        component: ToggleSwitch,
    }
]