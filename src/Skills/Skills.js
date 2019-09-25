import React from 'react'
import './Skills.css'


function Skills(){
    return(
        <div className='skills-container'>
        <h1 className='skills-title'>- Skills -</h1>

        <div className='skills-boxes-container'>
            <div className='skill-box'>
                <img className='skill-symbol' src="https://cdn-images-1.medium.com/max/800/1*qUlxDdY3T-rDtJ4LhLGkEg.png" />
                <h2>React</h2>
            </div>
            <div className='skill-box-grey'>
                <img className='skill-symbol-node' src='https://camo.githubusercontent.com/0617f4657fef12e8d16db45b8d73def73144b09f/68747470733a2f2f646576656c6f7065722e6665646f726170726f6a6563742e6f72672f7374617469632f6c6f676f2f6373686172702e706e67' />
                <h2>C#</h2>
            </div>
            <div className='skill-box'>
                <h2>Javascript</h2>
            </div>
            <div className='skill-box-grey'>
                <img className='skill-symbol' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" />
                <h2>HTML</h2>
            </div>
            <div className='skill-box'>
                <img className='skill-symbol-node' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png' />
                <h2>CSS</h2>
            </div>
          
            <div className='skill-box-grey'>
                <h2>Ruby on Rails</h2>
            </div>
            <div className='skill-box'>
                <img className='skill-symbol' src="https://banner2.kisspng.com/20190610/gou/kisspng-microsoft-azure-sql-database-microsoft-azure-sql-d-postani-spletni-razvijalec-izberite-svojo-uno-5cfe7bd5b6e377.6992930615601817177491.jpg" />
                <h2>SQL</h2>
            </div>
            <div className='skill-box-grey'>
                <img className='skill-symbol-node' src="https://process.filestackapi.com/cache=expiry:max/resize=width:1050/deELKydSd2peczaOPAAa" />
                <h2>Node.js</h2>
            </div>


        </div>
        </div>
    )
}

export default Skills;