import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {


  const ref = useRef(null)


  const data = [
    {
      desc:  "Lorem ipsum dolor, i likes this value and this is to good that shoure it",
      filesize: ".9rem",
      close: true, 
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },

    {
      desc:  "Lorem ipsum dolor, i likes this value and this is to good that shoure it",
      filesize: ".9rem",
      close: true, 
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
    },

    {
      desc:  "Lorem ipsum dolor, i likes this value and this is to good that shoure it",
      filesize: ".9rem",
      close: true, 
      tag: {isOpen: true, tagTitle: "Upload", tagColor: "green"},
    },
    {
      desc:  "Lorem ipsum dolor, i likes this value and this is to good that shoure it",
      filesize: ".9rem",
      close: true, 
      tag: {isOpen: true, tagTitle: "Upload", tagColor: "green"},
    },

  ];
  return (
    <div ref={ref} className='fixed z-[3] w-full h-full top-0 left-0 flex gap-5 flex-wrap p-4'>
      {data.map((item, index) =>(
        <Card data={item} reference={ref}/>
      ))}

    </div>
  )
}

export default Foreground
