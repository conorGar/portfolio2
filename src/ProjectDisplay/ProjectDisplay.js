import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BeetleSteveImg from '../assets/beetleSteveGif.gif';
import BeetleSteveTitle from '../assets/beetleSteveTitle2.png';
import StoryStarImg from '../assets/storyStarGif.gif';
import TgitImage from '../assets/tgitGif.gif';
import NetflixImage from '../assets/projGif.gif';
import RM_Image from '../assets/rm.gif'
import { Carousel } from 'react-responsive-carousel';
import GithubLogo from '../assets/GitHub-Logo.png'
import './ProjectDisplay.css'

function ProjectDisplay(){
    return(
        <div className='project-display-container'>
            <h1 className='project-title'>- Projects -</h1> 
            <Carousel>
                <div>
                    <img src={BeetleSteveImg} />
                    <div className="legend">
                    <img className='legend-title' src={BeetleSteveTitle} />
                    <h5 className='legend-info'>Short adventure game created using only CSS and HTML. Animated using clay stop-motion animation. Play as Beetle Steve as he carries helpless rock people to safety, avoiding evil moles and squirrels along the way.</h5>
                    <div className='legend-links'>
                        <a href="https://github.com/conorGar/beetle-steve" target="_blank"> <div className="github-link"><img className="github-link-image" src={GithubLogo}></img></div></a>
                        <a href="https://conorgar.github.io/beetle-steve/" target="_blank"> <div className="site-link"><span className="site-link-text">Play</span></div></a>
                    </div>
                    </div>

                </div>
                <div>
                    <img src={TgitImage} />
                    <div className="legend">
                        <h1 className='title-trash'>This Game Is Trash</h1>
                    <h5 className='legend-info'>Large-scale action adventure video game built in Unity written in C# and animated using clay stop motion animation. I do all the coding, art, animation, writing and game design. </h5>
                    <div className='legend-links'>
                        {/* <a href="https://github.com/conorGar/beetle-steve" target="_blank"> <div className="github-link"><img className="github-link-image" src={GithubLogo}></img></div></a> */}
                        <a href="https://nobodysgames.com/about-2/" target="_blank"> <div className="site-link"><span className="site-link-text">Website</span></div></a>
                    </div>
                    </div>

                </div>
                <div>
                    <img src={StoryStarImg} />
                    <div className="legend">
                    <h1 className='title-storyStar'>Story Star</h1>
                    <h5 className='legend-info'>React web app with full front-end and back-end CRUD functionality. Users can log in/sign up to post their own stories and to read and review other user's stories. Designed with an emphasis on collaboration and constructive criticism, user's stories are featured based on how many likes their reviews of other stories get. </h5>
                    <div className='legend-links'>
                        <a href="https://github.com/conorGar/storyStarFrontEnd" target="_blank"> <div className="github-link"><img className="github-link-image" src={GithubLogo}></img></div></a>
                        <a href="https://naughty-dijkstra-919f5c.netlify.com/" target="_blank"> <div className="site-link"><span className="site-link-text">Site(WIP)</span></div></a>
                    </div>
                    </div>

                </div>
                <div>
                    <img src={NetflixImage} />
                    <div className="legend">
                    <h1 className='title-netflix'>There's Nothing On Netlix</h1>
                    <h5 className='legend-info'> Netflix search web-app designed to help users find currently-streaming based on their interests. Built using React.js and using Axios calls to get data from the uNoGS API. </h5>
                    <div className='legend-links'>
                        <a href="https://github.com/conorGar/nothing-on-netflix" target="_blank"> <div className="github-link"><img className="github-link-image" src={GithubLogo}></img></div></a>
                        <a href="https://nothing-netflix.surge.sh/home" target="_blank"> <div className="site-link"><span className="site-link-text">Website</span></div></a>
                    </div>
                    </div>

                </div>
                <div>
                    <img src={RM_Image} />
                    <div className="legend">
                    <h1 className='title-rm'>Rippling Medicinals Site</h1>
                    <h5 className='legend-info'> Full stack REACT web-app created for a friend's small business. Allows admins to upload products directly as needed, minimizing maintenance. </h5>
                    <div className='legend-links'>
                        <a href="https://github.com/conorGar/rippling-medicinals" target="_blank"> <div className="github-link">GitHub: Front End</div></a>
                        <a href="https://github.com/conorGar/rippling_medicinals_backend" target="_blank"> <div className="github-link">GitHub: Back End</div></a>
                        <a href="https://elegant-heyrovsky-24c85a.netlify.com/" target="_blank"> <div className="site-link"><span className="site-link-text">Website</span></div></a>
                    </div>
                    </div>

                </div>
            </Carousel>
        </div>
    )
}

export default ProjectDisplay;