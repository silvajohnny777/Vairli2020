import React from 'react'
import Navbar from '../Navbar'

    class Routes extends React.Component {

        constructor() {

            super()

            this.state = {
                loading: false,
                routesData: [],

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

                                        {this.state.routesData.length}

                                        <span className="titleInfo">Ro</span>utes

                                    </div>

                                    {

                                        this.state.routesData.map((route, index) => {

                                            return (

                                                index < 100 && 

                                                <div key={index} className="vairliAirportContent">

                                                    <div className="vairliAirportContentText">
                    
                                                        <div className="vairliContentTitleTag">
                        
                                                            <span className="titleInfo">{route.airline}</span>
                        
                                                        </div>
                        
                                                        {route.departure +' -> '+route.arrival}

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

export default Routes;