import React from 'react'

import './ContactForm.css'

class ContactForm extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className={this.props.currentClass}>
                <div className="signup-left-side">
                    <h2 className="copy-text">Get in touch with me. I'll be happy to hear from you.</h2>
                </div>
                <div className="signup-right-side" >
                    <h2 className='form-title'> - Contact -</h2>
                    <form method="POST" action="https://formspree.io/conorgar@gmail.com" >
                        <input className='input-email' type="email" name="email" placeholder="Your email" />
                        <textarea className='input-message' name="message" placeholder="Test Message"></textarea>
                        <button className='submit-button' type="submit">Send</button>
                    </form>
                    <div className="close-button2" onClick={this.props.toggleContactPopup}>X</div>
                </div>
            </div>
        )
    }
}

export default ContactForm