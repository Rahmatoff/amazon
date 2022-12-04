import React from 'react';
import Data from "../../dummy-data-navbar.json";
import { useState } from 'react';
import c from './Navbar.module.css';
import {GrFormNext} from 'react-icons/gr';
import {FaUserCircle} from 'react-icons/fa';
import {RiCloseFill} from 'react-icons/ri';
import { v4 as uuidv4 } from 'uuid';
import {GrFormPreviousLink} from "react-icons/gr"


const Navbar = ({sideBar , openSidebar}) => {

  
  const [selectedItem, setSelectedItem] =useState(false);
  const pushBtn =()=>{
    setSelectedItem(true)
  }
  const pushBttn =()=>{
    setSelectedItem(false)
  }


  const [openItem, setOpenItem] = useState(false);

  const itemOPen =() =>{
    setOpenItem(true)
  }
  return (

    <div style={{left: `${(sideBar ? '0': '-100%')}`}} className={ c.NavbarWrapper}>
      <div className={c.sideBarUser}>
        <FaUserCircle className={c.SiderBarIcon}/>
        <div onClick={openSidebar}>
          <RiCloseFill className={c.close__icon}/>  
        </div>


        <h2> Hello, sign in</h2>
        
      </div>
        <div className={ selectedItem?c.main__menu:null}>
          {
            Data.map(data => 
              <div key={uuidv4()} className={c.DataWrapper}>
             
                <h3>{data.title}</h3>
                <div>
                  {
                  data.items.map(data =>
                  <div onClick={pushBtn} className={c.menu__bar}>
                    <p> {data}</p> <GrFormNext className={c.navbar__icon}/>
                  </div>
                  )}
                  <div className={selectedItem? c.childMenu :c.childOpenMenu}>
                    <div onClick={pushBttn}>
                    <GrFormPreviousLink className={c.zz}/>
                     <h3 > Main menu</h3>

                    </div>
                    {
                      data.childItem.map(child => 
                        <p>{child}</p>
                        )
                    }
                  </div>
                  </div>
              </div>
              
             )
          } 
         </div>
    </div>
  )
}

export default Navbar;


//c.childItem








