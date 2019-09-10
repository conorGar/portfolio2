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
    }
  }


  render(){
  return (
    <div className="App">
      <Header />
      <Starter />
      <BrandStatement />
      <BodyModel />
      <ProjectDisplay />
      <Contact contactButtonHandler={this.contactClickHandle}/>
      <ContactForm currentClass={this.state.contactFormClass}/>
    </div>
  );
  }
}

export default App;
