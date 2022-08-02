import React from 'react';
import Ethereum from '../public/Icons/Ethereum';
import EthereumBgMain from '../public/Icons/EthereumBgMain';
import EthereumBgTop from '../public/Icons/EthereumBgTop';


type Props = {}

const SidebarCryptoBalance = (props: Props) => {
    return (
        <div className="relative flex flex-col items-center justify-center rounded-xl p-4 sidebar--account--container">

            <div className="absolute top-0 right-5">
                <EthereumBgTop />
            </div>

            <div className="absolute top-0 left-0">
                <EthereumBgMain />
            </div>
            

            <div className="flex flex-col">
                <div className="flex flex-col items-center text-center space-y-3">
                    <div className="text-sm text-white tracking-wide">
                        <p>Your Balance</p>
                    </div>
                    <div className="text-3xl font-semibold text-white tracking-wider">
                        <p>1,034.02</p>
                    </div>
                    <div className="flex flex-row items-center text-xs text-white">
                        <div className="h-6 w-6 bg-gray-200 flex flex-row items-center justify-center rounded-full mr-2">
                            <span><Ethereum /></span>
                        </div>
                        <div className="text-xs text-white">
                            <p>ETH</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarCryptoBalance