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
            <List style={{color:'black'}}>
            <ListItem>
              <ListItemContent style={{textAlign:'left'}}> I want to update this website as I continue to learn new things. Here are a few ideas that I am working on / want to work on in the near future.  
              </ListItemContent>
             </ListItem>
            <ListItem>
              <ListItemContent style={{textDecorationLine:'line-through'}}> 1. Add code to make this website mobile friendly
              </ListItemContent>
             </ListItem>
            <ListItem>
              <ListItemContent> 2. Add projects that I made in PGCert</ListItemContent>
            </ListItem> 
            <ListItem>
              <ListItemContent> 3. Add a 'currently reading' tab
              </ListItemContent>
             </ListItem>
             <ListItem>
              <ListItemContent> 4. Add a recipes tab
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