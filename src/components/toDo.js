import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import {List, ListItem, ListItemContent} from 'react-mdl';

class ToDo extends Component {
    render() {
        return(<div style={{width:'100%', margin:'auto'}}>
                     
        <Grid className="landing-grid">
             
            <Cell col={12}> 
            <div className="banner-text">
                <h4 style={{paddingTop:'3vh'}}>To Do</h4>
            <List>
            <ListItem>
              <ListItemContent> 1. Add projects that I made in PGCert</ListItemContent>
            </ListItem> 
            <ListItem>
              <ListItemContent> 2. Add a 'currently reading' tab
              </ListItemContent>
             </ListItem>
             <ListItem>
              <ListItemContent> 3. Add a recipes tab
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



export default ToDo;