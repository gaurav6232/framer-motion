import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"


const Card = ({data, reference}) => {
  return (
    <motion.div drag dragConstraints={reference} className='w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 relative overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
         <div className='footer absolute bottom-0 w-full  left-0'>
            <div className='flex items-center justify-between mt-5 py-4  px-8'>
                <h5>{data.filesize}</h5>
                <span className='w-6 h-6 bg-zinc-500 rounded-full items-center justify-center flex'>
                  
                  {data.close ? <IoMdClose/> : <MdOutlineFileDownload  size=".8em" color='#fff'/> }
                </span>
            </div>
            {data.tag.isOpen && (
            <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600": "bg-green-600"} flex items-center justify-center`}>
                <h3 className='text-md font-semibold'>{data.tag.tagTitle}</h3>
            </div>

            )}
         </div>

    </motion.div> 
     
  )
}

export default Card
