import React from 'react';

type Props = {
    className?: string;
    width?: string;
    height?: string;
}

const Theme = ({className, width, height }: Props) => {

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
                <path d="M20.354 15.354C18.7172 16.0122 16.9231 16.1748 15.1946 15.8217C13.4662 15.4686 11.8796 14.6153 10.6322 13.3678C9.38472 12.1204 8.53139 10.5338 8.17827 8.80535C7.82514 7.0769 7.98779 5.28277 8.64599 3.646C6.7077 4.42673 5.10135 5.85739 4.10232 7.69272C3.10328 9.52805 2.77378 11.6537 3.17031 13.7054C3.56683 15.757 4.66467 17.6069 6.27565 18.9378C7.88662 20.2687 9.91037 20.9977 12 21C13.7969 21.0001 15.5527 20.4624 17.0415 19.4562C18.5303 18.45 19.684 17.0213 20.354 15.354Z" stroke="#7A797D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20.9807 12.5891C21.0638 11.3226 20.878 10.0528 20.4357 8.86319C19.9933 7.67354 19.3043 6.59091 18.4139 5.68638C17.5235 4.78185 16.4519 4.07588 15.2694 3.61482C14.0868 3.15375 12.8202 2.94802 11.5525 3.01113" stroke="#7A797D" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    )
}
export default Theme