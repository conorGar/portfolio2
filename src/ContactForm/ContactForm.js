import React from 'react'

import './ContactForm.css'

class ContactForm extends React.Component{


    render(){
        return(
            <div className = {this.props.currentClass}>
                <h2 className='form-title'> - Contact -</h2>
                <form action="https://formspree.io/email@domain.tld" method="POST">
                <input className='input-email'type="email" name="email" placeholder="Your email"/>
                <textarea className='input-message' name="message" placeholder="Test Message"></textarea>
                <button className='submit-button' type="submit">Send</button>
                </form>
                

            </div>
        )
    }
}

export default ContactForm