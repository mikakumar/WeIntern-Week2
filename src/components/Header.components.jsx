import { useContext } from 'react';
import { ThemeContext } from '../Context';

import pfp_img from '../assets/pfp.png'

const Header = () =>{

      const {theme} = useContext(ThemeContext);
    return(
        <>
            <div className={theme==="dark"?"header-container-dark":"header-container-light"}>
                <img src={pfp_img} className="header-img" alt="" />
                <div className="header-content">
                <h1>I'm <span className={theme=="dark"?"header-name-dark":"header-name-light"}>Mihika Kumar</span>, a rising star developer from India!</h1>
                <p>A fullstack developer from Trivandrum with experience in Finance and IT Audits.</p>
                <div className="header-connect">
                <a href="">Connect with me</a>
                </div>
                </div>
                </div>
        </>
    )
}

export default Header;