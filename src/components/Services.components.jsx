import {useContext} from 'react';

    import { ThemeContext } from '../Context';


    const Services = () =>{

        const {theme} = useContext(ThemeContext);

        return(
            <>
                <div className={theme=="dark"?"services-container-dark":"services-container-light"}>
                    <h1 className="services-heading">My Services</h1>
                    <div className="services-box">
                    <div className="services-card">
                        <h3 className="card-number text-2xl">#01</h3>
                        <h2 className="text-3xl mb-[5vh]">SDLC Management</h2>
                        <p>Participated in development and implementation of software development 
                        life cycle (SDLC) that improved code quality and reduced development. Applied software development 
                        lifecycle (SDLC) best practices to ensure product quality.</p>
                        <div className="mt-[5vh] ">
                        <p className="">Show more</p>
                        <i class="fi fi-rr-angle-double-small-right"></i>
                        </div>
                    </div>
                    <div className="services-card">
                    <h3 className="card-number text-2xl">#02</h3>
                        <h2 className="text-3xl mb-[5vh]">IT Audit</h2>
                        <p> Performed evaluation of existing and to-be-implemented processes along 
with associated tasks and controls to ensure that they comply with 
regulatory, legal and industry standards.</p>
                        <div className="mt-[5vh] ">
                        <p className="">Show more</p>
                        <i class="fi fi-rr-angle-double-small-right"></i>
                        </div>
                    </div>
                    <div className="services-card">
                    <h3 className="card-number text-2xl">#03</h3>
                        <h2 className="text-3xl mb-[5vh]">Full-stack Developer</h2>
                        <p> Developed the application using front-end web application deployment 
via HTML, CSS, JavaScript, Angular, NodeJS and ExpressJS. Additionally, 
have collaborated with cross-functional teams to gather requirements and 
translate business needs into technical specifications.</p>
                        <div className="mt-[5vh] ">
                        <p className="">Show more</p>
                        <i class="fi fi-rr-angle-double-small-right"></i>
                        </div>
                    </div>
                    </div>
                </div>
            </>
        )

    }

    export default Services; 