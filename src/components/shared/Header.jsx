import React from 'react'
import logo from '../../assets/logo.png'
const Header = () => {

    const menu = [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "About",
          path: "/about",
        },
        {
          name: "Services",
          path: "/services",
        },
        {
          name: "Domains",
          path: "/domains",
        },
        {
          name: "Pricing",
          path: "/pricing",
        },
    ]

  return (
    <>
        
          <div className=' flex justify-between'>
     
                <img src={logo} alt="logo" />
            
             
             <ul className="hidden md:flex gap-12 p-3 py-6 mx-10 mt-5 text-white font-semibold">
          {menu.map((item, index) => {
            return (
              <li className="mx-auto" key={index}>
                <a href={item.path}>{item.name}</a>
              </li>
            );
          })}
        </ul>
              
         
          </div>
          
    </>
  )
}

export default Header