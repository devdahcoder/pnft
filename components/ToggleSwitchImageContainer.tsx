import React from 'react'

type Props = {
    condition: boolean;
    icon: React.ReactNode;
    className?: string;
}

const ToggleSwitchImageContainer = ({condition, icon, className}: Props) => {
    return (
        <div className={`${condition ? 'visible opacity-0 transition-all delay-200 ease-in-out' : 'invisible opacity-100'} ${className}`}>
            {condition && (icon)}
        </div>
    )
}

export default ToggleSwitchImageContainer