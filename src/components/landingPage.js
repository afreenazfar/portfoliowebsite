import React, {Component} from 'react';
import { Grid, Cell,} from 'react-mdl';

class LandingPage extends Component {
    render() {
        return(
            <div style={{width:'100%', margin:'auto'}}>
                 
                <Grid className="landing-grid" >
                     
                    <Cell col={12}> 
                    <div className="banner-text" style={{width:'50%'}}>
                        <img src="https://i.imgur.com/yIK3G5i.png" alt="avatar" className="avatarImg"/> 
                    <div className="lp-text" style={{zIndex:'1', opacity:'1'}}>
                        
                        <h1>Afreen Azfar</h1> 
                        <h5 style={{fontWeight:'bold'}}>CS Engineer @ Kami</h5>
                        <h5 >MSc (Biology), PGCert (Information Technology)</h5>
                        <h5 style={{marginBottom:'20px'}}>HTML | CSS | JavaScript | React | Java | SQL | Git</h5>
                        
                        {/* <div className="social-links"></div> */}
                        {/*LinkedIn */}
                        <a href="https://www.linkedin.com/in/afreen-azfar?originalSubdomain=nz" rel="noopener noreferrer" target="_blank"> 
                        <i className="fa fa-linkedin-square" aria-hidden="true" /> </a>

                        {/*GitHub */}
                        <a href="https://github.com/afreenazfar" rel="noopener noreferrer" target="_blank"> 
                        <i className="fa fa-github-square" aria-hidden="true" /></a>

                        {/*GitLab */}
                        <a href="https://gitlab.com/waikato_aa253" rel="noopener noreferrer" target="_blank"> 
                        <i className="fa fa-gitlab" aria-hidden="true" /></a>

                        {/*Twitter */}
                        {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank"> 
                        <i className="fa fa-twitter-square" aria-hidden="true" /></a> */}

                        {/*Email*/}
                        <a href="mailto:afreen.azfar@gmail.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-envelope" aria-hidden="true" /> </a>
                    </div>
                    </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default LandingPage;