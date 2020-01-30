import React, { Fragment, useState ,useEffect } from 'react'
import { Slide } from 'react-slideshow-image'
import img1 from '../images/img2.jpg'
import img2 from '../images/presentation.jpeg'
import anime from 'animejs/lib/anime.es.js';


const proprietes = {
  // duree chaque image
  duration: 5000,
  //transition
  transitionDuration: 500,
  //a l infini
  //les 3 petit point
  indicators: true,
  arrows: true,



}
const Slideshow = (props) => {

  // const [pres, setPres]= useState("")


  useEffect (()=>{
    // Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span className='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });

  })
 

  return (
<div className="row " id="home-1">

    <div className=" bg-grey cacaroussel col-xs-12 col-md-12   ">
      <img src="" alt=""/>

    <h1 class="ml12 d-flex justify-content-center text-white">A new production</h1>
    </div>
</div>


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