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

// import React from "react";
// import { AiOutlineMail } from "react-icons/ai";
// import { BsTelephone } from "react-icons/bs";
// import "../app/styles/contact.css";

// const Contact = () => {
//     return (
//         <div id="contact" className="contact-container">
//             <div className="contact-grid md:grid-cols-2">
//                 {/* Left Section */}
//                 <div className="contact-info">
//                     <h2 className="contact-heading">Get in Touch</h2>
//                     <p className="contact-text">
//                         Drop me a line, give me a call, or send a message by submitting the form below.
//                     </p>
//                     <div className="contact-details">
//                         <div className="contact-item">
//                             <AiOutlineMail size={24} className="contact-icon" />
//                             <span>fariausman@gmail.com</span>
//                         </div>
//                         <div className="contact-item">
//                             <BsTelephone size={24} className="contact-icon" />
//                             <span>(021) 123456789</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Section */}
//                 <div className="contact-form">
//                     <div className="form-group">
//                         <label htmlFor="name" className="form-label">
//                             Name
//                         </label>
//                         <input
//                             type="text"
//                             className="input-field"
//                             id="name"
//                             placeholder="Enter your name"
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="email" className="form-label">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             className="input-field"
//                             id="email"
//                             placeholder="Enter your email"
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="message" className="form-label">
//                             Message
//                         </label>
//                         <textarea
//                             className="textarea-field"
//                             id="message"
//                             rows={5}
//                             placeholder="Write your message"
//                         ></textarea>
//                     </div>
//                     <button className="button">Send</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contact;
