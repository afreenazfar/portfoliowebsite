import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main.js';
import {Link} from 'react-router-dom';



function App() {
  return (
    <div className="App">
    {/* Uses a transparent header that draws on top of the layout's background */}
<div style={{height: '550px', width: 'auto',  position: 'relative'}}>
    <Layout style={{background: 'url(https://i.imgur.com/QIrgvF7.png) center / cover'}}>
       
       <Header className="header" title="Afreen Azfar">
       <img src="https://i.imgur.com/lCdF4md.jpg[/img]" alt="avatar" className="avatarImg"/>  
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/">Landing</Link>
            </Navigation>
        </Header>
        <Main />
        {/* <Drawer title="Afreen">
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Drawer> */}
        <Content />
    </Layout>
</div>
    </div>
  );
}

export default App;
