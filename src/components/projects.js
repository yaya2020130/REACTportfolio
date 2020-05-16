import React from 'react'

import { Tabs, Tab ,Grid,Cell,CardTitle, CardText,CardActions,Button,CardMenu,IconButton, Card} from 'react-mdl'
class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };

  }
  toggleCategories(){
    if(this.state.activeTab=== 0){
      return (
        <div>       {/*project 1*/}
        <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
         <CardTitle style={{color:'blue',height:'176px',background :'usel(https://images.app.goo.gl/7GjnrdWexpPgiMNy6) center/cover'}}>Project 1</CardTitle>
       <CardText> 
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
       
       
       </CardText>
       <CardActions border>
        <Button colored> GitHub</Button>
        <Button colored> Linkedin</Button>
       
       </CardActions>
       <CardMenu style={{coloe:"#fff"}}> 
          <IconButton name='share'/>
       </CardMenu>
     
        </Card>  {/*project 2*/}
        <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
         <CardTitle style={{color:'blue',height:'176px',background :'usel(https://images.app.goo.gl/7GjnrdWexpPgiMNy6) center/cover'}}>Project 1</CardTitle>
       <CardText> 
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
       
       
       </CardText>
       <CardActions border>
        <Button colored> GitHub</Button>
        <Button colored> Linkedin</Button>
       
       </CardActions>
       <CardMenu style={{coloe:"#fff"}}> 
          <IconButton name='share'/>
       </CardMenu>
     
        </Card> {/*project 3*/}
        <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
         <CardTitle style={{color:'blue',height:'176px',background :'usel(https://images.app.goo.gl/7GjnrdWexpPgiMNy6) center/cover'}}>Project 1</CardTitle>
       <CardText> 
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
       
       
       </CardText>
       <CardActions border>
        <Button colored> GitHub</Button>
        <Button colored> Linkedin</Button>
       
       </CardActions>
       <CardMenu style={{coloe:"#fff"}}> 
          <IconButton name='share'/>
       </CardMenu>
     
        </Card> </div>
 




      )
    } else if(this.state.activeTab===1){
      return(
      <div><h1> This sequelize </h1></div>
      )
    }else if (this.state.activeTab===2){
      return (
        <div><h1> This is mongoDB</h1></div>
      )
    }else if (this.state.activeTab===3){
      return(
      <div><h1> This is sql</h1></div>
      )
    }
  }
  
render() {
  
  return (
    <div className="category-tabs">
      <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
        <Tab>React</Tab>
        <Tab>Sequelizeip</Tab>
        <Tab>Javascrips</Tab>
        <Tab>sql</Tab>
      </Tabs>
      <section className="projects-grid">
        <Grid className="projects-grid">
          <Cell col={12}>
            <div className="content">   {this.toggleCategories()}</div>
          </Cell>
        </Grid>
      
      </section>
      <h1>jk</h1>
    </div>
  )}
}

export default Projects