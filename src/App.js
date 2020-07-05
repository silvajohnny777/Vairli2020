import React from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import './App.scss';
import Pilots from './components/pages/Pilots'
import Airlines from './components/pages/Airlines'
import Airports from './components/pages/Airports'
import Airplanes from './components/pages/Airplanes'
import Routes from './components/pages/Routes'
import PageNotFound from './components/pages/PageNotFound'
import Discover from './components/pages/Discover'

import MainPage from './components/pages/MainPage'

function App() {

  return (

    <>

    <BrowserRouter basename={process.env.PUBLIC_URL}>

      <Switch>
        <Route path="/" render={() => <MainPage />} exact/>
        <Route path="/pilots" component={Pilots} />
        <Route path="/airlines" component={Airlines} />
        <Route path="/airports" component={Airports} />
        <Route path="/airplanes" component={Airplanes} />
        <Route path="/routes" component={Routes} />
        <Route path="/about-us" component={Discover} />
        <Route component={PageNotFound} />
      </Switch>

    </BrowserRouter>

    </>

  );

}

export default App;
