import React from 'react'
import Header from '../shared/Header'
import bflogo from '../../assets/bflogo.png'
import agrilogo from'../../assets/agrilogo.png'
import autologo from'../../assets/autologo.png'
import DoYouHave from '../shared/DoYouHave'
const service = [
    {
        logo : bflogo,
        title : "Banking and Finance",
        text  : "we'er so excited about our new Learning &Develolopment Programs where people "
    },
    {
        logo : autologo,
        title : "Automotive",
        text  : "we'er so excited about our new Learning &Develolopment Programs where people "
    },
    {
        logo : agrilogo,
        title : "Agriculture",
        text  : "we'er so excited about our new Learning &Develolopment Programs where people "
    }
]
const Domains = () => {
  return (
    <>
    {/* intro */}
   <div className='bg-banner4 bg-no-repeat bg-contain md:bg-cover h-[70vh]'>
     <Header/>
     <div className='pl-96 text-white'>
     <p className='font-bold text-4xl'>DOMAINS</p>
      <p className='text-2xl'>Vyaptha serves amazing services according to the domain of the client.</p>
      <p className='font-bold text-6xl'>OUR DOMAINS</p>
     </div>
   </div>
   <div className='text-center mt-20'>
                <p className='text-4xl font-bold text-[#2F4DB4] '>OUR DOMAINS</p>
                <p className='text-2xl font-bold text-black'>We are providing all domains</p>
               
        </div>
        <div className='md:flex mt-32'>
              {service.map((data)=>(
                 <div className='mx-16 relative mt-20 md:mt-10'>
                       <img src={data.logo} alt="" className='w-32 absolute -top-10 left-16'/>
                       <div className='  border-2 rounded-br-[17%] rounded-tl-[17%] shadow-[5px_5px_5px_10px_rgba(51,204,204,0.25)]'>
                            <p className='text-center text-2xl mt-28'>{data.title}</p>
                            <p className='text-center text-[#2F4DB4] font-extrabold'>_________________</p>
                            <p className='mt-14 text-xl text-center px-5 '>{data.text}</p>
                       </div>
                 </div>
              ))}
              
        </div>
        <p className='text-center text-[#2F4DB4] text-2xl font-extrabold mt-20'>______________________________________________________________</p>
        <div className='mt-5'>
           <DoYouHave/>

        </div>
 
 </>
  )
}

export default Domains