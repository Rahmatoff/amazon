import { t } from 'i18next';
// import React, { useState } from 'react';
import {FiMenu} from 'react-icons/fi';
import Navbar from '../navbar/Navbar.jsx';
import c from './MiniHeader.module.css';
import { useState, useEffect} from 'react';
import Countdown from "../../countdown/Countdown"



const MiniHeader = () => {
  const[sideBar , setSidebar] =useState(false);

  useEffect(() => {
    if(sideBar){
      document.body.style.overflow = "hidden"
    }
    else{
      document.body.style.overflow = "auto"
    }
  }, [sideBar])
  
  const openSidebar = () =>{
    setSidebar((sidebar) => !sidebar )
  }

  return (
     
    <div className={c.miniheader__inner} style={{position: 'relative'}}>
      <div className={c.miniheader__wrapper} style={{display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '40px' ,
          background:'#222f3e',
          paddingRight: '20px',
          paddingLeft: '20px'}}>
        <ul style={{display: 'flex', width: '47%',justifyContent: 'space-between', alignItems:'center'}}>
          <li 
           style={{color: 'white',display:'flex', alignItems:'center'}}
          > <FiMenu onClick={openSidebar} style={{fontSize: '25px'}}/>{t('sidebar_open')} </li>
          <li style={{color: 'white'}}>{t('deal')}</li>
          <li style={{color: 'white'}}>{t("cservice")}</li>
          <li style={{color: 'white'}}>{t("registery")}</li>
          <li style={{color: 'white'}}>{t("giftcards")}</li>
          <li style={{color: 'white'}}>{t("sell")}</li>
        </ul>
        <Countdown/>

        <p style={{color: 'white' , margin: '0', fontSize: '16px'}}>{t("shopcyber")}</p>
      </div>

    </div>
  )
}

export default MiniHeader;
