import React, { useState } from 'react'
import { motion } from "framer-motion"

function SingleButton() {

    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => setIsOn(!isOn);


    return (

        <motion.button className=" select-none w-64 h-16 flex items-center justify-center data-[ison='true']:space-x-5 rounded-[50px] shadow-[10, rgba(0, 0, 0, 0.05)] shadow"
            data-ison={isOn}
            onMouseEnter={() => toggleSwitch()}
            onMouseLeave={() => toggleSwitch()}
            initial={{ backgroundColor: 'hsl(0, 0, 100)' }}
            whileHover={{ backgroundColor: 'hsl(36, 94, 56)' }}
            transition={{ duration: 0.3 }}>

            <motion.div layout>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path data-ison={isOn} className=' data-[ison="true"]:fill-[white] fill-[#CCCCCC]' d="M13 13C16.5896 13 19.5 10.0896 19.5 6.5C19.5 2.91037 16.5896 0 13 0C9.41037 0 6.5 2.91037 6.5 6.5C6.5 10.0896 9.41037 13 13 13ZM19.5 16.25H6.5C2.91037 16.25 0 19.1604 0 22.75V26H26V22.75C26 19.1604 23.0896 16.25 19.5 16.25Z" />
                </svg>
            </motion.div>

        </motion.button>

    )
}

export default SingleButton