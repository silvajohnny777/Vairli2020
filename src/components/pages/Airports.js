import React from 'react'
import Navbar from '../Navbar'

    class Airports extends React.Component {

        constructor() {

            super()

            this.state = {
                loading: false,
                airportsData: []

            }

        }

        componentWillMount() {

            this.setState({
                loading: true,
            })
            
            fetch('https://cors-anywhere.herokuapp.com/https://virtuallh.com/api/Airports.json')
                .then(response => response.json())
                    .then(data =>
                        this.setState({
                            airportsData: data,
                            loading: false,
                        })
                    );


            /*fetch('https://cors-anywhere.herokuapp.com/https://virtuallh.com/api/Airports-extended.json')
                .then(response => response.json())
                    .then(data =>
                        this.setState({
                            airportsData: data,
                            loading: false,
                        })
                    );*/
            
        }

        render() {

            return (

                <>

                    <Navbar />

                    {

                        this.state.loading ? 
                        
                            'loading...' 
                            
                        :                    

                            <div className="vairliContentContainer">

                                <div className="vairliContent">

                                    <div className="vairliContentTitle">

                                        {this.state.airportsData.length}

                                        <span className="titleInfo">Ai</span>rports 

                                    </div>

                                    {

                                        this.state.airportsData.map((airport, index) => {

                                            return (

                                                index < 10 && airport.icao &&

                                                <div key={index} className="vairliAirportContent">

                                                    <div className="vairliAirportContentText">
                    
                                                        <div className="vairliContentTitleTag">
                        
                                                            <span className="titleInfo">{airport.icao.substring(0,2)}</span>{airport.icao.substring(2)}
                        
                                                        </div>
                        
                                                        {airport.name}

                                                    </div>
                    
                                                </div>

                                            )

                                        })

                                    }

                                </div>

                            </div>

                        }

                </>

            )

        }

    }

export default Airports;