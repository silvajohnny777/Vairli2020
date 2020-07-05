import React from 'react'
//import vairliLogoBlack from '../images/vairli_black.png'
import { Link } from 'react-router-dom';

    class MainPage extends React.Component {

        constructor() {

            super()

            this.state = {



            }

        }

        render() {

            return (

                <div className="vairliMainContainer">
            
                  <div className="vairliMainContainerInfo">

                    <div className="vairliMainContainerInfoConteudo">

                        {/*
            
                        <img alt="vairliLogo" className="vairliLogo" src={vairliLogoBlack} />

                        */}

                        <div className="vairliTitle">

                            <span className="titleInfo">va</span>irli

                            <span className="titleVersion">

                                <span className="titleInfo">v1</span>.1.5

                            </span>

                        </div>

                        <div className="vairliMainContainerInfoDescricao">
                            
                            Coming soon... welp... maybe not so soon, but coming!
                            
                        </div>

                        <div className="vairliMainContainerInfoButtonContainer">

                            <Link className="vairliButton" to="/pilots">

                                Pilot

                            </Link>

                            <Link className="vairliButton" to="/airlines">

                                Airlines

                            </Link>

                        </div>

                    </div>
                  
                  </div>
            
                  <div className="vairliMainContainerImage">
            
            
            
                  </div>
            
                </div>
                
            )

        }

    }

export default MainPage