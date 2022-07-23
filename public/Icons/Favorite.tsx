import React from 'react';

type Props = {
    className?: string;
    width?: string;
    height?: string;
}

const Favorite = ({className, width, height }: Props) => {

    const svgStyle = className ?? '';
    const svgWidth = width ?? '24';
    const svgHeight = height ?? '24';

    return (
        <svg 
            className={svgStyle}
            width={svgWidth} 
            height={svgHeight} 
            viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
            fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d="M19.86 8.09C19.86 8.51 19.83 8.92 19.78 9.31C19.32 9.11 18.82 9 18.29 9C17.07 9 15.99 9.58999 15.32 10.49C14.64 9.58999 13.56 9 12.34 9C10.29 9 8.63 10.67 8.63 12.74C8.63 15.42 10.05 17.47 11.63 18.86C11.58 18.89 11.53 18.9 11.48 18.92C11.18 19.03 10.68 19.03 10.38 18.92C7.79 18.03 2 14.35 2 8.09C2 5.33 4.21999 3.10001 6.95999 3.10001C8.58999 3.10001 10.03 3.88 10.93 5.09C11.84 3.88 13.28 3.10001 14.9 3.10001C17.64 3.10001 19.86 5.33 19.86 8.09Z" stroke="#7A797D" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M22 12.74C22 17.42 17.67 20.18 15.73 20.84C15.5 20.92 15.13 20.92 14.9 20.84C14.07 20.56 12.8 19.89 11.63 18.86C10.05 17.47 8.63 15.42 8.63 12.74C8.63 10.67 10.29 9 12.34 9C13.56 9 14.64 9.58999 15.32 10.49C15.99 9.58999 17.07 9 18.29 9C18.82 9 19.32 9.11 19.78 9.31C21.09 9.89 22 11.2 22 12.74Z" stroke="#7A797D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
export default Favorite
