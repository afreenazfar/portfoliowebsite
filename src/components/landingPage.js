import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return(
            <div style={{width:'100%', margin:'auto'}}>
                 
                <Grid className="landing-grid">
                     
                    <Cell col={12}> 
                    <div className="banner-text">
                    <img src="https://i.imgur.com/jbgXIMg.png" alt="avatar" className="avatarImg"/> 
                        <h1>MSc(Biology), PGCertIT</h1>
                        <p>HTML | CSS | JavaScript | React | Java | SQL | Git</p>
                        <div className="social-links" ></div>
                        {/*LinkedIn */}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank"> 
                        <i className="fa fa-linkedin-square" aria-hidden="true" /></a>

                        {/*GitHub */}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank"> 
                        <i className="fa fa-github-square" aria-hidden="true" /></a>

                        {/*Twitter */}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank"> 
                        <i className="fa fa-twitter-square" aria-hidden="true" /></a>
                    </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default LandingPage;