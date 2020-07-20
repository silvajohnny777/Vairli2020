import React from 'react'
//import vairliLogoBlack from '../images/vairli_black.png'
import { Link } from 'react-router-dom';

    class Navbar extends React.Component {

        constructor() {

            super ()

            this.state = {



            }

        }

        render() {

            return (

                <>

                    <div className="navbarContainer">

                        <div className="navbarContent">

                            <Link className="navbarHomeButton" to="/">

                                <div className="vairliTitle">

                                    <span className="titleInfo">va</span>irli

                                </div>
                            
                            </Link>

                            <div className="navbarButtonsContainer">

                                <Link className="navbarActionContainer" to="/pilots"> 

                                    <div className="navbarAction">

                                        Pilots

                                    </div>

                                </Link>

                                <Link className="navbarActionContainer" to="/airlines">

                                    <div className="navbarAction">

                                        Airlines

                                    </div>

                                </Link>

                                <Link className="navbarActionContainer" to="/about-us">

                                    <div className="navbarAction">

                                        Discover

                                    </div>

                                </Link>

                            </div>

                        </div>

                    </div>

                </>

            )

        }

    }

export default Navbar;