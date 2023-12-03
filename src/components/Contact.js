import React, { useState } from 'react';
import axios from 'axios';


const Contact = () => {
     const [emailData, setEmailData] = useState({
          name: '',
          email: '',
          message: '',
        });
      
        const handleChange = (e) => {
          setEmailData({ ...emailData, [e.target.name]: e.target.value });
        };
      
        const handleSubmit = async (e) => {
          e.preventDefault();
      
          await axios.post('/contact/send-email', emailData)
            .then((response) => {
              console.log(response.data);
              // Handle the response as needed
            })
            .catch((error) => {
              console.error(error);
              // Handle the error as needed
            });
          setEmailData({
                         name: '',
                         email: '',
                         message: '',      })
        };
     return (
          <section className="contact">

               <div className="row">

                    <div className="image">
                         <img src="images/contact-img.svg" alt="" />
                    </div>

                    <form onSubmit={handleSubmit}>
                         <h3>get in touch</h3>
                         <input type="text" placeholder="enter your name" name="name" required maxLength="50" className="box" value={emailData.name} onChange={handleChange} />
                         <input type="email" placeholder="enter your email" name="email" required maxLength="50" className="box" value={emailData.email} onChange={handleChange} />
                         <textarea name="message" className="box" placeholder="enter your message" required maxLength="1000" cols="30" rows="10" value={emailData.message} onChange={handleChange} ></textarea>
                         <input type="submit" value="send message" className="inline-btn" name="submit" />
                    </form>

               </div>

               <div className="box-container">

                    <div className="box">
                         <i className="fas fa-phone"></i>
                         <h3>phone number</h3>
                         <a href="tel:653832145">653-832-145</a>
                         <a href="tel:653522360">653-522-360</a>
                    </div>

                    <div className="box">
                         <i className="fas fa-envelope"></i>
                         <h3>email address</h3>
                         <a href="mailto:besongespany@gmail.com">besongespany@gmail.com</a>
                         <a href="mailto:rosesharon@gmail.com">rosesharon@gmail.com</a>
                    </div>

                    <div className="box">
                         <i className="fas fa-map-marker-alt"></i>
                         <h3>office address</h3>
                         <a href="#">checkpoint molyko</a>
                    </div>

               </div>

          </section>
     )
}

export default Contact;


