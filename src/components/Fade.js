import React from 'react'
import {motion} from 'framer-motion'


export default function Fade(props) {
    const {from, duration} = props;
    let valueX, valueY = 0;
    switch (from) {
        case "l":
            valueX=-500;
            break;
        case "r":
            valueX=500;
            break;
        case "t":
            valueY=-500;
            break;
        case "b":
            valueY=500;
            break;
    }
    const settings = {
        "hidden":{
            x: valueX,
            y: valueY,
            opacity:0,
        },
        "visible":{
            x:0,
            y:0,
            opacity:1,
            transition:{
                duration:duration === undefined ? 0.5: duration,
            }
        }
    }
    return (
        <motion.div 
            variants={settings} 
            initial="hidden"
            animate="visible"
        >
            {props.children}
        </motion.div>
    )
}
  
