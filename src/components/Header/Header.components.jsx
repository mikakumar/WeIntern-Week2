import './Header.styles.css';

import pfp_img from '../../assets/pfp.png'

const Header = () =>{
    return(
        <>
            <div className="header-container">
                <img src={pfp_img} alt="" />
                <div className="header-content">
                <h1>I'm <span>Mihika Kumar</span>, a rising star developer from India!</h1>
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