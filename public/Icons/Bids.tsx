import React from 'react';

type Props = {
    className?: string;
    width?: string;
    height?: string;
}

const Bids = ({className, width, height }: Props) => {

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
                <path d="M20.01 18.51L15.06 13.56" stroke="#7A797D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.06 13.56L11.52 17.1C10.74 17.88 9.47 17.88 8.69 17.1L4.44999 12.86C3.66999 12.08 3.66999 10.81 4.44999 10.03L11.52 2.96C12.3 2.18 13.57 2.18 14.35 2.96L18.59 7.20002C19.37 7.98002 19.37 9.25001 18.59 10.03L15.06 13.56Z" stroke="#7A797D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 21H8" stroke="#7A797D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.56 7.92001L13.63 14.99" stroke="#7A797D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
export default Bids;