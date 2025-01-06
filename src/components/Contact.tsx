import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import "../app/styles/contact.css"

const Contact = () => {
    return (
        <div id='contact' className='contact-container'>
            <div className='contact-grid md:grid-cols-2'>
                <div className='contact-space'>
                    <h2 className='contact-heading'>
                        Get in touch
                    </h2>
                    
                    <p className='contact-text' >
                        Drop me a line, give me a call, or send me a message by submitting the form.
                    </p>

                    <div className='contact-flex'>
                        <AiOutlineMail size={40} /> fariausman@gmail.com
                    </div>
                    <div className='contact-flex'>
                        <BsTelephone size={40} /> (021) 123456789
                    </div>
                </div>

                <div className='contact-space'>
                    <div className='form'>
                        <label htmlFor="name">Name</label>
                        <input type="text"
                            className='input-field' id='name' />
                    </div>
                    <div className='form' >
                        <label htmlFor="email">Email</label>
                        <input type="text" className="input-field " id='email' />
                    </div>
                    <div className='form' >
                        <label htmlFor="message">message</label>
                        <textarea
                            className='textarea-field' id='message' rows={5}>
                        </textarea>
                    </div>
                    <button className='button'>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Contact