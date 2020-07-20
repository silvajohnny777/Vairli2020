import React from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom';

    class Airlines extends React.Component {

        constructor() {

            super()

            this.state = {

                airlinePageText: [
                    {                      
                      "title": "• What?",
                      "paragraph": "Vairli is coming to its next phase, the phase of becoming somethig real! The main idea of this platform is to offer a brand new management system for virtual airlines, where all the hard stuffs as buying a domain, setting up a host and getting the database ready, will be handled by vairli team, which will create a really easy way to start a virtual airline.",
                    },
                    {                      
                      "title": "• Why?",
                      "paragraph": "Vairli is here to change the concept we have about virtual airlines. What we are looking for is connection! Your airline will be able to do codeshare flights, plane leasing as well as other cool features that will increase the experience of your pilots. Furthermore it's really simple to create your va, we offer everything for you from the hosting and domain to the planes creation! Our plane database has over 10 thousand different model of aircrafts.",
                    },       
                ],

            }

        }

        render() {

            return (

                <>

                    <Navbar />

                    <div className="vairliContentContainer">

                        <div className="vairliContent">

                            <div className="vairliContentTitle">

                                <span className="titleInfo">Ai</span>rlines

                            </div>

                            {

                                this.state.airlinePageText.map((text, index) => {

                                    return (

                                        <div key={index} className="vairliContentText">
            
                                            <div className="vairliContentTitleTag">
            
                                                <span className="titleInfo">{text.title.substring(0,4)}</span>{text.title.substring(4)}
            
                                            </div>
            
                                            {text.paragraph}
            
                                        </div>

                                    )

                                })

                            }

                            <Link className="vairliButton" to="/airplanes">

                                Airplanes

                            </Link>

                            <Link className="vairliButton" to="/airports">

                                Airports

                            </Link>

                            <Link className="vairliButton" to="/live-flights">

                                Live flights

                            </Link>

                        </div>

                    </div>

                </>

            )

        }

    }

export default Airlines;