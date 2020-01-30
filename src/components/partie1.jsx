import React, { Fragment, useEffect } from 'react'
import profil from "../images/profil1.png"
import anime from 'animejs/lib/anime.es.js';



const Partie1 = (props) => {
    const Click = () => {
        document.documentElement.scrollTop = 0;
    }

    useEffect(() => {
        anime.timeline({ loop: true })
            .add({
                targets: '.ml8 .circle-white',
                scale: [0, 3],
                opacity: [1, 0],
                easing: "easeInOutExpo",
                rotateZ: 360,
                duration: 1100
            }).add({
                targets: '.ml8 .circle-container',
                scale: [0, 1],
                duration: 1100,
                easing: "easeInOutExpo",
                offset: '-=1000'
            }).add({
                targets: '.ml8 .circle-dark',
                scale: [0, 1],
                duration: 1100,
                easing: "easeOutExpo",
                offset: '-=600'
            }).add({
                targets: '.ml8 .letters-left',
                scale: [0, 1],
                duration: 1200,
                offset: '-=550'
            }).add({
                targets: '.ml8 .bang',
                scale: [0, 1],
                rotateZ: [45, 15],
                duration: 1200,
                offset: '-=1000'
            }).add({
                targets: '.ml8',
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1400
            });

        anime({
            targets: '.ml8 .circle-dark-dashed',
            rotateZ: 360,
            duration: 3000,
            easing: "linear",
            loop: true,
        });
    })




    return (
        < Fragment>

            {/* col-xs- col-sm-10 col-md-10 col-lg-10 */}
            <div role="complementary" className="  ">
                {/* <div id="colorlib-aside" className="scroll"> */}

                <h1 className="ml8">

                    <img className="circle circle-dark img-fluid" src={profil}></img>
                    <span className="circle circle-dark"></span>
                    <span className="circle circle-container"><span className="circle circle-dark-dashed"></span></span>
                </h1>

                {/* <div className="container text-center text-justify pt-4 pb-4">

                        <span className="titre"> <strong>Dimah Asma</strong> </span><br />
                        <span className="textG ">Fullstack Web Developer </span>|<span className="text">From Brussel</span>
                    </div> */}

                {/* LES LIENS */}
                {/* 
                    <ul className="text-justify list  text-center mt-2 ">
                        <li><a href="" className=" mb-2">HOME</a></li>
                        <li><a href="" className=" mb-2">ABOUT</a></li>
                        <li><a href="" className=" mb-2">COMPETANCES</a></li>
                        <li><a href="" className=" mb-2">SERVICES</a></li>
                        <li><a href="" className=" mb-2">CONTACTE</a></li>
                    </ul> */}
                {/* <p className="text-center text-white pt-5">&copy; 2020 Asma</p> */}
                {/* </div> */}

            </div>
            <i onClick={Click} className=" fleche fas fa-angle-up fa-3x flechscroll"></i>



            {/* btn */}





        </ Fragment>


    )
}

export default Partie1