import React from 'react'
import './Header.css'
import { deflate } from 'zlib';

function Header(){
    return(
        <div className='header-container'>
            <img className="site-logo" alt="pear-logo" src="https://res.cloudinary.com/teepublic/image/private/s--a4H3Ijx9--/t_Preview/b_rgb:000000,c_limit,f_jpg,h_630,q_90,w_630/v1544455537/production/designs/3700198_0.jpg" />
            <h4>About</h4>
            <h4>Projects</h4>
            <h4>Contact</h4>
        </div>
    )
}

export default Header;