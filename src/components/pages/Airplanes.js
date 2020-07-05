import React from 'react'
import Navbar from '../Navbar'
import { planes } from '../data/Airplanes'

    class Airplanes extends React.Component {

        constructor() {

            super()

            this.state = {

                airplanesData: []

            }

        }

        componentWillMount() {

            this.setState({
                airplanesData: planes
            })


            fetch('https://cors-anywhere.herokuapp.com/https://virtuallh.com/api/Airplanes.json')
                .then(response => response.json())
                    .then(data =>
                        this.setState({
                            airplanesData: data,
                            loading: false,
                        })
                    );
            
        }

        render() {

            return (

                <>

                    <Navbar />

                    <div className="vairliContentContainer">

                        <div className="vairliContent">

                            <div className="vairliContentTitle">

                                <span className="titleInfo">Ai</span>rplanes

                            </div>

                            {

                                this.state.airplanesData.map((airport, index) => {

                                    return (

                                        index < 10 &&

                                        <div key={index} className="vairliAirportContent">

                                            <div className="vairliAirportContentText">
            
                                                <div className="vairliContentTitleTag">
                
                                                    <span className="titleInfo">{airport.Designator.substring(0,2)}</span>{airport.Designator.substring(2)}
                
                                                </div>
                
                                                {airport.ModelFullName}

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

export default Airplanes;