import React from 'react'
import Navbar from '../Navbar'

    class Pilots extends React.Component {

        constructor() {

            super()

            this.state = {

                pilotsPageText: [
                    {                      
                      "title": "• What?",
                      "paragraph": "Do you want to find a nice virtual airline? We have many! You can also search for one at our overhall stats to chose which one you will join... but, what if you just want to be a pilot, flying for small companies to earn money to buy your first aircraft? That's possible too! At vairli you can start your carrer from the beginning, buying planes and renting small airports to create your own company, you can also call your friends to fly at your company as well!",
                    },
                    {                      
                      "title": "• Why?",
                      "paragraph": "",
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

                                <span className="titleInfo">Pi</span>lots

                            </div>

                            {

                                this.state.pilotsPageText.map((text, index) => {

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

                        </div>

                    </div>

                </>

            )

        }

    }

export default Pilots;