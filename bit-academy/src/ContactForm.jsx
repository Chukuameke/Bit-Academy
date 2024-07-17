import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNo: '',
    occupation: '',
    email: '',
    message: '',
    skills: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => {
        if (checked) {
          return { ...prevData, skills: [...prevData.skills, value] };
        } else {
          return { ...prevData, skills: prevData.skills.filter(skill => skill !== value) };
        }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare data to send
    const emailData = {
      name: formData.name,
      phoneNo: formData.phoneNo,
      occupation: formData.occupation,
      email: formData.email,
      message: formData.message,
      skills: formData.skills.join(', ')
    };

    emailjs.send('service_vq7mvwa', 'template_euorv1d', emailData, '6f0w5dfAcK6MnNWx4')
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
      skills: []
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
              <div className='skills-option'>
                <div>
                  <input
                    type="checkbox"
                    id="skill-graphic-design"
                    name="skill"
                    value="Graphic design"
                    onChange={handleChange}
                    checked={formData.skills.includes("Graphic design")}
                  />
                  <label htmlFor="skill-graphic-design">Graphic design</label>
                  <input
                    type="checkbox"
                    id="skill-ui-ux-design"
                    name="skill"
                    value="UI/UX design"
                    onChange={handleChange}
                    checked={formData.skills.includes("UI/UX design")}
                  />
                  <label htmlFor="skill-ui-ux-design">UI/UX design</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="skill-digital-marketing"
                    name="skill"
                    value="Digital Marketing"
                    onChange={handleChange}
                    checked={formData.skills.includes("Digital Marketing")}
                  />
                  <label htmlFor="skill-digital-marketing">Digital Marketing</label>
                  <input
                    type="checkbox"
                    id="skill-data-analysis"
                    name="skill"
                    value="Data Analysis"
                    onChange={handleChange}
                    checked={formData.skills.includes("Data Analysis")}
                  />
                  <label htmlFor="skill-data-analysis">Data Analysis</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="skill-ai-integration"
                    name="skill"
                    value="AI Integration"
                    onChange={handleChange}
                    checked={formData.skills.includes("AI Integration")}
                  />
                  <label htmlFor="skill-ai-integration">AI Integration</label>
                </div>
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
