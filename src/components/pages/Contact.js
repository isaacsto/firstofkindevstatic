import React from "react";
import "../../App.css";



function Contact() {
  <form id="contact-form" action="/submit-form" method="POST">
    <h1>Get in Touch</h1>
    <p>Inquiries? I’d love to hear from you! Fill out the form below, and I’ll get back to you as soon as possible.</p>
    <label for="name">Full Name</label>
    <input 
      type="text" 
      id="name" 
      name="name" 
      placeholder="Enter your full name" 
      required 
    />
    <label for="email">Email Address</label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      placeholder="Enter your email address" 
      required 
    />
    <label for="message">Your Message</label>
    <textarea 
      id="message" 
      name="message" 
      rows="5" 
      placeholder="Write your message here..." 
      required
    ></textarea>

    <button type="submit">Send Message</button>
  </form>

  
}

export default Contact;
