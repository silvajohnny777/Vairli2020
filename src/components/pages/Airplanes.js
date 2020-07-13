import React from 'react'
import Navbar from '../Navbar'

    class Airplanes extends React.Component {

        constructor() {

            super()

            this.state = {
                airplanesData: [],
                loading: false,
                error: false,
            }

        }

        componentWillMount() {

            this.setState({
                loading: true,
            })

            fetch('https://cors-anywhere.herokuapp.com/https://virtuallh.com/api/Airplanes.json')
                .then(response => response.json())
                    .then(data =>
                        this.setState({
                            airplanesData: data,
                            loading: false,
                            error: false,
                        })
                    )
                    .catch((error) => {
                      console.error('Error:', error)
                      this.setState({
                          loading: false,
                          error: true,
                      })
                    });
            
        }

        render() {

            return (

                <>

                    <Navbar />

                    {

                        this.state.loading ? 
                        
                            'loading...' 
                            
                        :

                            this.state.error ?

                                'error!'

                            :

                                <div className="vairliContentContainer">

                                    <div className="vairliContent">

                                        <div className="vairliContentTitle">

                                            {this.state.airplanesData.length}

                                            <span className="titleInfo">Ai</span>rplanes

                                        </div>

                                        {

                                            this.state.airplanesData.map((airport, index) => {

                                                return (

                                                    index < 100 &&

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

                    }

                </>

            )

        }

    }

export default Airplanes;