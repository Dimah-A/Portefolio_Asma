import React, { Fragment, useEffect, useState } from 'react'

const About = () => {

    const [titre, setTitre] = useState('who')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(window.scrollY);
            if (window.scrollY > 120) {
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
            if (window.scrollY > 120) {
                setChange(' aboutpara  animated fadeInRight')
            } else {
                setChange('aboutpara')
            }

        })
    })

    const [para, setPara] = useState('paragraohe')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(window.scrollY);
            if (window.scrollY > 120) {
                setPara(' paragraphe  animated fadeIn')
            } else {
                setPara('paragraphe')
            }

        })
    })



    return (
        <Fragment>
            <div className="row">

                <div className="col-xs-12 ">

                    <div className="about bd-lead col-lg-8 col-xs-12" id="about-2">

                        <p className={change}>ABOUT US </p>

                        <h6 className={titre} >WHO AM I ?</h6>
                        <p className={para}
                        > <strong>Hi I'm Asma DIMAH </strong>  On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
                        <p className={para}>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                        
                        <hr className="p-1 bg-gradient" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default About