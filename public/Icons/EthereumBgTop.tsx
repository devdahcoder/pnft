import React from 'react';

type Props = {
    className?: string;
    width?: string;
    height?: string;
}

const EthereumBgTop = ({className, width, height }: Props) => {

    const svgStyle = className ?? '';
    const svgWidth = width ?? '43';
    const svgHeight = height ?? '29';

    return (
        <svg 
            className={svgStyle}
            width={svgWidth} 
            height={svgHeight} 
            viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
            fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g opacity="0.24">
                <path d="M21.1859 -41L20.7228 -39.427V6.21343L21.1859 6.67544L42.3713 -5.84741L21.1859 -41Z" fill="#D3D3D3"/>
                <path d="M21.1859 -41L0 -5.84741L21.1859 6.67544V-15.4772V-41Z" fill="white"/>
                <path d="M21.1859 10.6865L20.9249 11.0048V27.2626L21.1859 28.0245L42.3842 -1.82983L21.1859 10.6865Z" fill="#D3D3D3"/>
                <path d="M21.1859 28.0245V10.6865L0 -1.82983L21.1859 28.0245Z" fill="white"/>
                <path d="M21.1859 6.67542L42.3712 -5.84743L21.1859 -15.4772V6.67542Z" fill="#B1B1B1"/>
                <path d="M0 -5.84743L21.1859 6.67542V-15.4772L0 -5.84743Z" fill="#EDEDED"/>
            </g>

        </svg>
    )
}
export default EthereumBgTop