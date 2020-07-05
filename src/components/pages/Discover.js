import React from 'react'
import Navbar from '../Navbar'

    class Pilots extends React.Component {

        constructor() {

            super()

            this.state = {

                team: [
                    {
                        'firstName': 'Jonatha',
                        'lastName': 'Silva',
                        'country': 'BR',
                        'description': 'Developer and founder'
                    },
                    {
                        'firstName': 'Cody',
                        'lastName': 'Newman',
                        'country': 'CA',
                        'description': 'Data manager and cofounder'
                    },
                    {
                        'firstName': 'Kewyn',
                        'lastName': 'Ferreira',
                        'country': 'BR',
                        'description': 'Designer'
                    },
                    {
                        'firstName': 'Eren',
                        'lastName': 'Ozdil',
                        'country': 'TR',
                        'description': 'Developer'
                    },
                    {
                        'firstName': 'Roy',
                        'lastName': 'Genderen',
                        'country': 'NL',
                        'description': 'Designer'
                    },
                ]

            }

        }

        render() {

            return (

                <>

                    <Navbar />

                    <div className="vairliContentContainer">

                        <div className="vairliContent">

                            <div className="vairliContentTitle">

                                <span className="titleInfo">Te</span>am

                            </div>

                            {

                                this.state.team.map((text, index) => {

                                    return (

                                        <div key={index} className="vairliContentText name">
            
                                            <div className="vairliContentTitleTag">
            
                                                <span className="titleInfo">• {text.firstName.substring(0,2)}</span>{text.firstName.substring(2)} <span className="titleInfo">{text.lastName.substring(0,2)}</span>{text.lastName.substring(2)}
            
                                            </div>

                                            <div className="vairliContentTextDescription">

                                                {text.description}

                                            </div>
            
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