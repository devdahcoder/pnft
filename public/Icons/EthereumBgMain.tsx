import React from 'react';

type Props = {
    className?: string;
    width?: string;
    height?: string;
}

const EthereumBgMain = ({className, width, height }: Props) => {

    const svgStyle = className ?? '';
    const svgWidth = width ?? '94';
    const svgHeight = height ?? '140';

    return (
        <svg 
            className={svgStyle}
            width={svgWidth} 
            height={svgHeight} 
            viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
            fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g opacity="0.24">
            <path d="M46.6882 0L45.6749 3.44167V103.302L46.6882 104.313L93.0414 76.9133L46.6882 0Z" fill="#D3D3D3"/>
            <path d="M46.6881 0L0.333679 76.9133L46.6881 104.313V55.8435V0Z" fill="white"/>
            <path d="M46.688 113.089L46.1169 113.786V149.357L46.688 151.025L93.0696 85.7037L46.688 113.089Z" fill="#D3D3D3"/>
            <path d="M46.6881 151.025V113.089L0.333679 85.7037L46.6881 151.025Z" fill="white"/>
            <path d="M46.688 104.313L93.0413 76.9133L46.688 55.8435V104.313Z" fill="#B1B1B1"/>
            <path d="M0.333679 76.9133L46.6881 104.313V55.8435L0.333679 76.9133Z" fill="#EDEDED"/>
            </g>
        </svg>
    )
}
export default EthereumBgMain

