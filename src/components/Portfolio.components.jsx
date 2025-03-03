import { useContext } from 'react';
import { ThemeContext } from '../Context';

import blog_ss from '../assets/blog.png';
import weather_ss from '../assets/weatherapp.png';
import kanboard_ss from '../assets/kanban.png';

const Portfolio = () =>{

    const {theme} = useContext(ThemeContext);

    return(
        <>
        <div className={theme=="dark"?"portfolio-container-dark":"portfolio-container-light"}>
            <h2 className="portfolio-heading">Latest work</h2>
            <div className="sample-container">
            <div>
                <img src={blog_ss} className="container-image" alt="" />
                <h2>Writing Blog</h2>
            </div>
            <div>
                <img src={weather_ss} className="container-image" alt="" />
                <h2>Weather Application</h2>
            </div>
            <div>
                <img src={kanboard_ss} className="container-image" alt="" />
                <h2>Writing Blog</h2>
            </div>
            </div>
        </div>
        
        </>

    )

}

export default Portfolio;