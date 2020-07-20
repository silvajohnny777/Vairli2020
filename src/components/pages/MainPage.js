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

                <>

                    {/*

                    <div className="vairliMainContainer">
                
                    <div className="vairliMainContainerInfo">

                        <div className="vairliMainContainerInfoConteudo">

                            {/*
                
                            <img alt="vairliLogo" className="vairliLogo" src={vairliLogoBlack} />

                            *//*}

                            <div className="vairliTitle">

                                <span className="titleInfo">va</span>irli

                                <span className="titleVersion">

                                    <span className="titleInfo">v0</span>.1.6

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

                    */}

                    <div className="vairliMainContainerGoodSkills">

                        <div className="vairliContentContainer">
                            
                            <div className="vairliContentHeader">

                                

                            </div>

                            <div className="vairliContentMain">

                                <div className="vairliTitle">

                                    <span className="titleInfo">va</span>irli

                                </div>

                                <div className="vairliMainContainerInfoDescricao">
                                    
                                    Coming soon... <br /> (welp... maybe not so soon, but coming!)
                                    
                                </div>

                                <div className="vairliMainContainerInfoButtonContainer">

                                    <Link className="vairliButton" to="/pilots">

                                        Pilots

                                    </Link>

                                    <Link className="vairliButton" to="/airlines">

                                        Airlines

                                    </Link>

                                </div>

                            </div>

                            <div className="vairliFooterContainer">

                                <div className="vairliContentFooter">

                                    <div className="vairliContentFooterMedias">

                                        <a href="https://www.facebook.com/vairli2020" target="_blank" rel="noopener noreferrer"><i className="fab socialMedia fa-facebook-square"></i></a>
                                        
                                        <a href="https://www.instagram.com/o_vairli/" target="_blank" rel="noopener noreferrer"><i className="fab socialMedia fa-instagram"></i></a>

                                        <a href="https://twitter.com/o_vairli" target="_blank" rel="noopener noreferrer"><i className="fab socialMedia fa-twitter-square"></i></a>

                                        <a href="https://www.youtube.com/channel/UCJDk9dEr38f_ZWRtSxzpRAg" target="_blank" rel="noopener noreferrer"><i className="fab socialMedia fa-youtube"></i></a>

                                    </div>

                                    <div className="vairliContentFooterVersion">

                                        {this.props.version}

                                    </div>

                                </div>

                            </div>
                            
                        </div>                       
                
                    </div>

                </>
                
            )

        }

    }

export default MainPage