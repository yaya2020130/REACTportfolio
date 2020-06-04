import React from 'react'

import { Switch, Route } from 'react-router-dom'
import AboutMe from './aboutme';
import contact from './contact';
import Projects from './Projects';
import Resume from './resume';
import LandingPage from './LandingPage';

const Main = () => (
   <Switch>
      <Route exact path="/" component={ LandingPage } />
      <Route exact path="/aboutMe" component={ AboutMe } />
      <Route exact path="/contact" component={ contact } />
      <Route exact path="/landingPage" component={ LandingPage } />
      <Route exact path="/Projects" component={ Projects } />
      <Route exact path="/resume" component={ Resume } />


   </Switch>


)


export default Main;