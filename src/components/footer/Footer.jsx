import React from 'react';
import FooterData from "../../dummy-data-footer.json";
import FotterDataBottom from "../../dummy-footer-bottom.json";
import c from './Footer.module.css';
import { v4 as uuidv4 } from 'uuid';

const Footer = () => {
  return (
    <div className={c.footer__inner}>
    <div className={c.top__footer}>
        <div className={c.footer__wrapper}>
            {
             FooterData.map(data =>
                <div className={c.footer__ph3} key={uuidv4()}>

                    <h3>{data.title}</h3>
                    <ul>
                        <li>
                            {
                                data.items.map(item =>
                                    <p key={uuidv4()}>{item}</p>)
                            }
                        </li>
                    </ul>
                    
                </div>
             )
            }
        </div>

        <div className={c.footer__buttom}>
            <div>

            {
                FotterDataBottom.map(footerItems =>
                    <div key={uuidv4()} className={c.footer__bottomW}>
                        <h4>{footerItems.title}</h4>
                        <p>{footerItems.link}</p>
                    </div>    
                )

            }
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer;