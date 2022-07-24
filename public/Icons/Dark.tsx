import React from 'react';

type Props = {
    className?: string;
    width?: string;
    height?: string;
}

const Dark = ({className, width, height }: Props) => {

    const svgStyle = className ?? '';
    const svgWidth = width ?? '14';
    const svgHeight = height ?? '14';

    return (
        <svg 
            className={svgStyle}
            width={svgWidth} 
            height={svgHeight} 
            viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
            fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d="M11.8732 8.9565C10.9184 9.34045 9.87179 9.43533 8.86353 9.22934C7.85526 9.02335 6.92976 8.52558 6.20209 7.7979C5.47441 7.07022 4.97663 6.14472 4.77065 5.13646C4.56466 4.12819 4.65953 3.08162 5.04349 2.12683C3.91282 2.58226 2.97578 3.41681 2.39301 4.48742C1.81024 5.55803 1.61803 6.79802 1.84933 7.99481C2.08064 9.19161 2.72105 10.2707 3.66078 11.047C4.60052 11.8234 5.78104 12.2487 6.99999 12.25C8.04819 12.25 9.07242 11.9364 9.94088 11.3495C10.8093 10.7625 11.4823 9.92911 11.8732 8.9565Z" stroke="#9E9CA4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
export default Dark


