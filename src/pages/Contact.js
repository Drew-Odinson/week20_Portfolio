import React, { useState } from 'react';

function Contact() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    // Regex for simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    // Add more validations as needed for name, message, etc.
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Form is valid, submit data
      console.log(formData);
      // Here you would typically send the data to a server
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        {/* Name field */}
        <input
          name="name"
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {/* Email field */}
        <input
          name="email"
          type="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {/* Message textarea */}
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
      {/* Display validation errors if there are any */}
      {errors.name && <p>{errors.name}</p>}
      {errors.email && <p>{errors.email}</p>}
      {errors.message && <p>{errors.message}</p>}
    </section>
  );
}

export default Contact;
