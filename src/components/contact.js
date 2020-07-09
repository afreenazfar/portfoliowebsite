import React, {Component} from 'react';
import {List, ListItem, ListItemContent, Grid, Cell} from 'react-mdl';



      class Contact extends Component {
        render() {
            return(
                <div style={{width:'100%', margin:'auto'}}>
                     
                    <Grid className="landing-grid">
                         
                        <Cell col={12}> 
                        <div className="banner-text">
                        <h4 style={{paddingTop:'3vh'}}>Contact</h4>
                        <List>
                        <ListItem>
                          <ListItemContent> <i className="fa fa-home" style={{fontSize: '30px'}} aria-hidden="true"/>Hamilton, New Zealand</ListItemContent>
                        </ListItem> 
                        <ListItem>
                          <ListItemContent>  <a rel="noopener noreferrer" href="mailto:afreen.azfar@gmail.com" target="_blank">
                                             <i className="fa fa-envelope" aria-hidden="true" style={{fontSize: '25px'}} />
                                            </a> afreen.azfar@gmail.com
                          </ListItemContent>
                         </ListItem>
                         </List>
                        </div>
                        </Cell>
                    </Grid>
    
                </div>
            )
        }
    }

export default Contact;