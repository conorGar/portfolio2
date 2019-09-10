import React from 'react'
import './Starter.css'

class Starter extends React.Component{

    render(){
        return(
            <div className='starter-container'>
                <div className='word-container'>
                    <h1 className="new-text">New.</h1>
                    <h1 className="innovative-text"> Innovative.</h1>
                    <h1 className="bold-text">Bold.</h1>
                    
                </div>
                <h3 className='subtitle-text'>The All New Conor Garity Model Employee</h3>
                <h3 className='subtitle-text2'>Full-Stack Developer | Graphic Designer</h3>

                <div className='showcase-container'>
                    <div className='display-stand'>
                        
                    </div>
                </div>
            </div>
        )
    }

}

export default Starter;