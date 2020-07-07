import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import {List, ListItem, ListItemContent} from 'react-mdl';

class ToDo extends Component {
    render() {
        return(

<div className="banner-text" style={{padding:'10px', marginTop: '50px'}}>
    <h5> To Do</h5>
    <div style={{alignItems:'left'}}>
        <ul>
            <li><span className="listSpan">Add projects I made during PGCert to projects tab</span></li>
            <li><span className="listSpan">Add a 'currently reading' tab</span></li>
            <li><span className="listSpan">Add a recipes tab</span></li>

        </ul>
    </div>

            </div>
        )
    }
}

export default ToDo;