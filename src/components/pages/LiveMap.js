import React from 'react'
import Navbar from '../Navbar'
import { Map, TileLayer } from "react-leaflet"
import RotatedMarker from "../RotatedMarkers";
import PlaneIcon from '../icons/b788Icon.svg'

import L from 'leaflet';

const plane = new L.Icon({
    iconUrl: require('../icons/b788.svg'),
    iconRetinaUrl: require('../icons/b788.svg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 30),
});

    class LiveMap extends React.Component {

        constructor() {

            super()

            this.state = {
                loading: false,
                airportsData: [],
                airportSearch: '',
                mapPosition: [],
                error: false,
                planeClicked: false,
                zoom: 5,
                flightInfo: '',
                liveFlights: [
                    {
                        "id":"0",
                        "gvauser_id":"207",
                        "flight_id":"20207181583036LH1406 ",
                        "departure":"EDDF",
                        "arrival":"LYBE",
                        "ias":"0",
                        "heading":"302",
                        "gs":"0",
                        "altitude":"349",
                        "fuel":"4700",
                        "fuel_used":"-505",
                        "latitude":"44.819737064574",
                        "longitude":"20.2931154933152",
                        "time_passed":"8760",
                        "perc_completed":"100",
                        "time_flag":null,
                        "oat":"22",
                        "wind_deg":"69",
                        "wind_knots":"5",
                        "flight_status":"TAXI TO THE GATE",
                        "last_update":"2020-07-18 17:34:29",
                        "plane_type":"A320",
                        "pending_nm":"1",
                        "network":""
                    },
                    {
                        "id":"0",
                        "gvauser_id":"367",
                        "flight_id":"2020718163229614DLH119 ",
                        "departure":"EDDF",
                        "arrival":"EGPH",
                        "ias":"311",
                        "heading":"304",
                        "gs":"445",
                        "altitude":"24723",
                        "fuel":"10455",
                        "fuel_used":"6539",
                        "latitude":"50.9179485000252",
                        "longitude":"6.94995210235174",
                        "time_passed":"3720",
                        "perc_completed":"15",
                        "time_flag":null,
                        "oat":"-30",
                        "wind_deg":"234",
                        "wind_knots":"4",
                        "flight_status":"CLIMBING",
                        "last_update":"2020-07-18 17:34:29",
                        "plane_type":"",
                        "pending_nm":"477",
                        "network":""
                    },
                    {
                        "id":"0",
                        "gvauser_id":"436",
                        "flight_id":"2020718162645440XG2854 ",
                        "departure":"GCFV",
                        "arrival":"EDDM",
                        "ias":"268",
                        "heading":"32",
                        "gs":"458",
                        "altitude":"35976",
                        "fuel":"10332",
                        "fuel_used":"10536",
                        "latitude":"36.2042316320709",
                        "longitude":"-6.00595735446078",
                        "time_passed":"7500",
                        "perc_completed":"36",
                        "time_flag":null,
                        "oat":"-44",
                        "wind_deg":"326",
                        "wind_knots":"4",
                        "flight_status":"CRUISE",
                        "last_update":"2020-07-18 17:34:47",
                        "plane_type":"B738",
                        "pending_nm":"1073",
                        "network":""
                    },
                    {
                        "id":"0",
                        "gvauser_id":"464",
                        "flight_id":"2020718164836516ZWT015 ",
                        "departure":"LFMN",
                        "arrival":"LEVC",
                        "ias":"271",
                        "heading":"225",
                        "gs":"474",
                        "altitude":"36010",
                        "fuel":"5181",
                        "fuel_used":"2321",
                        "latitude":"42.5539233449982",
                        "longitude":"4.17528177926966",
                        "time_passed":"2820",
                        "perc_completed":"34",
                        "time_flag":null,
                        "oat":"-49",
                        "wind_deg":"325",
                        "wind_knots":"39",
                        "flight_status":"CRUISE",
                        "last_update":"2020-07-18 17:35:02",
                        "plane_type":"TOUR",
                        "pending_nm":"280",
                        "network":""
                    },
                    {
                        "id":"0",
                        "gvauser_id":"385",
                        "flight_id":"202071812451775XG2340 ",
                        "departure":"HEGN",
                        "arrival":"EDDF",
                        "ias":"229",
                        "heading":"321",
                        "gs":"318",
                        "altitude":"24669",
                        "fuel":"4899",
                        "fuel_used":"11975",
                        "latitude":"48.778074814837",
                        "longitude":"9.52333348157078",
                        "time_passed":"17400",
                        "perc_completed":"95",
                        "time_flag":null,
                        "oat":"-25",
                        "wind_deg":"6",
                        "wind_knots":"5",
                        "flight_status":"DESCEND",
                        "last_update":"2020-07-18 17:35:19",
                        "plane_type":"B738",
                        "pending_nm":"84",
                        "network":""
                    },
                    {
                        "id":"0",
                        "gvauser_id":"415",
                        "flight_id":"202071882018346NH115 ",
                        "departure":"CYVR",
                        "arrival":"RJTT",
                        "ias":"268",
                        "heading":"266",
                        "gs":"498",
                        "altitude":"38933",
                        "fuel":"78716",
                        "fuel_used":"23381",
                        "latitude":"56.1165524255998",
                        "longitude":"-167.507783885949",
                        "time_passed":"15301",
                        "perc_completed":"-9",
                        "time_flag":null,
                        "oat":"-48",
                        "wind_deg":"77",
                        "wind_knots":"4",
                        "flight_status":"CRUISE",
                        "last_update":"2020-07-18 17:35:20",
                        "plane_type":"B789",
                        "pending_nm":"12722",
                        "network":""
                    },
                    {
                        "id":"0",
                        "gvauser_id":"311",
                        "flight_id":"202071894120853LH474 ",
                        "departure":"EDDM",
                        "arrival":"CYUL",
                        "ias":"215",
                        "heading":"253",
                        "gs":"219",
                        "altitude":"3121",
                        "fuel":"6152",
                        "fuel_used":"40902",
                        "latitude":"45.6435517583311",
                        "longitude":"-73.429917159281",
                        "time_passed":"28440",
                        "perc_completed":"100",
                        "time_flag":null,
                        "oat":"17",
                        "wind_deg":"269",
                        "wind_knots":"5",
                        "flight_status":"DESCEND",
                        "last_update":"2020-07-18 17:35:22",
                        "plane_type":"A359",
                        "pending_nm":"17",
                        "network":""
                    }
                ],
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

        changeZoom = (e) => {

            this.setState({
                zoom: e.target.value
            })

        }

        showRoute = (flightInfo) => {

            this.setState({
                planeClicked: true,
                flightInfo: {
                    'id': flightInfo.flight_id,
                    'latitude': flightInfo.latitude,
                    'longitude': flightInfo.longitude,
                    'departure': flightInfo.departure,
                    'arrival': flightInfo.arrival,
                    'flightStatus': flightInfo.flight_status,
                    'ias': flightInfo.ias,
                    'pendingNM': flightInfo.pending_nm,
                    'percentage': flightInfo.perc_completed,
                },
                zoom: flightInfo.flight_status === 'BOARDING' || flightInfo.flight_status === 'TAXI TO THE RWY' || flightInfo.flight_status === 'TAXI TO THE GATE' ? 15 : 5
            })

            console.log(flightInfo)

            console.log('flight from ' +flightInfo.departure +' to '+flightInfo.arrival)

            this.state.airportsData.map((airport) => {

                return (

                    airport.icao === flightInfo.departure ?

                        this.setState({
                            routeInfoDeparture: {
                                'departureAirport': {
                                    'latitude': airport.latitude,
                                    'longitude': airport.longitude
                                },
                            }
                        }) 
                        
                    :
                        
                        airport.icao === flightInfo.arrival ?

                            this.setState({
                                routeInfoArrival: {
                                    'arrivalAirport': {
                                        'latitude': airport.latitude,
                                        'longitude': airport.longitude
                                    },
                                }
                            })

                    :

                        ''

                )

            })

        }

        hideFlightDetails = () => {

            this.setState({
                planeClicked: false,
                zoom: 5,
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

                                            <span className="titleInfo">Li</span>ve flights

                                        </div>

                                        <div className="vairliLiveFlightsTable">

                                            <div className="vairliLiveFlightsTableContent">

                                                <div className="vairliLiveFlightsTableHeader">

                                                    <div className="vairliLiveFlightsTableHeaderItem">

                                                        FlightNumber

                                                    </div>

                                                    <div className="vairliLiveFlightsTableHeaderItem">

                                                        PilotName

                                                    </div>

                                                    <div className="vairliLiveFlightsTableHeaderItem">

                                                        Departure

                                                    </div>

                                                    <div className="vairliLiveFlightsTableHeaderItem">

                                                        Arrival

                                                    </div>

                                                    <div className="vairliLiveFlightsTableHeaderItem">

                                                        FlightStage

                                                    </div>

                                                    <div className="vairliLiveFlightsTableHeaderItem">

                                                        AircraftType

                                                    </div>

                                                    <div className="vairliLiveFlightsTableHeaderItem">

                                                        PercCompleted

                                                    </div>

                                                    <div className="vairliLiveFlightsTableHeaderItem">

                                                        PendingNM

                                                    </div>

                                                    <div className="vairliLiveFlightsTableHeaderItem">

                                                        TrackMap

                                                    </div>

                                                </div>

                                                <div className="vairliLiveFlights">

                                                    {

                                                        this.state.liveFlights.map((flight, index) => {

                                                            return (

                                                                <div key={index} className="vairliLiveFlightRole"> 

                                                                    <div className="vairliLiveFlightRolePercentage"></div>

                                                                    <div className="vairliLiveFlightRoleItem">

                                                                        XX000

                                                                    </div>

                                                                    <div className="vairliLiveFlightRoleItem">

                                                                        {flight.gvauser_id}

                                                                    </div>

                                                                    <div className="vairliLiveFlightRoleItem">
                                                                
                                                                        {flight.departure} 
                                                                
                                                                    </div>

                                                                    <div className="vairliLiveFlightRoleItem">
                                                                
                                                                        {flight.arrival} 
                                                                
                                                                    </div>

                                                                    <div className="vairliLiveFlightRoleItem">

                                                                        {flight.flight_status.indexOf('TAXI') ? flight.flight_status : 'TAXI'} 

                                                                    </div>

                                                                    <div className="vairliLiveFlightRoleItem">

                                                                        {flight.plane_type} 

                                                                    </div>

                                                                    <div className="vairliLiveFlightRoleItem">

                                                                        {flight.perc_completed}% 

                                                                    </div>

                                                                    <div className="vairliLiveFlightRoleItem">

                                                                        {flight.pending_nm}NM

                                                                    </div>

                                                                    <div className="vairliLiveFlightRoleItem">

                                                                        {/*

                                                                            this.state.planeClicked &&

                                                                                this.state.flightInfo.id === flight.flight_id ?

                                                                                   <div onClick={() => this.hideFlightDetails()}>'x'</div>
                                                                                   
                                                                                : 
                                                                                
                                                                                    <div onClick={() => this.showRoute(flight)}><i className="fa trackOnMap fa-plane"></i></div>

                                                                        */}
                                                                                
                                                                            <div onClick={() => this.showRoute(flight)}>

                                                                                {flight.flight_status.indexOf('TAXI') ? <i className="fa trackOnMap fa-plane"></i> : <i className="fa trackOnMap fa-road"></i>}
                                                                                
                                                                                
                                                                                
                                                                            </div>

                                                                    </div>
                                                                    
                                                                </div>

                                                            )

                                                        })

                                                    }

                                                </div>

                                            </div>

                                        </div>

                                        <div className="vairliAirportContent">

                                            <Map 
                                                //center={[this.state.liveFlights[0].latitude, this.state.liveFlights[0].longitude]} 
                                                center={this.state.planeClicked ? [this.state.flightInfo.latitude, this.state.flightInfo.longitude] : [this.state.liveFlights[0].latitude, this.state.liveFlights[0].longitude]} 
                                                zoom={this.state.zoom}
                                                setHeading={270}
                                                maxZoom={15}
                                                minZoom={2}
                                            >

                                                <TileLayer

                                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2lsdmFqb25hdGhhNzc3IiwiYSI6ImNqa3YzM2xhczAyY3Eza3BjcjJqdnJkN3oifQ.LSyp40FrCc6TSRRBegLkmw"
                                                    //url="https://api.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2lsdmFqb25hdGhhNzc3IiwiYSI6ImNqa3YzM2xhczAyY3Eza3BjcjJqdnJkN3oifQ.LSyp40FrCc6TSRRBegLkmw"
                                                    //attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                                    attribution='<a style="color: #635573" href="http://vairli.com" targer="_blank">vairli system</a>'
                                                    
                                                />

                                                {

                                                    this.state.liveFlights.map((pilot, index) => {

                                                        return (

                                                            <RotatedMarker 
                                                                key={pilot.gvauser_id} 
                                                                className={'planeIconMap'}
                                                                position={[pilot.latitude, pilot.longitude]}
                                                                icon={plane}
                                                                rotationAngle={pilot.heading}
                                                                onClick={() => this.showRoute(pilot)}
                                                            >
                                                                {/*<Popup>{pilot.flight_id}<br />{pilot.departure +' - ' +pilot.arrival}</Popup>*/}

                                                            </RotatedMarker>

                                                        )

                                                    })

                                                }

                                                {

                                                    this.state.planeClicked &&

                                                        <div className="flightInfoBoxContainer" style={{
                                                            fontFamily: 'signika',
                                                            width: '60%',
                                                            height: '100px',
                                                            backgroundColor: '#fcfaff',
                                                            border: '1px solid #635573',
                                                            zIndex: '999',
                                                            position: 'absolute',
                                                            marginLeft: '20%',
                                                            marginTop: '350px',
                                                            //marginTop: '200px',
                                                            borderRadius: '5px',
                                                            color: '#635573',
                                                            opacity: '0.85'
                                                        }}>
                                                            <div className="flightInfoBoxContent" style={{
                                                                padding: '10px'
                                                            }}>
                                                                <div className="flightInfoBoxHeader" style={{
                                                                    display: 'flex',
                                                                    justifyContent: 'space-between'
                                                                }}>
                                                                    <div className="flightInfoBoxHeaderText" style={{
                                                                        fontSize: '20px'
                                                                    }}>
                                                                        FLN000
                                                                    </div>
                                                                    <div className="flightInfoBoxHeaderClose" onClick={() => this.hideFlightDetails()} style={{
                                                                        cursor: 'pointer',
                                                                        fontWeight: 'bold',
                                                                        border: '1px solid #635573',
                                                                        borderRadius: '50%',
                                                                        width: '15px',
                                                                        height: '15px',
                                                                        display: 'flex',
                                                                        justifyContent: 'center',
                                                                        alignItems: 'center',
                                                                    }}>
                                                                        X
                                                                    </div>
                                                                </div>
                                                                <div className="flightInfoBoxInfoContent">
                                                                    <div className="flightInfoBoxInfoFlight" style={{                                                         
                                                                        display: 'flex',
                                                                        justifyContent: 'space-between',
                                                                        fontSize: '18px',
                                                                    }}>
                                                                        <div className="flightInfoBoxInfoDepartureAir">
                                                                            {this.state.flightInfo.departure}
                                                                        </div>
                                                                        <div className="flightInfoBoxStatus" style={{
                                                                            display: 'flex',
                                                                            flexDirection: 'column',
                                                                            justifyContent: 'center',
                                                                            width: '70%',
                                                                        }}>
                                                                            <div className="flightInfoStatsPath" style={{
                                                                                height: '1px',
                                                                                backgroundColor: '#635573'
                                                                            }}>
                                                                                <img alt="planeProgress" src={PlaneIcon} className="flightInfoPlanePosition" style={{ 
                                                                                    marginTop: '-20px',
                                                                                    marginLeft: this.state.flightInfo.percentage < 0 ? '0%' : this.state.flightInfo.percentage+'%',
                                                                                    width: '35px',
                                                                                    transform: 'rotate(90deg)',                                                                                    
                                                                                    transition: '.4s ease'
                                                                                }}/>                                                                                
                                                                            </div>
                                                                        </div>
                                                                        <div className="flightInfoBoxInfoArrivalAir">
                                                                            {this.state.flightInfo.arrival}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                }
                                                
                                            </Map>

                                        </div>

                                    </div>

                                </div>

                        }

                </>

            )

        }

    }

export default LiveMap;