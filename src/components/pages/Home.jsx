import React from 'react'
//shared components
import Header from '../shared/Header'
import DoYouHave from '../shared/DoYouHave'
// services
import datalogo from '../../assets/datalogo.png'
import ailogo from '../../assets/ailogo.png'
import isslogo from '../../assets/isslogo.png'
import itlogo from '../../assets/itlogo.png'
import pdlogo from '../../assets/pdlogo.png'
import uiuxlogo from '../../assets/uiuxlogo.png'
//articles
import education from '../../assets/education.png'
import software from '../../assets/software.png'
//projects
import rentv from '../../assets/rentvlogo.png'
import cornar from '../../assets/cornarlogo.png'
import airlogo from '../../assets/airlogo.png'
///////////// Data of  sections /////////////////////////
const data = {
     para : "As a leadding IT company , we provide our clients with cutting -edge solutions for business growth . by using agile business process and the latest technology.we leverage our effort to make your business flexible . our service will help your business flexible. our service will help you business in adapting all the change.taking place in  the market . moreover , we provide service to different industries like healthcare, automotive , agricuiture and other . Futher, buy harnessing the powere of digital innovatiuion , we will help you to streamline the business processes .  ",

}
const services = [        
  {
     id : 1,
     logo : pdlogo,
     name : "Product Development",
     text : "Vyaptha has an expertise team for cloud transformation where we offer you a bundle of service like analytics and intelligence, devops, customer experience, and much more",
  },
  {
    id : 1,
    logo : itlogo,
    name : "IT-Services",
    text : "Vyaptha has an expertise team for cloud transformation where we offer you a bundle of service like analytics and intelligence, devops, customer experience, and much more",
 },
 {
  id : 1,
  logo : isslogo,
  name : "Information Security Services",
  text : "Vyaptha has an expertise team for cloud transformation where we offer you a bundle of service like analytics and intelligence, devops, customer experience, and much more",
},
{
  id : 1,
  logo : ailogo,
  name : "AI-ML",
  text : "Vyaptha has an expertise team for cloud transformation where we offer you a bundle of service like analytics and intelligence, devops, customer experience, and much more",
},
{
  id : 1,
  logo : uiuxlogo,
  name : "UI/UX Services",
  text : "Vyaptha has an expertise team for cloud transformation where we offer you a bundle of service like analytics and intelligence, devops, customer experience, and much more",
},
{
  id : 1,
  logo : datalogo,
  name : "BI/Big Data and predictive Analytics",
  text : "Vyaptha has an expertise team for cloud transformation where we offer you a bundle of service like analytics and intelligence, devops, customer experience, and much more",
},
  
 
]

const articles = [
      {
         img : education,
         title :  "Education",
         text : "More , our company, as an IT service provider will help educational institutes dealing with change in the environment .", 
         link : "www.github.com"
      },
      {
        img : software,
        title : "Software And HI-Tech",
        text : " Vyaptha combines big data analytics and to enhance nad loT tools the yield acclerating time to markrt and ensuring traceability.", 
        link : "www.github.com"
     },
]

const projects  = [
      {
         img : rentv,
         title : "RENTV SOLUTIONS"
      },
      {
        img : cornar,
        title : "CRYPTO CORNARS"
     },
     {
      img : airlogo,
      title : "AIR PRODUCT"
     }
]
const Home = () => {
  return (
    <>
      <div className='bg-background  h-[100vh] bg-no-repeat bg-contain md:bg-cover'>
      <Header/>
       <div className='text-white text-3xl md:text-[48px] text-center mx-auto mt-32'>
          <div>_____TECHCLOCKERSPRIVATE LIMITED______</div>
          <div className='md:mt-16'>Gain more effective advantages </div> 
          <div className='md:mt-16'>to your business with </div>
            <div className='md:mt-16'>TECHCLOCKERS</div>
       </div>
          <button className='bg-[#2F4DB4] text-white p-3  px-4 rounded-md ml-52'>discover more</button>
       </div>
      {/* about company */}
       <div className='mt-20 md:flex '>
               {/* left */}
              <div className='w-[100%] md:w-[50%]'>
                     <p className='text-3xl text-[#1C2B5E] text-center'>About Our Company</p>
                     <p className='text-xl text-center mt-5'>We Provide The Best Solutions</p>
                      <p className='text-xl  text-justify mt-5 justify-center md:px-36 leading-8'>{data.para}</p>
              </div>
              {/* right */}
              <div className='md:w-[50%] '>
                     <div className='rounded-xl border-black  w-[70%]  mx-auto p-10 shadow-2xl' >
                         <div className='mx-auto'>
                          <p className='text-center text-xl bold'>Any Enquiry</p>
                          <p className='mt-10 mx-auto'>Your Name</p>
                          <input className='h-8 mx-auto bg-slate-200 rounded-sm w-[100%]' type="text" />
                          <p className='mt-5 mx-auto'>Email</p>
                          <input className='h-8 mx-auto bg-slate-200 rounded-sm w-[100%]' type="text" />
                          <p className='mt-5 mx-auto'>Subject</p>
                          <input  className='h-8 mx-auto bg-slate-200 rounded-sm w-[100%]' type="text" />
                          <p className='mt-5 mx-auto'>message</p>
                          <textarea  className='h-32  bg-slate-200 rounded-sm w-[100%]' type="text" />
                          <button className='bg-[#2F4DB4] text-white p-2 px-16 mt-7  rounded-md ml-52'>send</button>
                          </div>

                     </div>
              </div>
       </div>
       {/* services  */}
       <div className='mt-24'>
             <p className='text-center text-3xl text-[#1C2B5E]'>Our Services</p>
             <p className='text-center text-2xl'> IN Techclockers we offer the best services to our clients, keeping in mind their requirements </p>
             <div className='flex flex-wrap gap-5 justify-around '>
                 {services.map((data)=>(
                      <div className='mt-10 md:max-w-[25%]'>
                            <img src={data.logo} alt="" className='mx-auto'/>
                            <p className='text-2xl text-left'>{data.name}</p>
                            <p className='text-justify text-gray'>{data.text}</p>
                      </div>
                 ))}
             </div>
       </div>

       {/* get your domain */}
       <div className='bg-banner  mt-20 bg-no-repeat bg-contain md:bg-cover'>
             
             <p className='pt-36 pl-40 text-white text-4xl font-semibold	'>Get the domain name you <br/> always wanted</p>
             <div className='flex pl-40 pt-20 pb-20'>
                    <input type="text"  className='h-10 w-1/4'/>
                    <button className='bg-[#2F4DB4] text-white p-2 '>FIND YOUR NEW DOMAIN</button>
             </div>
       </div>
       
       {/* articles */}
       <div className="mt-20 md:flex justify-around">
               {articles.map((data,index) => (
                   <div id={index} className="md:w-[25%]">
                         <img src={data.img} alt="" /> 
                         <p className='font-bold text-xl text-[#2F4DB4] mt-5'>{data.title}</p>
                         <p className='mt-5'>{data.text}</p>
                         <div className='text-right text-lg mt-5'>
                         <a href={data.link} >Learn More</a>
                         </div>
                         
                   </div>
               ))}
       </div> 
      

      {/* projects */}
      <div className='mt-20'>
          <p className='text-[#2F4DB4] font-bold text-3xl text-center'>Projects</p>
          <div className='md:flex justify-around mt-10 mx-20'> 
           {projects.map((data)=>(
                <div className=''>
                      <img src={data.img} alt=""  className='ml-5'/>
                      <p className='text-2xl font-semibold mt-10 '>{data.title}</p>
                </div>
           ))}
          </div>
      </div>
      <DoYouHave/>
      <br />
      <br />
      

        
        
    
   
    </>
       
  )
}

export default Home