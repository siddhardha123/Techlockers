import React from 'react'
import Header from '../shared/Header'
import DoYouHave from '../shared/DoYouHave'
import aboutcompany from '../../assets/aboutcompany.png'
import aim from '../../assets/aimlogo.png'
import vision from '../../assets/visionlogo.png'
import mission from '../../assets/missionlogo.png'
import saikiran from '../../assets/saikiran.png'
import yogesh from '../../assets/yogesh.png'
const about = {
    p1: "Techclockers Private Limited started its journey in May 2022. In these 1 years, this IT Company has helped many in rapid organic and inorganic growth. This an offshore based IT outsourcing company with headquarter in Bangalore, India. We have huge experience in managing systems and working for clients across the globe. Moreover, we help the enterprise with the AI disciplines to help in prioritizing the execution of change. We keep on upgrading our skill set by building and transferring digital skills and expertise. To bring transformation to the enterprise, we help them with a next- generation technological solution. Our main aim is to provide a solution that helps the enterprise in staying ahead in this changing world.",
    p2: "Techclockers architectures and tools, innovation, and speed, along with specialization and expertise, helps in building a strong relationship with clients. With the in-house experts and tools and strong industry knowledge."
}
const Aim = [
     {
        name : "Our Aim",
        img : aim,
        text : "The primary aim of Techclockers is to add value to customers, partners, and employees. Our team will leverage their effort in building capabilities that helps the organizations and people bloomingin an ever-changing situation. Well, we will help you in turning your ambitious goals into reality. "
     },
     {
        name : "Our Mission",
        img : mission,
        text : "The primary aim of Techclockers is to add value to customers, partners, and employees. Our team will leverage their effort in building capabilities that helps the organizations and people bloomingin an ever-changing situation. Well, we will help you in turning your ambitious goals into reality. "
     },
     {
        name : "Our Vision",
        img : vision,
        text : "The primary aim of Techclockers is to add value to customers, partners, and employees. Our team will leverage their effort in building capabilities that helps the organizations and people bloomingin an ever-changing situation. Well, we will help you in turning your ambitious goals into reality. "
     }
]
const team = [
    {
        name : "B.Saikiran",
        img : saikiran,
        role : "Fullstack Developer",
    },
    {
        name : "K Yogesh",
        img : yogesh,
        role : "role",
    },
    {
        name : "B.Saikiran",
        img : saikiran,
        role : "Fullstack Developer",
    },
]
const About = () => {
  return (
    <>
       {/* intro */}
       <div className='bg-banner2 bg-no-repeat bg-contain md:bg-cover h-[70vh]'>
         <Header/>
         <div className='pl-96 text-white'>
         <p className='font-bold text-4xl'>ABOUT TECHCLOCKERS</p>
          <p className='text-2xl'>To work smart and play smart</p>
         </div>
       </div>
       {/* about company */}
       <div className='md:flex mt-20 px-20'>
         <div className='md:w-[50%]'>
              <img src={aboutcompany} alt="" className='mx-auto max-h-[80vh]' />
         </div>
         <div className='md:w-[50%] px-28 '>
                <p className='text-3xl font-bold text-[#2F4DB4] text-center'>About Company</p>
                <p className='leading-8 mt-5'>{about.p1}</p>
                <p className='leading-8'>{about.p2}</p>
         </div>
       </div>
       {/* aim vision mission */}
       <div className='justify-around  mt-20 px-10 md:flex '>
         {Aim.map((data)=>(
               <div className='border-black md:w-[30%] mx-20'>
                    <img src={data.img} alt=""  className='mx-auto'/>
                    <p className='text-[#2F4DB4] text-2xl font-bold'>{data.name}</p>
                    <p className='text-lg leading-8 text-justify'>{data.text}</p>
               </div>
         ))}
       </div>
       {/* team */}
       
       <div className='mt-20'>
       <p className='text-2xl text-[#2F4DB4] font-semibold text-center'>Our Team</p>
       <div className='justify-evenly md:flex '>
            
            {team.map((data)=>(
                 <div>
                       <img src={data.img} alt="" className='rounded-2xl shadow-2xl'/>
                       <p className='text-xl mt-3'>{data.name}</p>
                       <p>{data.role}</p>
                 </div>
            ))}
       </div>
       </div>
       <DoYouHave />
       <br />
       <br />
       <br />
       

    
    
    </>
  )
}

export default About