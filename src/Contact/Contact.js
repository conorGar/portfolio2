import React from 'react'
import './Contact.css'

class Contact extends React.Component{

    constructor(props){
       super(props)
    }


    handleButton = (e) =>{
        e.preventDefault()
        console.log("Got here - handle button")
        this.props.contactButtonHandler()
    }

    

    render(){
        let highlightStyle = {
            color: 'rgb(160, 235, 48)'
        
        }
        return(
            <div className='contact-container'>
                <h2 className='contact-copy'>Only Available While Supplies Last. <span style={highlightStyle}>Order Your Conor Garity Today</span>.</h2>
                <button className='contact-button' onClick={this.handleButton}>Contact</button>
                <div className='other-links-container'>
                    <a href="https://www.linkedin.com/in/conor-garity-625b07189/" target="_blank"><img className='other-link-logo' src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" /></a>
                    <a href="https://github.com/conorGar" target="_blank"><img className='other-link-logo' src="https://icon-library.net/images/github-icon-png/github-icon-png-29.jpg" /></a>

                </div>
            </div>
        )
    }
}

export default Contact;