import React from 'react'
import './BrandStatement.css'

function BrandStatement(){

    let highlightStyle = {
        color: 'rgb(160, 235, 48)'
     
    }

    return (
        <div className='brand-statement-container'>
            <h1 className = 'statement-title'>The Next Generation of Employee is Here.</h1>
            <h2 className='statement-text'>
            Determined, ambitious creative who goes to great lengths to prove his artistic ability through <span style={highlightStyle}>4+ years of experience</span> with software development, animation, game design, writing and sculpture. Trained by both industry experts and constant self-paced skill development, implementing languages like <span style={highlightStyle}>C#</span>, <span style={highlightStyle}>Javascript</span> and <span style={highlightStyle}>React</span>. All fueled by the desire to put valuable technology into the world that wasn't there before.
            </h2>

        </div>
    )
}

export default BrandStatement;