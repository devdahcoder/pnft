import React from 'react';

type Props = {
    className?: string;
    width?: string;
    height?: string;
}

const Ethereum = ({className, width, height }: Props) => {

    const svgStyle = className ?? '';
    const svgWidth = width ?? '9';
    const svgHeight = height ?? '12';

    return (
        <svg 
            className={svgStyle}
            width={svgWidth} 
            height={svgHeight} 
            viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
            fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d="M4.47268 0L4.39313 0.270214V8.1105L4.47268 8.18986L8.11198 6.03864L4.47268 0Z" fill="#343434"/>
            <path d="M4.4727 0L0.833313 6.03864L4.4727 8.18986V4.38441V0Z" fill="#8C8C8C"/>
            <path d="M4.47269 8.8789L4.42786 8.93357V11.7264L4.47269 11.8573L8.11422 6.72879L4.47269 8.8789Z" fill="#3C3C3B"/>
            <path d="M4.4727 11.8573V8.8789L0.833313 6.72879L4.4727 11.8573Z" fill="#8C8C8C"/>
            <path d="M4.47272 8.18985L8.11202 6.03863L4.47272 4.3844V8.18985Z" fill="#141414"/>
            <path d="M0.833313 6.03863L4.4727 8.18985V4.3844L0.833313 6.03863Z" fill="#393939"/>
        </svg>
    )
}
export default Ethereum;

