import React, { Fragment,useEffect,useState } from 'react'
import site from '../img_screen/trois.png'
import youComunity from '../img_screen/deux.png'
import siteduChef from '../img_screen/un.png'
import { Slide } from 'react-slideshow-image'


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

const Service = () => {


    const [titre, setTitre] = useState('who')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(window.scrollY);
            if (window.scrollY > 1291   ) {
                setTitre(' who  animated fadeInRight')
            } else {
                setTitre('who')
            }

        })
    })




    const [change, setChange] = useState('aboutpara')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(window.scrollY);
            if (window.scrollY > 1291   ) {
                setChange(' aboutpara  animated fadeInRight')
            } else {
                setChange('aboutpara')
            }

        })
    })

    const [para, setPara] = useState('paragraphe')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(window.scrollY);
            if (window.scrollY > 1291   ) {
                setPara(' paragraphe  animated fadeIn')
            } else {
                setPara('paragraphe')
            }

        })
    })

    const [carousel, setCarousel] = useState('carousel slide')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(window.scrollY);
            if (window.scrollY > 1291   ) {
                setCarousel(' carousel slide  animated slideInRight')
            } else {
                setCarousel('carousel slide')
            }

        })
    })
    

    return (
        <Fragment>
            <div id="service-4" className="about bd-lead col-lg-8 col-xs-12">
                <p className={change}>My service </p>

                <h6 className={titre} >service recent</h6>
                <p className={para}> 
                  On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
                <p className={para}>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>


{/* 
                <div id="carouselExampleIndicators" className={carousel} data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={youComunity} className="d-block w-100" alt="Emporium" />
                        </div>
                        <div className="carousel-item">
                            <img src={site} className="d-block w-100" alt="youComunity" />
                        </div>
                        <div className="carousel-item">
                            <img src={siteduChef} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div> */}

 <div className="containerSlide fadeInLeft animated">
         <Slide {...proprietes}>

           {/* pour crée chaque Slides */}
           <div className="chaque-Slide">
             {/* dans chaque slide il y aura une image dedans */}
             <img src={youComunity} alt="img" />
           </div>
           <div className="chaque-Slide">

             <img src={site} alt="img2" />
           </div>

           <div className="chaque-Slide">

             <img src={siteduChef} alt="img2" />
           </div>

         </Slide>
       </div>



                <hr className="p-1 bg-gradient" />

            </div>

        </Fragment>
    )
}

export default Service