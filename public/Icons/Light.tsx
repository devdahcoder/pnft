import React from 'react';

type Props = {
    className?: string;
    width?: string;
    height?: string;
}

const Light = ({className, width, height }: Props) => {

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
            <path fillRule="evenodd" clipRule="evenodd" d="M7 1.75C7.17405 1.75 7.34097 1.81914 7.46404 1.94221C7.58711 2.06528 7.65625 2.2322 7.65625 2.40625V3.0625C7.65625 3.23655 7.58711 3.40347 7.46404 3.52654C7.34097 3.64961 7.17405 3.71875 7 3.71875C6.82595 3.71875 6.65903 3.64961 6.53596 3.52654C6.41289 3.40347 6.34375 3.23655 6.34375 3.0625V2.40625C6.34375 2.2322 6.41289 2.06528 6.53596 1.94221C6.65903 1.81914 6.82595 1.75 7 1.75V1.75ZM9.625 7C9.625 7.69619 9.34844 8.36387 8.85616 8.85616C8.36387 9.34844 7.69619 9.625 7 9.625C6.30381 9.625 5.63613 9.34844 5.14384 8.85616C4.65156 8.36387 4.375 7.69619 4.375 7C4.375 6.30381 4.65156 5.63613 5.14384 5.14384C5.63613 4.65156 6.30381 4.375 7 4.375C7.69619 4.375 8.36387 4.65156 8.85616 5.14384C9.34844 5.63613 9.625 6.30381 9.625 7V7ZM9.3205 10.2484L9.78447 10.7124C9.90824 10.8319 10.074 10.8981 10.2461 10.8966C10.4181 10.8951 10.5827 10.8261 10.7044 10.7044C10.8261 10.5827 10.8951 10.4181 10.8966 10.2461C10.8981 10.074 10.8319 9.90824 10.7124 9.78447L10.2484 9.3205C10.1247 9.20096 9.9589 9.13481 9.78683 9.13631C9.61476 9.1378 9.45017 9.20682 9.32849 9.32849C9.20682 9.45017 9.1378 9.61476 9.13631 9.78683C9.13481 9.9589 9.20096 10.1247 9.3205 10.2484V10.2484ZM10.7118 3.28759C10.8348 3.41066 10.9039 3.57755 10.9039 3.75156C10.9039 3.92558 10.8348 4.09247 10.7118 4.21553L10.2484 4.6795C10.1879 4.74218 10.1155 4.79217 10.0354 4.82657C9.95536 4.86096 9.86924 4.87906 9.78211 4.87982C9.69497 4.88058 9.60856 4.86397 9.52791 4.83098C9.44725 4.79798 9.37398 4.74925 9.31237 4.68763C9.25075 4.62602 9.20202 4.55275 9.16902 4.47209C9.13603 4.39144 9.11942 4.30503 9.12018 4.21789C9.12094 4.13076 9.13904 4.04464 9.17343 3.96458C9.20783 3.88451 9.25782 3.8121 9.3205 3.75156L9.78447 3.28759C9.90753 3.16457 10.0744 3.09545 10.2484 3.09545C10.4225 3.09545 10.5893 3.16457 10.7124 3.28759H10.7118ZM11.5938 7.65625C11.7678 7.65625 11.9347 7.58711 12.0578 7.46404C12.1809 7.34097 12.25 7.17405 12.25 7C12.25 6.82595 12.1809 6.65903 12.0578 6.53596C11.9347 6.41289 11.7678 6.34375 11.5938 6.34375H10.9375C10.7635 6.34375 10.5965 6.41289 10.4735 6.53596C10.3504 6.65903 10.2812 6.82595 10.2812 7C10.2812 7.17405 10.3504 7.34097 10.4735 7.46404C10.5965 7.58711 10.7635 7.65625 10.9375 7.65625H11.5938ZM7 10.2812C7.17405 10.2812 7.34097 10.3504 7.46404 10.4735C7.58711 10.5965 7.65625 10.7635 7.65625 10.9375V11.5938C7.65625 11.7678 7.58711 11.9347 7.46404 12.0578C7.34097 12.1809 7.17405 12.25 7 12.25C6.82595 12.25 6.65903 12.1809 6.53596 12.0578C6.41289 11.9347 6.34375 11.7678 6.34375 11.5938V10.9375C6.34375 10.7635 6.41289 10.5965 6.53596 10.4735C6.65903 10.3504 6.82595 10.2812 7 10.2812V10.2812ZM3.75156 4.6795C3.81249 4.74047 3.88483 4.78885 3.96446 4.82186C4.04408 4.85488 4.12943 4.87188 4.21563 4.87191C4.30182 4.87194 4.38718 4.855 4.46683 4.82204C4.54648 4.78908 4.61886 4.74076 4.67983 4.67983C4.7408 4.6189 4.78917 4.54656 4.82219 4.46693C4.8552 4.38731 4.87221 4.30196 4.87224 4.21576C4.87227 4.12957 4.85533 4.04421 4.82237 3.96456C4.78941 3.88491 4.74109 3.81253 4.68016 3.75156L4.21553 3.28759C4.09176 3.16805 3.92599 3.10191 3.75392 3.1034C3.58186 3.1049 3.41726 3.17391 3.29559 3.29559C3.17391 3.41726 3.1049 3.58186 3.1034 3.75392C3.10191 3.92599 3.16805 4.09176 3.28759 4.21553L3.75156 4.6795V4.6795ZM4.6795 10.2484L4.21553 10.7124C4.09176 10.8319 3.92599 10.8981 3.75392 10.8966C3.58186 10.8951 3.41726 10.8261 3.29559 10.7044C3.17391 10.5827 3.1049 10.4181 3.1034 10.2461C3.10191 10.074 3.16805 9.90824 3.28759 9.78447L3.75156 9.3205C3.87533 9.20096 4.0411 9.13481 4.21317 9.13631C4.38524 9.1378 4.54983 9.20682 4.67151 9.32849C4.79318 9.45017 4.8622 9.61476 4.86369 9.78683C4.86519 9.9589 4.79904 10.1247 4.6795 10.2484V10.2484ZM3.0625 7.65625C3.23655 7.65625 3.40347 7.58711 3.52654 7.46404C3.64961 7.34097 3.71875 7.17405 3.71875 7C3.71875 6.82595 3.64961 6.65903 3.52654 6.53596C3.40347 6.41289 3.23655 6.34375 3.0625 6.34375H2.40625C2.2322 6.34375 2.06528 6.41289 1.94221 6.53596C1.81914 6.65903 1.75 6.82595 1.75 7C1.75 7.17405 1.81914 7.34097 1.94221 7.46404C2.06528 7.58711 2.2322 7.65625 2.40625 7.65625H3.0625Z" fill="#9E9CA4"/>
        </svg>
    )
}
export default Light

