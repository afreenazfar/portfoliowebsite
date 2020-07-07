import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingPage';
import AboutMe from './aboutMe';
import Contact from './contact';
import Projects from './projects';
import ToDo from './toDo';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/todo" component={ToDo} />
    </Switch>
    )


export default Main;