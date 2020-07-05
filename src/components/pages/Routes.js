import React from 'react'
import Navbar from '../Navbar'

    class Routes extends React.Component {

        constructor() {

            super()

            this.state = {
                loading: false,
                routesData: []

            }

        }

        componentWillMount() {

            this.setState({
                loading: true,
            })


            fetch('https://cors-anywhere.herokuapp.com/https://virtuallh.com/api/Routes.json')
                .then(response => response.json())
                    .then(data =>
                        this.setState({
                            routesData: data,
                            loading: false,
                        })
                    );
            
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

                                        {this.state.routesData.length}

                                        <span className="titleInfo">Ai</span>rports 

                                    </div>

                                    {/*

                                        this.state.routesData.map((airport, index) => {

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

                                    */}

                                </div>

                            </div>

                        }

                </>

            )

        }

    }

export default Routes;