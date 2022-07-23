import React from 'react';

type Props = {
    className?: string;
    width?: string;
    height?: string;
}

const Dashboard = ({className, width, height }: Props) => {

    const svgStyle = className ?? '';
    const svgWidth = width ?? '24';
    const svgHeight = height ?? '24';
// fill="#5429FF" stroke="#5429FF"
    return (
        <svg 
            className={svgStyle}
            width={svgWidth} 
            height={svgHeight} 
            viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
            fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z" stroke="#7A797D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke="#7A797D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z" stroke="#7A797D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke="#7A797D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
export default Dashboard

