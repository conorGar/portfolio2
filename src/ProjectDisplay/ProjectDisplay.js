import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BeetleSteveImg from '../assets/projectTemplate_beetle.jpg';
import TgitImage from '../assets/projectTemplate_tgit.jpg';
import NetflixImage from '../assets/project_netflix.jpg';

import { Carousel } from 'react-responsive-carousel';
import GithubLogo from '../assets/GitHub-Logo.png'
import './ProjectDisplay.css'

function ProjectDisplay(){
    return(
        <div className='project-display-container'>
            <h1>- Projects -</h1> 
            <Carousel>
                <div>
                    <img src={BeetleSteveImg} />
                    <div className="legend">
                    
                    <a href="https://github.com/conorGar/beetle-steve" target="_blank"> <div className="github-link"><img className="github-link-image" src={GithubLogo}></img></div></a>
                    <a href="https://conorgar.github.io/beetle-steve/" target="_blank"> <div className="site-link"><span className="site-link-text">Play</span></div></a>

                    </div>

                </div>
                <div>
                    <img src={TgitImage} />
                    <div className="legend">
                    
                    <a href="https://github.com/conorGar/beetle-steve" target="_blank"> <div className="github-link"><img className="github-link-image" src={GithubLogo}></img></div></a>
                    <a href="https://conorgar.github.io/beetle-steve/" target="_blank"> <div className="site-link"><span className="site-link-text">Play</span></div></a>

                    </div>

                </div>
                <div>
                    <img src={NetflixImage} />
                    <div className="legend">
                    
                    <a href="https://github.com/conorGar/beetle-steve" target="_blank"> <div className="github-link"><img className="github-link-image" src={GithubLogo}></img></div></a>
                    <a href="https://conorgar.github.io/beetle-steve/" target="_blank"> <div className="site-link"><span className="site-link-text">Play</span></div></a>

                    </div>

                </div>
            </Carousel>
        </div>
    )
}

export default ProjectDisplay;