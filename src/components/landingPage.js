import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return(
            <div style={{width:'100%', marginTop:'60px'}}>
                 
                <Grid className="landing-grid">
                     
                    <Cell col={12}> 
                    <div className="banner-text">
                    <img src="https://i.imgur.com/jbgXIMg.png" alt="avatar" className="avatarImg"/> 
                        <h2 style={{paddingTop:'15px' , paddingBottom:'-50px'}}>Afreen Azfar</h2> 
                        <h1>MSc (Biology), PGCert (Information Technology)</h1>
                        <p>HTML | CSS | JavaScript | React | Java | SQL | Git</p>
                        <div className="social-links" ></div>
                        {/*LinkedIn */}
                        <a href="https://www.linkedin.com/in/afreen-azfar?originalSubdomain=nz" rel="noopener noreferrer" target="_blank"> 
                        <i className="fa fa-linkedin-square" aria-hidden="true" /></a>

                        {/*GitHub */}
                        <a href="https://github.com/afreenazfar" rel="noopener noreferrer" target="_blank"> 
                        <i className="fa fa-github-square" aria-hidden="true" /></a>

                        {/*Twitter */}
                        {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank"> 
                        <i className="fa fa-twitter-square" aria-hidden="true" /></a> */}

                        {/*Email*/}
                        <a href="mailto:afreen.azfar@gmail.com" rel="noopener nonreferrer" target="_blank">
                        <i className="fa fa-envelope" aria-hidden="true" /> </a>
                    </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default LandingPage;