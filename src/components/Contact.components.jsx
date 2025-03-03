import {useContext} from 'react';
import { ThemeContext } from '../Context';

const Contact = () =>{

    const {theme} = useContext(ThemeContext);

    return(
        <>
        <div className={theme=="dark"?"contact-container-dark":"contact-container-light"}>
            <div className="contact-heading">
                <h2>Stay in touch!</h2>
            </div>
            <div className="flex flex-row">
            <div className="ml-[15vw] mr-[15vw] mt-[15vh]">
                <div className="flex flex-row gap-4">
            <i class="fi fi-rs-newsletter-subscribe"></i>
                <p className="text-2xl">mihika02@hotmail.com</p>
                </div>
                <div className="flex flex-row gap-4">
                <i class="fi fi-rr-chat-bubble-call"></i>
                <p className="text-2xl">+919048024454</p>
                </div>
                <div className="flex flex-row gap-4">
                <i class="fi fi-bs-marker"></i>
                <p className="text-2xl">TRV, India</p>
                </div>
            </div>
            <form className="flex flex-col gap-10">
                <input type="text" className="input-box" placeholder="Name" name="" id="" />
                <input type="email" className="input-box" placeholder="Email" name="" id="" />
                <textarea className="message-box" placeholder="Message" name="" id=""></textarea>
                <button type="submit" className={theme=="dark"?"submit-button-dark":"submit-button-light"}>Submit</button>
            </form>
            </div>
        </div>
        </>
    )
}

export default Contact;