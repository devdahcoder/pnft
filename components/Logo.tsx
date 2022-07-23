import React from 'react';
import LogoIcon from '../public/Icons/Logo';

type Props = {}

const Logo = (props: Props) => {
    return (
        <div className="flex flex-row items-center pt-5">
            <LogoIcon className="animate-rotate" />

            <div className="flex flex-col items-start ml-4">
                <div className="uppercase text-black text-2xl font-semibold"><p>pnft.</p></div>
                <div className="text-xs capitalize font-medium text-gray-600"><p>nft marketplace</p></div>
            </div>
        </div>
    )
}

export default Logo