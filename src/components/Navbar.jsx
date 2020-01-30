import React, { Fragment, useEffect } from 'react'
import Slideshow from './Carousel'
import About from './About'
import Competences from './Competences'
import Contact from './Contact'
import profil from "../images/profil1.png"
import Partie1 from './partie1'
import anime from 'animejs/lib/anime.es.js';
import Service from './Service';



const Navbar = () => {


    useEffect(() => {
        anime.timeline()
            .add({
                targets: '.ml8 .circle-white',
                scale: [0, 3],
                opacity: [1, 0],
                easing: "easeInOutExpo",
                rotateZ: 360,
                duration: 1000
            }).add({
                targets: '.ml8 .circle-container',
                scale: [0, 1],
                duration: 1100,
                easing: "easeInOutExpo",
                offset: '-=1000'
            }).add({
                targets: '.ml8 .circle-dark',
                scale: [0, 1],
                duration: 1000,
                easing: "easeOutExpo",
                offset: '-=600'
            }).add({
                targets: '.ml8 .letters-left',
                scale: [0, 1],
                duration: 1000,
                offset: '-=550'
            }).add({
                targets: '.ml8 .bang',
                scale: [0, 1],
                rotateZ: [45, 15],
                duration: 1000,
                offset: '-=1000'

            });

        anime({
            targets: '.ml8 .circle-dark-dashed',
            rotateZ: 360,
            duration: 3000,
            easing: "linear",

        });
    })
    return (
        <Fragment>
            <div className="row ">
                <div id="nana" className=" col-4  navbar navbar-light bg-gradient flex-column scroll ">
                    <nav id="navbar-example3" className="">
                        <div role="complementary" className="  ">
                            <h1 className="ml8">
                                <img className="circle circle-dark img-fluid" src={profil}></img>
                                <span className="circle circle-dark"></span>
                                <span className="circle circle-dark-dashed"></span>
                            </h1>
                        </div>
                        <div className="row ">
                            <div className="container   pt-4 pb-4 text-center">
                                <div className="col text-center">

                                    <span className="titre"> <strong>Dimah Asma</strong> </span><br />
                                    <span className="textG ">Fullstack Web Developer </span>|<span className="text">From Brussel</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <nav className="nav nav-pills flex-column">
                                <a className="nav-link" href="#home-1"></a>

                                <nav className="nav nav-pills flex-column  ">
                                    <a className="nav-link " href="#home-1">Home</a>
                                    <a className="nav-link  " href="#about-2">About</a>
                                </nav>
                                <a className="nav-link " href="#skills-3">Skills</a>
                                <a className="nav-link " href="#service-4">Service</a>

                                <a className="nav-link " href="#Contact-5"> Contact</a>
                                <nav className="nav nav-pills flex-column">
                                </nav>
                            </nav>
                        </div>
                        <p className="text-center text-white pt-5">&copy; 2020 Asma</p>
                    </nav>

                </div>
                <div className="col-8">
                    <div data-spy="scroll" data-target="#navbar-example3" data-offset="0" className="scrollspy-example-2">

                        <Slideshow />
                        <About />
                        <Competences />
                        <Service  docu="./images/screencapture-demo-goodlayers-infinite-homepages-emporium-2020-01-30-19_23_39.pdf"/> 
                        <Contact />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}



export default Navbar