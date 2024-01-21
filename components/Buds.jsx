"use client";
import { motion,  useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';

// const variants={
//     initial:{
//         y:100
//     },
//     animate:{
//         y:0,
//         transition:{
//             type:"spring",
//             duration:2,
//         }
//     }
// };



const Buds = () => {
    const router=useRouter();
    const ref=useRef(null);
    const {scrollYProgress}= useScroll({
        target:ref,
        offset:["0 0.7","1.33 1"]
    });
    const scaleProgress=useTransform(scrollYProgress,[0 ,1],["0","100%"]);
    const scaleOpacityProgress=useTransform(scrollYProgress,[0 ,1],[0.2 ,1]);

    // const isInView=useInView(ref,{margin:"100px"})

  return (
    <div className="container w-[70%] bg-[#F2FFE9]">
        <div className='flex flex-col lg:flex-row gap-[1.8rem] justify-between items-center px-[2rem] lg:py-0 py-4'>
            <motion.div className='md:flex hidden items-center px-auto' >
                <motion.h2 className='text-black max-w-[35rem] w-[100%]  anton-font text-[1.5rem]'  style={{opacity:scaleOpacityProgress,}}>Immerse yourself in crystal-clear sound, experience the convenience of wireless technology, and enjoy a stylish accessory that complements your modern lifestyle. Upgrade your audio experience today and discover a new world of sonic possibilities!</motion.h2>
            </motion.div>
            <motion.div className='bg-[#e7ff47] lg:h-[25rem] xl:h-[25rem] h-[25vh] w-[100%] xl:w-[25rem] lg:w-[30rem] md:w-[25rem] md:h-[25rem] flex items-center justify-center' ref={ref}>
                <motion.div className=' h-[90%] w-[90%] cursor-pointer ' onClick={()=>router.push("product/apple-airpodes-pro")} style={{borderRadius:scaleProgress,backgroundImage:"url(/airpodes.jpg)",backgroundSize:'cover',backgroundPosition: 'center'}}>

                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default Buds