import React, { Fragment, useEffect, useState } from 'react'

const Contact = () => {

    const [titre, setTitre] = useState('who')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 2700) {
                setTitre(' who  animated fadeInDown')
            } else {
                setTitre('who')
            }

        })
    })


    const [change, setChange] = useState('aboutpara')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 2700) {
                setChange(' aboutpara  animated fadeInDown')
            } else {
                setChange('aboutpara')
            }

        })
    })


    const [square, setSquare] = useState('square mb-3')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 2900) {
                setSquare(' square mb-3  animated fadeInLeft')
            } else {
                setSquare('square mb-3')
            }

        })
    })


    const [input, setinput] = useState('form-control mb-4 bg-light')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 3000) {
                setinput(' form-control mb-4 bg-light animated fadeInRight')
            } else {
                setinput('form-control mb-4 bg-light')
            }

        })
    })

    const [lien, setLien] = useState('d-flex justify-content-center align-items-center mx-auto"')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 3000) {
                setLien(' d-flex justify-content-center align-items-center mx-auto"  animated slideInDown')
            } else {
                setLien('d-flex justify-content-center align-items-center mx-auto"')
            }

        })
    })

    const [btn, setBtn] = useState('btn ok mt-3')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 3000) {
                setBtn('btn ok mt-3 animated slideInRight')
            } else {
                setBtn('btn ok mt-3')
            }

        })
    })


        return (

            <Fragment>

                <div className="about" id="Contact-5">

                    <p className={change}>Get in touch</p>

                    <h6 className={titre}>Contact</h6>

                    <div className="row">
                        <div className="col-md-5">

                            <div className="row">

                                <div className={square}>
                                    <i className="far fa-envelope fa-3x d-flex justify-content-center pt-4 text-white"></i>
                                </div>
                                <span className="d-flex justify-content-center align-items-center mx-auto"><a  className={lien} href="">Dimah.assma@gmail.com</a> </span>
                            </div>


                            <div className="row">

                                <div className={square}>
                                    <i className="fas fa-map-pin fa-3x d-flex justify-content-center pt-4 text-white"></i>
                                </div>
                                <span className="d-flex justify-content-center align-items-center mx-auto"><a className={lien} href=""> 21th Street, 721 New York</a> </span>
                            </div>



                            <div className="row">

                                <div className={square}>
                                    <i className="fas fa-phone  fa-3x d-flex justify-content-center pt-4 text-white"></i>
                                </div>
                                <span className="d-flex justify-content-center align-items-center mx-auto"><a  className={lien} href="">0485625678</a></span>
                            </div>
                        </div>


                        <div className="col-md-5">

                            <input type="text" className={input} placeholder="Name" />
                            <input type="text" className={input} placeholder="Email" />
                            <input type="text" className={input} placeholder="Subject" />
                            <textarea name="" id="message" cols="30" rows="7" className={input} placeholder="Message"></textarea>



                            <button  className={btn}>SEND MESSAGE</button>
                        </div>
                    </div>


                    <hr className="p-1 bg-gradient" />
                </div>






            </Fragment>
        )
    }


export default Contact