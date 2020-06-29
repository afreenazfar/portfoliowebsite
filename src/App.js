import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';


function App() {
  return (
    <div className="App">
    {/* Uses a transparent header that draws on top of the layout's background */}
<div style={{height: '550px', width: 'auto',  position: 'relative'}}>
    <Layout style={{background: 'url(https://i.imgur.com/QIrgvF7.png) center / cover'}}>
        <Header className="header" title="Afreen Azfar ">
            <Navigation>
                <a href="/">About Me</a>
                <a href="/">Projects</a>
                <a href="/">Progress</a>
                <a href="/">Link</a>
            </Navigation>
        </Header>
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
