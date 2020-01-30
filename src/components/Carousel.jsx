import React, { Fragment, useState, useEffect } from 'react'
import { Slide } from 'react-slideshow-image'

import anime from 'animejs/lib/anime.es.js';
import Partie1 from './partie1'







const Slideshow = (props) => {
  const Click = () => {
    document.documentElement.scrollTop = 0;
  }
    // const [pres, setPres]= useState("")




    return (

      <Fragment>

        <div className="row " id="home-1">

          <div className=" cacaroussel col-xs-12 col-md-12   ">

            <Partie1 />
          </div>


        </div>
        <i onClick={Click} className=" fleche fas fa-angle-up fa-3x flechscroll"></i>


      </Fragment>

      // <div className="containerSlide fadeInLeft animated">
      //   <Slide {...proprietes}>

      //     {/* pour crée chaque Slides */}
      //     <div className="chaque-Slide">
      //       {/* dans chaque slide il y aura une image dedans */}
      //       <img src={img1} alt="img" />
      //     </div>
      //     <div className="chaque-Slide">

      //       <img src={img2} alt="img2" />
      //     </div>

      //   </Slide>
      // </div>


    )
  }


  export default Slideshow