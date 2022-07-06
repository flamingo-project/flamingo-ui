import React from 'react'
import {motion} from 'framer-motion'

export default function Type(props) {
    const {value, className, onClick} = props;
    let classes = "uppercase text-2xl lg:text-4xl font-bold" + " " + className;
    const titleVariants = {
        "toIntial":{
            opacity:0,
        },
        "toAnimate":{
            opacity:1,
        }
    }
    function toChar(x){
        let t = [];
        for(let i=0; i<x.length; i++){
            t.push(x[i]);   
        }
        return t;
    }
    return (
        <motion.p className={classes}
            variants={titleVariants}
            onClick={onClick}
            initial="toIntial"
            animate="toAnimate"
            transition={{
                staggerChildren:0.1,
                delayChildren:0.5
            }}
        >
            {toChar(value).map((e) =>
                <motion.span
                    variants={titleVariants}
                    transition={{duration:0}}
                >
                    {e}
                </motion.span>
            )}
        </motion.p>
    )
}
