import React, { useRef } from "react"
import emailjs from "emailjs-com"

import "./contact.css"
import Sendbox from "./Sendbox.jsx"
import mscott from "../../assets/mscott.png"

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5gbtibq', 'template_5mxr9ba', form.current, 'hmQTRHc9-F27wNRcZ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <div id="contact" className="divbox contactfather">
            <div id="leftext">
                <div><h2>Might as well fill it</h2></div>
                <div><img id="mscott" src={mscott} alt="really cool pic of michael scoot" /></div>
            </div>
            <div id="formside">
                <h2>Contact Me</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <table>
                        <tr>
                            <td><input type="text" name="name" placeholder="Your Full Name" required autoComplete="off" /></td>
                        </tr>
                        <tr>
                            <input type="email" name="email" placeholder="Your e-Mail" required autoComplete="off" />
                        </tr>
                        <tr>
                            <textarea name="message" rows="5" placeholder="Your Message" required autoComplete="off"></textarea>
                        </tr>
                        <tr>
                            <Sendbox />
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    )
}

export default Contact