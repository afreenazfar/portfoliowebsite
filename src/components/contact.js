import React, {Component} from 'react';
import {List, ListItem, ListItemContent} from 'react-mdl';


class Contact extends Component {
    render() {
        return(
            <div className="banner-text" style={{padding:'10px', marginTop: '50px', width: '50%'}}>
                <List>
  <ListItem>
    <ListItemContent> <i className="fa fa-home" style={{fontSize: '30px'}} aria-hidden="true"/>Hamilton, New Zealand</ListItemContent>
  </ListItem> 
  <ListItem>
    <ListItemContent>  <a href="mailto:afreen.azfar@gmail.com" rel="noopener nonreferrer" target="_blank">
                                    <i className="fa fa-envelope" aria-hidden="true" style={{fontSize: '25px'}} />
                                </a> afreen.azfar@gmail.com</ListItemContent>
  </ListItem>
  {/* <ListItem>
    <ListItemContent icon="person">////</ListItemContent>
  </ListItem> */}
</List>
            </div>
        )
    }
}

export default Contact;