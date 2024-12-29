import React, { useState } from "react";
import "../../App.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Thank you for your message! We will get back to you soon.");
      } else {
        setStatus("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <h1>Get in Touch</h1>
      <p>
        Inquiries? I’d love to hear from you! Fill out the form below, and I’ll
        get back to you as soon as possible.
      </p>
      <label htmlFor="name">Full Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your full name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email address"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label htmlFor="message">Your Message</label>
      <textarea
        id="message"
        name="message"
        rows="5"
        placeholder="Write your message here..."
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>

      <button type="submit">Send Message</button>
      <p>{status}</p>
    </form>
  );
}

export default Contact;

