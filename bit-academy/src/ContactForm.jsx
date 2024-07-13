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
      <div className="form-container">
      <div className="form-con">
      <div className='program-border'>
          <h1>Participant’s Info</h1>
        </div>
      </div>

<div className="input-background">
  <div className="input-content">
        <form onSubmit={handleSubmit}>
          <div className="form-text">
            <p>FILL IN PERSONAL DETAILS</p>
          </div>
          <div className='input'> 
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
          <div className='input'>
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
        </div>
      </div>
    </div>
  );
};

export default Form;

