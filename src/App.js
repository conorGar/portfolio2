import React from 'react';
import logo from './logo.svg';
import './App.css';
import Starter from './Starter/Starter'
import BrandStatement from './BrandStatement/BrandStatement'
import BodyModel from './BodyModel/BodyModel'
import ProjectDisplay from './ProjectDisplay/ProjectDisplay'
import Contact from './Contact/Contact'
import ContactForm from './ContactForm/ContactForm'
import Header from './Header/Header'
import Skills from './Skills/Skills'
import { Link, Element, animateScroll as scroll } from "react-scroll";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      contactFormClass: 'contactform-hide'
    }

  }


  contactClickHandle = () => {

    if (this.state.contactFormClass === 'contactform-hide') {
      this.setState({
        contactFormClass: 'contactform-show'
      })
    }else{
      this.setState({
        contactFormClass: 'contactform-hide'
      })
    }
  }


  render(){
  return (
    <div className="App">
      <Header />
      <Starter />
      <Element className='aboutMe'>
        <BrandStatement/>
      </Element>
      <Skills />

      <BodyModel />
      <Element className='projects'>
        <ProjectDisplay />
      </Element>
      <Element className='contact'>
        <Contact contactButtonHandler={this.contactClickHandle}/>
      </Element>
      <ContactForm currentClass={this.state.contactFormClass} toggleContactPopup={this.contactClickHandle}/>
    </div>
  );
  }
}

export default App;
