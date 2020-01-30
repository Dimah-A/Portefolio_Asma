import React, { Fragment, useState, useEffect } from 'react'

const Competences = () => {



    

    const [titre, setTitre] = useState('who')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 720) {
                setTitre(' who  animated fadeInRight')
            } else {
                setTitre('who')
            }

        })
    })




    const [change, setChange] = useState('')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 720) {
                setChange(' aboutpara  animated fadeInRight')
            } else {
                setChange('aboutpara')
            }

        })
    })

    const [para, setPara] = useState('')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 720) {
                setPara(' paragraphe mb-5  animated fadeIn')
            } else {
                setPara('paragraphe mb-5')
            }

        })
    })

    const [pro, setpro] = useState(" ")

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 811) {
                setpro('circular-chart orange  animated slideInDown ')
            } else {
                setpro("circular-chart orange ")
            }

        })
    })


    const [pro2, setpro2] = useState(" ")

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 811) {
              setpro2('circular-chart green  animated slideInUp ')
            } else {
              setpro2(" circular-chart green")
            }

        })
    })

 const [pro3, setpro3] = useState(" ")

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 811) {
              setpro3('circular-chart blue animated zoomIn ')
            } else {
              setpro3("circular-chart blue ")
            }

        })
    })

    return (
        <Fragment>
            <div className=" about col-lg-8 col-xs-12 mb-5" id="skills-3">
                <p className={change}>My Speciality</p>

                <h6 className={titre}>My skills</h6>
                <p className={para} >The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>





                {/* progress */}

<div className="row">
  

              <div className=" flex-wrapper ">
                <div className="single-chart">


                  <svg viewBox="0 0 36 36" className={pro}>
                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />

                      {/* stocke-dash.. = 95 sur 100 */}
                    <path className="circle" stroke-dasharray="95, 100" 
                      
                      d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"/>
                      {/* x =horizontal y vertical position */}
                    <text x="18" y="20.35" className="percentage">95%</text>
                  </svg>



                  <h5 className="text-center"> <strong className={pro3}>HTML, CSS</strong> </h5>
                      </div>
  
  
                  <div className="single-chart">
                    <svg viewBox="0 0 36 36" className={pro3}>
                      <path className="circle-bg"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"/>

                      <path className="circle"
                        stroke-dasharray="70, 100"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"/>

                      <text x="18" y="20.35" className="percentage">70%</text>
                    </svg>
                    <h5 className="text-center"> <strong className={pro3}>JAVASCRIPT, REACT</strong> </h5>

                </div>

                <div className="single-chart">
                  <svg viewBox="0 0 36 36" className={pro2}>
                  <path className="circle-bg"
                      d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"/>
                  <path className="circle"
                    stroke-dasharray="90, 100"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    <text x="18" y="20.35" className="percentage">90%</text>
                    </svg>
                    <h5 className="text-center"> <strong className={pro3}>ILLUSTRATOR, PHOTOSHOP</strong> </h5>

                  </div>
                </div>



            </div>
                <hr className="p-1 mt-5 bg-gradient" />
                    </div>

        </Fragment>
    )

}





export default Competences