import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class AboutMe extends Component {
    render() {
        return(
            <div style={{width:'100%', margin:'auto'}}>
                 
            <Grid className="landing-grid">
                 
                <Cell col={12}> 
                <div className="banner-text" style={{ marginTop: '15vh'}}>
                <h4 style={{paddingTop:'3vh'}}>About Me</h4>
                <h6 style={{color:'black', paddingLeft:'3vh', paddingRight:'3vh', textAlign:'justify'}}>Hi there! I'm a MSc(Biology) graduate with a postgraduate certificate in Information Technology (PGCertIT) from the University of Waikato. My MSc project tested the effects of bacteria and overexpression of proteins on cardiac tissue. During the data analysis of my project, I became quite interested in the software I used to record and process my data. After working for a year, I decided to pursue the PGCertIT, in which I became competent in various coding languages. This website is one of my first personal coding projects outside of the PGCertIT :) </h6>
                <h6 style={{color:'black', paddingLeft:'3vh', paddingRight:'3vh', textAlign:'justify'}}>Apart from biology and IT, I enjoy reading, horse-riding, pretending to be good at watercolour painting (thank you quarantine), and trekking (so lucky to be living in New Zealand). </h6>

                <h6 style={{color:'black', paddingLeft:'3vh', paddingRight:'3vh', paddingBottom:'3vh', textAlign:'justify'}}>I’m always looking to engage more with the IT industry so feel free to drop me an email. If you’re simply just wanting to connect, please do by doing the same :) Thank you for visiting my website!</h6>
                
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

                        {/*GitLab */}
                        <a href="https://gitlab.com/waikato_aa253" rel="noopener noreferrer" target="_blank"> 
                        <i className="fa fa-gitlab" aria-hidden="true" /></a>
                </div>
                </Cell>
            </Grid>

        </div>

        )
    }
}

export default AboutMe;