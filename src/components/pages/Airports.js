import React from 'react'
import Navbar from '../Navbar'
import { Map, TileLayer } from "react-leaflet"
import RotatedMarker from "../RotatedMarkers";

import L from 'leaflet';

const plane = new L.Icon({
    iconUrl: require('../icons/b788.svg'),
    iconRetinaUrl: require('../icons/b788.svg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    rotationAngle: 90,
    //shadowSize: null,
    //shadowAnchor: null,
    iconSize: new L.Point(40, 40),
    //className: 'leaflet-div-icon'
});

    class Airports extends React.Component {

        constructor() {

            super()

            this.state = {
                loading: false,
                airportsData: [],
                airportSearch: '',
                mapPosition: [],
                error: false,
                zoom: 5,
                liveFlights: [
                    {
                        "id":"0",
                        "gvauser_id":"207",
                        "flight_id":"202071212541306LH507 ",
                        "departure":"SBGR",
                        "arrival":"EDDF",
                        "ias": "294",
                        "heading":"29",
                        "gs":"494",
                        "altitude":"34949",
                        "fuel":"70243",
                        "fuel_used":"58425",
                        "latitude":"8.73567433204924",
                        "longitude":"-27.4473625297422",
                        "time_passed":"23041",
                        "perc_completed":"40",
                        "time_flag":null,
                        "oat":"-43",
                        "wind_deg":"105",
                        "wind_knots":"12",
                        "flight_status":"CRUISE",
                        "last_update":"2020-07-12 19:18:01",
                        "plane_type":"B748",
                        "pending_nm":"3041",
                        "network":""
                    },
                    {
                        "id":"0",
                        "gvauser_id":"436",
                        "flight_id":"20207122079925XG3294 ",
                        "departure":"LBWN",
                        "arrival":"EDDL",
                        "ias":"0",
                        "heading":"39",
                        "gs":"0","altitude":
                        "238","fuel":"11041",
                        "fuel_used":"14",
                        "latitude":"43.2350079209289",
                        "longitude":"27.8275742987118",
                        "time_passed":"480",
                        "perc_completed":"0",
                        "time_flag":null,
                        "oat":"25",
                        "wind_deg":"130",
                        "wind_knots":"5",
                        "flight_status":"BOARDING",
                        "last_update":"2020-07-12 19:18:02",
                        "plane_type":"B738",
                        "pending_nm":"984",
                        "network":""
                    }
                ],
            }
            this.ground = () => this.setState({zoom: 17})
            this.flight = () => this.setState({zoom: 5})

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


            /*fetch('https://cors-anywhere.herokuapp.com/https://virtuallh.com/api/Airports-extended.json')
                .then(response => response.json())
                    .then(data =>
                        this.setState({
                            airportsData: data,
                            loading: false,
                        })
                    );*/
            
        }

        setAirport = (e) => {

            this.setState({
                airportSearch: e.target.value.toUpperCase().replace(/[^a-z0-9]/gi, '')
            })

            e.target.value.length === 4 &&

                this.searchAirport()

        }

        searchAirport = () => {



        }

        changeZoom = (e) => {

            this.setState({
                zoom: e.target.value
            })

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

                                'error during API call'

                            :

                                <div className="vairliContentContainer">

                                    <div className="vairliContent">

                                        <div className="vairliContentTitle">

                                            {this.state.airportsData.length}

                                            <span className="titleInfo">Ai</span>rports 

                                        </div>

                                        <div className="vairliContentSearchAirport">

                                            <input className="airportSearch" style={{border: this.state.airportSearch && '1px solid #635573'}} value={this.state.airportSearch} onChange={(e) => this.setAirport(e)} placeholder="Ex. EDDF" maxLength={4} />

                                        </div>

                                        <div className="vairliContentSearchAirport">

                                            <input className="airportSearch" style={{border: this.state.zoom && '1px solid #635573'}} value={this.state.zoom} onChange={(e) => this.changeZoom(e)} placeholder="13" maxLength={4} />

                                        </div>
                                                                    <button onClick={this.flight}>
                                                                    Flight
                                                                    </button >
                                                                    < button onClick = {this.ground} >
                                                                    Ground
                                                                    </button>

                                        {

                                            this.state.airportsData.map((airport, index) => {

                                                return (

                                                    airport.icao === this.state.airportSearch &&

                                                    <>

                                                        <div key={index} className="vairliAirportContent">

                                                            <div className="vairliAirportContentText">
                            
                                                                <div className="vairliContentTitleTag">
                                
                                                                    <span className="titleInfo">{airport.icao.substring(0,2)}</span>{airport.icao.substring(2)} 
                                                                    
                                                                    <div className="titleIata">
                                                                        
                                                                        ({airport.iata})

                                                                    </div>
                                
                                                                </div>

                                                                <div className="vairliAirportContentInfoContainer">

                                                                    <div className="vairliAirportContentInfo">
                                
                                                                        <i className="fas fa-info"></i> {airport.name}

                                                                    </div>

                                                                    <div className="vairliAirportContentInfo">

                                                                        <i className="fas fa-map-pin"></i> {airport.city +', ' +airport.country}

                                                                    </div>

                                                                    <div className="vairliAirportContentInfo">

                                                                        <i className="fas fa-globe"></i> {airport.tz}

                                                                    </div>

                                                                    <div className="vairliAirportContentInfo">
                                
                                                                        <i className="far fa-clock"></i> {airport.utc < 0 ? airport.utc+'UTC' : '+'+airport.utc+'UTC'}

                                                                    </div>

                                                                </div>

                                                            </div>
                            
                                                        </div>

                                                        <div className="vairliAirportContent">

                                                            <Map 
                                                                //center={[this.state.liveFlights[0].latitude, this.state.liveFlights[0].longitude]} 
                                                                center={[airport.latitude, airport.longitude]} 
                                                                zoom={this.state.zoom}
                                                                setHeading={270}
                                                            >

                                                                <TileLayer

                                                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2lsdmFqb25hdGhhNzc3IiwiYSI6ImNqa3YzM2xhczAyY3Eza3BjcjJqdnJkN3oifQ.LSyp40FrCc6TSRRBegLkmw"
                                                                    //url="https://api.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2lsdmFqb25hdGhhNzc3IiwiYSI6ImNqa3YzM2xhczAyY3Eza3BjcjJqdnJkN3oifQ.LSyp40FrCc6TSRRBegLkmw"
                                                                    //attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                                                    attribution='<a style="color: #635573" href="http://vairli.com" targer="_blank">vairli system</a>'
                                                                    
                                                                />

                                                                {

                                                                    this.state.liveFlights.map((pilot) => {

                                                                        return (

                                                                            <RotatedMarker 
                                                                                key={pilot.gvauser_id} 
                                                                                position={[pilot.latitude, pilot.longitude]}
                                                                                iconAngle={90}
                                                                                icon={plane}
                                                                                rotationAngle={pilot.heading}
                                                                            >
                                                                                {/*<Popup>{pilot.flight_id}<br />{pilot.departure +' - ' +pilot.arrival}</Popup>*/}
                                                                            </RotatedMarker>

                                                                        )

                                                                    })

                                                                }
                                                                
                                                            </Map>

                                                        </div>

                                                    </>

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