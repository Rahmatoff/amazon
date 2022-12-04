import React, { useEffect, useState } from 'react';
import './Header.css';
import Logo from '../../assets/images/logo.svg';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {FiSearch} from 'react-icons/fi';
import MiniHeader from '../mini-header/MiniHeader';
import {useTranslation} from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
function Header(){
    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const [isNavbarSearchActive, setIsNavbarSearchActive] = useState(false);
    useEffect(() => {
        if(isSidebarActive || isNavbarSearchActive){
          document.body.style.overflow = "hidden"
        }
        else{
          document.body.style.overflow = "auto"
        }
      }, [isSidebarActive, isNavbarSearchActive])



      const [selectedLang, setSelectedLang] = useState("");
      const[selectedOption, setSelectedOPtion] = useState('all')
      const { t } = useTranslation();
      const {i18n} = useTranslation();
      const langs = [
        "uz", 
        "ru",
        "en"
      ]

      
      const changeWebsiteLang = (e) => {
        i18n.changeLanguage(e.target.value || "uz");
        console.log(e.target.value);
      }
       

     
    return(

        <div>
            <header className='site-header'>
                <div className='header-left'>
                    <a href="/">
                        <img className='site-logo' src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'  
                         alt="Amazon header logo" />
                    </a>

                    <div className='location'>
                        < HiOutlineLocationMarker className='location-icon'/>
                        <div className="navigation">
                            <p className='nav-col'>{t('delivery_label')}</p>
                            <p className='nav-colo'>Uzbekistan</p> 
                        </div>
                    </div>
                </div>

                <div className='search-wrapper'>
                    <select className='search-select'>
                        <option value="All">All</option>
                        <option value="Art">Art & Crafts</option>
                        <option value="Automotive">Automotive</option>
                    </select>
                    <input className='search-area' type="text" onBlur={() => {setIsNavbarSearchActive(false)}} onFocus={() => {setIsNavbarSearchActive(true)}} />
                    <button className='search-button'><FiSearch className='search-icon'/></button>
                </div>

                <select className='changeLanguage' onChange={changeWebsiteLang}>
                        {
                            langs.map(langItem => 
                            <option selected={localStorage.getItem("lang") === langItem ? true : false} key={uuidv4()} value={langItem}>{langItem.toUpperCase()}</option>  
                            )
                        }
                </select>


            </header>
                <MiniHeader setSidebar={setIsSidebarActive}/>

        </div>
    )
}

export default Header;