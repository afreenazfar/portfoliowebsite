import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab:0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
        return  (
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
            <CardTitle style= {{color: 'black', height:'170px', background:'url(https://i.imgur.com/pSk1YOw.png) center/cover'}} > React project 1 </CardTitle>
            <CardText> 
                this is random text  
            </CardText>
            <CardActions border>
                <Button colored>Github</Button>
            </CardActions>
            <CardMenu style={{color :'white'}}>
                <IconButton name="share" />
            </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
            <CardTitle style= {{color: 'black', height:'170px', background:'url(https://i.imgur.com/pSk1YOw.png) center/cover'}} > React project 1 </CardTitle>
            <CardText> 
                this is random text  
            </CardText>
            <CardActions border>
                <Button colored>Github</Button>
            </CardActions>
            <CardMenu style={{color :'white'}}>
                <IconButton name="share" />
            </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
            <CardTitle style= {{color: 'black', height:'170px', background:'url(https://i.imgur.com/pSk1YOw.png) center/cover'}} > React project 1 </CardTitle>
            <CardText> 
                this is random text  
            </CardText>
            <CardActions border>
                <Button colored>Github</Button>
            </CardActions>
            <CardMenu style={{color :'white'}}>
                <IconButton name="share" />
            </CardMenu>
            </Card>
            </div>
        )
    }  else if (this.state.activeTab === 1) {
    return (
        <div><h1>group projects</h1></div>
     )
    }
}


    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>Personal</Tab>
                    <Tab>Group</Tab>
                </Tabs>

               
                    <Grid>
                        <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    
               
            </div>
        )
    }
}

export default Projects;