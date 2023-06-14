import React, { useState } from 'react';
import '../../App.css'

import { validateEmail } from '../../utils/helpers';

//function to alert user when they enter an invalid email

function Contact() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');


  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } 
  };

  const handleFormSubmit = (e) => {
    
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
     
      return;
    }
    setEmail('');
  };

//style 

const styles = {
  formStyle: {
    padding: '60px',
    width: '50%',
    height: '50vw'
  },
}

//html markup 

  return (
    <div className="form-container">
      <form className="form" style={styles.formStyle}>
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
          value={email}
          name="email"
          onChange={handleInputChange}
         /*  type="email"
          placeholder="email" */
        />
         <label for="floatingInput">Email address</label>
        </div>

        <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput" placeholder="name"
          value={name}
          name="name"
          onChange={handleInputChange}
          /* type="text"
          placeholder="name" */
        />
         <label for="floatingInput">Your Name</label>
        </div>

        <div class="form-floating mb-3">
         <input type="text" class="form-control" id="floatingInput" placeholder="your message" 
          onChange={handleInputChange}
          /* type="text"
          placeholder="message" */
        />
         <label for="floatingInput">Your Message</label>
        </div>
       
        <button button type="button" class="btn btn-secondary" onClick={handleFormSubmit}>Submit</button>

      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
   
  );
}

export default Contact;