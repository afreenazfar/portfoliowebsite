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
            <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
            <CardTitle style= {{color: 'white', height:'170px', background:'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center/cover'}} > React project 1 </CardTitle>
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

                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    
                </section>
            </div>
        )
    }
}

export default Projects;