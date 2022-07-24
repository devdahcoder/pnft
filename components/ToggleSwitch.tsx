import React, { useState } from 'react';
import ToggleSwitchImageContainer from './ToggleSwitchImageContainer';
import Dark from '../public/Icons/Dark';
import Light from '../public/Icons/Light';


type Props = {}

const ToggleSwitch = (props: Props) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div onClick={handleToggle} className="flex h-6 w-11 rounded-full cursor-pointer relative bg-gray-100 transition-all ease-in-out delay-700 toggle--container">
            
            <div className={`absolute flex flex-row items-center justify-center ${isOpen ? 'left-[23px]' : 'left-[3px]'} top-1/2 rounded-full bg-white toggle--indicator translate-x-0 -translate-y-1/2`}>
                <ToggleSwitchImageContainer condition={isOpen} icon={<Dark />} /> 
                <ToggleSwitchImageContainer condition={!isOpen} icon={<Light />} /> 
            </div>
            

            <div className="flex flex-row items-center justify-between border rounded-full w-full px-0.5">
                <Light />
                <Dark />
            </div>
        </div>
    )
}

export default ToggleSwitch