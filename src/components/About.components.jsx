import React, {useContext} from 'react';

import { ThemeContext } from '../Context';

import document_icon from '../assets/document.png';
import code_icon from '../assets/code.png';
import design_icon from '../assets/design.png';

const About = () =>{

    const {theme} = useContext(ThemeContext);

    return(
        <>
        <div className={theme=="dark"?"about-container-dark":"about-container-light"}>
            <h1 className="about-heading">About Me</h1>   
                <div className="block">
                    <div className="about-block">
                    <img src={document_icon} className="w-[15vw] h-[15vh]" alt="" />
                    <p className="ml-[4vw] text-2xl"> Professional skilled in requirement analysis, software development and 
                    database management. Self-directed and proactive professional with effective 
                    systems improvement methodology and careful attention to detail regarding 
                    infrastructure and operational procedures. </p>
                    </div>
                    <div className="about-block">
                    <img src={code_icon} className="w-[15vw] h-[13vh]" alt="" />
                    <p className="ml-[5vw] text-2xl"> Excellent diagnostic abilities with advanced technical expertise and possessing 
strong cross-functional understanding of information technology and business 
processes.</p>
                    </div>
                    <div className="about-block">
                    <img src={design_icon} className="w-[15vw] h-[15vh]" alt="" />
                    <p className="ml-[4vw] text-2xl"> Performed tasks including the integration of APIs with the web applications 
using Restful Web Services, designing of database schemas to store 
application data and providing technical support to end users when needed.  </p>
                    </div>
                </div>
                <div>
                    <div><p></p></div>
                </div>
        </div>
        </>
    )
}

export default About;