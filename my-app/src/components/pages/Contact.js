import React from 'react';
import '../../src/App.css';

const styles = {
    contactStyle: {
      display: 'flex', 
      justifyContent: 'flex-end'
      
    },
  };

function Contact() {
    return(
        <section class="contact-me">
            
            <h4 class="head" style={styles.contactStyle}>Contact Me</h4> 
           
            <p style={styles.contactStyle}>
                <a href="tel:+2032410505" class="contact-anchor">203 241 0505</a>
            </p>
            
            <address style={styles.contactStyle}>
                <a href="mailto:isaacstofko@gmail.com" class="contact-anchor">isaacstofko@gmail.com</a>
            </address>
        </section>
    )
}

export default Contact