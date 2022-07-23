import React from 'react'

type Props = {
    className?: string;
    width?: string;
    height?: string;
}

const LogoIcon = ({className, width, height}: Props) => {

    const svgStyle = className ?? '';
    const svgWidth = width ?? '56';
    const svgHeight = height ?? '56';

    return (
        
        <svg className={svgStyle} width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 37.8823C22.5422 37.8823 18.1177 33.4579 18.1177 28C18.1177 22.5421 22.5422 18.1176 28 18.1176C33.4579 18.1176 37.8824 22.5421 37.8824 28C37.8824 33.4579 33.4579 37.8823 28 37.8823Z" fill="#AE9AFF"/>
            <path d="M8.93455 31.9937C6.1019 32.4841 4.16027 35.1703 5.24764 37.7846C6.76572 41.4344 9.18763 44.6861 12.3275 47.2272C16.8172 50.8604 22.48 52.8019 28.2977 52.7022C34.1153 52.6026 39.7058 50.4683 44.0637 46.6833C47.1111 44.0363 49.416 40.7034 50.8036 37.004C51.7973 34.354 49.7612 31.7359 46.9129 31.3429C44.0647 30.95 41.5073 32.9853 40.1004 35.4483C39.3378 36.7833 38.3477 37.9945 37.1617 39.0246C34.6614 41.1964 31.4538 42.4208 28.116 42.4781C24.7781 42.5352 21.529 41.4214 18.953 39.3366C17.731 38.3478 16.6986 37.1713 15.8889 35.8632C14.3954 33.4499 11.7672 31.5034 8.93455 31.9937Z" fill="#AE9AFF"/>
            <path d="M52.5148 30.4583C52.641 29.4698 52.7059 28.4627 52.7059 27.4408C52.7059 14.105 41.6447 3.29413 28 3.29413C14.3553 3.29413 3.29413 14.105 3.29413 27.4408C3.29413 28.7523 3.4011 30.0393 3.607 31.2941C4.74179 29.7758 6.51291 28.6919 8.42597 28.3622C10.4958 28.0055 12.377 28.4962 13.9675 29.4133C13.8736 28.769 13.8249 28.1105 13.8249 27.4408C13.8249 19.7894 20.1714 13.5866 28 13.5866C35.8286 13.5866 42.1751 19.7894 42.1751 27.4408C42.1751 27.9453 42.1474 28.4435 42.0937 28.934C43.6507 27.9629 45.5135 27.408 47.5952 27.694C49.5183 27.9582 51.3265 28.9804 52.5148 30.4583Z" fill="#5429FF"/>
        </svg>
    );
};

export default LogoIcon
