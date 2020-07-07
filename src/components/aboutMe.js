import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class AboutMe extends Component {
    render() {
        return(
            <div className="banner-text" style={{padding:'10px', marginTop: '50px'}}>
                <h4>About Me</h4>
                <h6 style={{color:'black'}}>Hi there! I'm a MSc(Biology) graduate with a postgraduate certificate in Information Technology(PGCertIT) from the University of Waikato. My MSc project tested the effects of bacteria and overexpression of proteins on cardiac tissue. During the data analysis of my project, I became quite interested in the software I used to record and process my data. After working for a year, I decided to pursue this growing interest of mine by taking up the PGCertIT, in which I became competent in various coding languages. This website is one of my first personal coding projects outside of the PGCertIT. The IT industry is ever-growing, and I can't wait to see where I fit into it. Thank you for visiting my website!
                </h6>
                <Grid className="landing-grid">
                     
                    <Cell col={12}> 
                    {/* <div className="banner-text"> */}
                        <div className="social-links"></div>
                        {/*LinkedIn */}
                        <a href="https://www.linkedin.com/in/afreen-azfar?originalSubdomain=nz" rel="noopener noreferrer" target="_blank"> 
                        <i className="fa fa-linkedin-square" aria-hidden="true" /></a>

                        {/*GitHub */}
                        <a href="https://github.com/afreenazfar" rel="noopener noreferrer" target="_blank"> 
                        <i style={{color:'black'}} className="fa fa-github-square" aria-hidden="true" /></a>

                        {/*Twitter */}
                        {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank"> 
                        <i className="fa fa-twitter-square" aria-hidden="true" /></a> */}
                    {/* </div> */}
                    </Cell>
                </Grid>
                </div>
        )
    }
}

export default AboutMe;