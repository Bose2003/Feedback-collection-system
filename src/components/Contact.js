import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, you can send formData to your backend or perform any other action here
    console.log('Form submitted:', formData);
    // Optionally, you can clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="Contact">
      <h1>Contact Us</h1>
      <p>For inquiries, please contact us at:</p>
      <p>Name: Chandrabose</p>
      <p>Email: bossc0724@gmail.com</p>
      <p>Phone: 6383935885</p>
      
      <div className="contact-container">
        <div className="contact-box">
          <h2>Send us a message</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" >Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
