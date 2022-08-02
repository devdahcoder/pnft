import React from 'react'

type Props = {
    style?: React.CSSProperties;
    className?: string;
    isRightIcon?: boolean;
    isLeftIcon?: boolean;

}

const Button = (props: Props) => {

    const { className, isLeftIcon, isRightIcon, style } = props;
    return (
        <button>button</button>
    )
}

export default Button