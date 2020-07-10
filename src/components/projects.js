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
            <div className="projects-grid landing-grid">
                {/* project 1*/ }
            <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
            <CardTitle style= {{color: 'black', height:'170px', background:'url(https://i.imgur.com/pSk1YOw.png) center/cover'}} > Portfolio Website </CardTitle>
            <CardText> 
                I created this website to learn and create my first React app.  
            </CardText>
            <CardActions border>
            <a href="https://github.com/afreenazfar/portfoliowebsite" rel="noopener noreferrer" target="_blank">
                                        <Button colored>GitHub</Button>
                                    </a>
            </CardActions>
            <CardMenu style={{color :'white'}}>
                <IconButton name="share" />
            </CardMenu>
            </Card>

              {/* project 2*/ }
            <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
            <CardTitle style= {{color: 'black', height:'170px', background:'url(https://i.imgur.com/ompECmz.png) center/cover'}} > MSc(Biology) Research </CardTitle>
            <CardText> 
            Expression of TNF- α at mRNA level in Thp-1 cells exposed to LPS and HSP60: Possible impact on diabetic vascular inflammation  
            </CardText>
            <CardActions border>
            <a rel="noopener noreferrer" href="https://hdl.handle.net/10289/12106"  target="_blank">
                                        <Button colored>Thesis</Button>
                                    </a>
            </CardActions>
            <CardMenu style={{color :'white'}}>
                <IconButton name="share" />
            </CardMenu>
            </Card>
            
             {/* project 3*/ }
            {/* <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
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
            </Card>  */}
            </div>
        )
    }  else if (this.state.activeTab === 1) {
    return (
<div className="projects-grid landing-grid" >
        <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
            <CardTitle style= {{color: 'black', height:'170px', background:'url(https://i.imgur.com/ompECmz.png) center/cover'}} > Group </CardTitle>
            <CardText> 
            text1
            </CardText>
            <CardActions border>
            <a rel="noopener noreferrer" href="https://hdl.handle.net/10289/12106"  target="_blank">
                                        <Button colored>text2</Button>
                                    </a>
            </CardActions>
            <CardMenu style={{color :'white'}}>
                <IconButton name="share" />
            </CardMenu>
            </Card>
            </div>
     )
    }
}


    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab style={{zIndex:'10'}}>Personal</Tab>
                    <Tab style={{zIndex:'10'}}>Group</Tab>
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