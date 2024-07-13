import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNo: '',
    occupation: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vq7mvwa', 'template_euorv1d', e.target, '6f0w5dfAcK6MnNWx4')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again.');
      });

    setFormData({
      name: '',
      phoneNo: '',
      occupation: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <input 
            type="text" 
            name="name" 
            placeholder="Full Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="number" 
            name="phoneNo" 
            placeholder="Phone Number" 
            value={formData.phoneNo} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <input 
            type="text" 
            name="occupation" 
            placeholder="Occupation" 
            value={formData.occupation} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;

