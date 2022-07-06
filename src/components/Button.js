import React from 'react'
import {motion} from 'framer-motion'


export default function Button(props) {
  const {value, bgColor, color, onClick, className} = props;
  var style = "border-1 rounded-lg text-white py-2 px-3 shadow-lg font-semibold cursor-pointer" + " " +className;

  if(bgColor != undefined){
    style += ` bg-${bgColor}`;
  }else{
    style += " bg-black";
  }
  if(color != undefined){
    style += ` text-${color}`;
  }

  return (
    <motion.button className={style}
      onClick={onClick}
      whileHover={{scale:1.05}}
    >
      {value}
    </motion.button>
  )
}
  
