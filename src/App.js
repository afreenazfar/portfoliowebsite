import React from 'react';
import './App.css';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import Main from './components/main.js';
import {Link} from 'react-router-dom';



function App() {
  return (
    <div className="App">
    {/* Uses a transparent header that draws on top of the layout's background */}
<div style={{height: '100vh', width: 'auto',  position: 'relative'}}>
    

        {/* <Layout style={{background: 'url(https://i.imgur.com/QIrgvF7.png) center / cover'}}> */}
       <Layout>
       <Header className="header" title={<Link style={{textDecoration:'none'}} to="/"> Afreen Azfar  </Link> } scroll>
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/todo">To Do</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header> 
        
        <Main />

  <Drawer title={<Link style={{textDecoration:'none'}} to="/"> Afreen Azfar  </Link>}>
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/todo">To Do</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
    </div>
  );
}

export default App;
