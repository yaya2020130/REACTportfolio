import React from 'react'
import Carousel from './Carousel'
// import SocialFollow from './SocialFollow'

import Hero from './Hero';

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
          <Card shadow={5} style={{minWidth:'700PX',margin:'auto'}}>
         <CardTitle style={{color:'blue',height:'176px',background :'usel(<img class="img-fluid img-thumbnail" src ="./assets/images/MODY.gif" style width=350px height=350px  alt="">) center/cover'}}    >Project 1</CardTitle>
       <CardText> 
      This a project i have done using HTML,CSS,BOOTSTRAP
<div>
       <img
            src='/yared.jpeg'
alt="avatar"
              className="avatar-img"
            />
          <a href="  https://yaya2020130.github.io/Yared-Portfolio/" target ='_blank'><h3>Responsive -Portfolio</h3></a></div>
       </CardText>
       <CardActions border>
        <Button colored> GitHub</Button>
        <Button colored> Linkedin</Button>
       
       </CardActions>
       <CardMenu style={{coloe:"#fff"}}> 
          <IconButton name='share'/>
       </CardMenu>
     
        </Card> {/*project 3*/}
        
        
        <Card shadow={5} style={{minWidth:'700PX',margin:'auto'}}>
         <CardTitle id='cardtitle'style={{color:'blue',height:'176px',background :'url(2020.j)center/cover'}}>Project 2</CardTitle>
       <CardText> 
      AYAM  app is made by four people .The app is a translator that translates any language into the selected language language.The app uses an api sothat it will use the library provided to do the translation.
<div>

      <img
            src="2020.jpeg"
alt="avatar"
              className="avatar-img"
            /><a href=" https://yaya2020130.github.io/language-translator/" target ='_blank'><h3>AYAM language translator</h3></a>
</div>
      
       
       
       </CardText>
       {/* <CardActions border>
        <Button colored> GitHub</Button>
        <Button colored> Linkedin</Button>
       
       </CardActions> */}
    {/* <SocialFollow/> */}
       <CardMenu style={{color:"#fff"}}> 
          <IconButton name='share'/>
       </CardMenu>
     
        </Card>  {/*project 2*/}
        <Card shadow={5} style={{minWidth:'700PX',margin:'auto'}}>
         <CardTitle style={{color:'blue',height:'176px',background :'usel(<img class="img-fluid img-thumbnail" src ="./assets/images/MODY.gif" style width=350px height=350px  alt="">) center/cover'}}    >Project 3</CardTitle>
       <CardText> 
       MODY is an app used to make a brackets;
       Brackets are a useful and fun way to run contests and gauge public opinion.This  application allows users to both create brackets and vote on other user brackets. It features a responsive user interface built with Materialize and powered by jQuery and Sequelize. This application was built by a small team in one week.
<div>
       <img
            src='/MODY.gif'
alt="avatar"
              className="avatar-img"
            />
            <a href="https://modybrackets.herokuapp.com/ "> <h3>MODY</h3></a></div>
       </CardText>
       <CardActions border>
        <Button colored> GitHub</Button>
        <Button colored> Linkedin</Button>
       
       </CardActions>
       <CardMenu style={{coloe:"#fff"}}> 
          <IconButton name='share'/>
       </CardMenu>
     
        </Card> {/*project 3*/}
        <Card shadow={5} style={{minWidth:'700px',margin:'auto'}}>
         <CardTitle style={{color:'blue',height:'176px',background :'usel(https://images.app.goo.gl/7GjnrdWexpPgiMNy6) center/cover'}}>Project 4</CardTitle>
       <CardText> 
     DAYA it is an app used for reporting in adult homecare houses.Using this app the manager can control the daily routin of the resident.The manager can also make very good desision since he has up to date information of each Patients.
     <div>  <img
            src="2020.jpeg"
alt="avatar" 
              className="avatar-img"
            />  </div>
     
       
       </CardText>
       <CardActions border>
        <Button colored> GitHub</Button>
        <Button colored> Linkedin</Button>
       
       </CardActions>
       <CardMenu style={{color:"#fff"}}> 
          <IconButton name='share'/>
       </CardMenu>
     
        </Card> 
        <Card shadow={5} style={{minWidth:'700PX',margin:'auto'}}>
         <CardTitle style={{color:'blue',height:'176px',background :'usel(<img class="img-fluid img-thumbnail" src ="./assets/2020.jpeg.png" style width=350px height=350px  alt="AYAM LANGUAGE TRANSLATOR">) center/cover'}}    >Project 5</CardTitle>
       <CardText> 
       MODY is an app used to make a brackets;
       Brackets are a useful and fun way to run contests and gauge public opinion.This  application allows users to both create brackets and vote on other user brackets. It features a responsive user interface built with Materialize and powered by jQuery and Sequelize. This application was built by a small team in one week.
<div>
       <img
            src="burger.gif"
alt="avatar"
              className="avatar-img"
            />
            <a href=" https://eat-da-burger-yared.herokuapp.com/"target='_blank'> <h3>burger</h3></a> </div>
       </CardText>
       <CardActions border>
        <Button colored> GitHub</Button>
        <Button colored> Linkedin</Button>
       
       </CardActions>
       <CardMenu style={{coloe:"#fff"}}> 
          <IconButton name='share'/>
       </CardMenu>
     
        </Card> {/*project 3*/}
        




        <Card shadow={5} style={{minWidth:'700PX',margin:'auto'}}>
         <CardTitle style={{color:'blue',height:'176px',background :'usel(<img class="img-fluid img-thumbnail" src ="./assets/2020.jpeg.png" style width=350px height=350px  alt="AYAM LANGUAGE TRANSLATOR">) center/cover'}}    >Project 6</CardTitle>
       <CardText> 
       MODY is an app used to make a brackets;
       Brackets are a useful and fun way to run contests and gauge public opinion.This  application allows users to both create brackets and vote on other user brackets. It features a responsive user interface built with Materialize and powered by jQuery and Sequelize. This application was built by a small team in one week.
<div>
       <img
            src="calander.jpeg"
alt="avatar"
              className="avatar-img"
            />
            <a href=" https://yaya2020130.github.io/calander/"> <h3> calander</h3></a></div>
       </CardText>
       <CardActions border>
        <Button colored> GitHub</Button>
        <Button colored> Linkedin</Button>
       
       </CardActions>
       <CardMenu style={{coloe:"#fff"}}> 
          <IconButton name='share'/>
       </CardMenu>
     
        </Card> {/*project 3*/}
       
       
        <Card shadow={5} style={{minWidth:'700PX',margin:'auto'}}>
         <CardTitle style={{color:'blue',height:'176px',background :'usel(<img class="img-fluid img-thumbnail" src ="./assets/2020.jpeg.png" style width=350px height=350px  alt="AYAM LANGUAGE TRANSLATOR">) center/cover'}}    >Project 6</CardTitle>
       <CardText> 
       MODY is an app used to make a brackets;
       Brackets are a useful and fun way to run contests and gauge public opinion.This  application allows users to both create brackets and vote on other user brackets. It features a responsive user interface built with Materialize and powered by jQuery and Sequelize. This application was built by a small team in one week.

       <img
            src="2020.jpeg"
alt="avatar"
              className="avatar-img"
            />
       </CardText>
       <CardActions border>
        <Button colored> GitHub</Button>
        <Button colored> Linkedin</Button>
       
       </CardActions>
       <CardMenu style={{coloe:"#fff"}}> 
          <IconButton name='share'/>
       </CardMenu>
     
        </Card> {/*project 3*/}
       
        <Card shadow={5} style={{minWidth:'700PX',margin:'auto'}}>
         <CardTitle style={{color:'blue',height:'176px',background :'usel(<img class="img-fluid img-thumbnail" src ="./assets/2020.jpeg.png" style width=350px height=350px  alt="AYAM LANGUAGE TRANSLATOR">) center/cover'}}    >Project 7</CardTitle>
       <CardText> 
       MODY is an app used to make a brackets;
       Brackets are a useful and fun way to run contests and gauge public opinion.This  application allows users to both create brackets and vote on other user brackets. It features a responsive user interface built with Materialize and powered by jQuery and Sequelize. This application was built by a small team in one week.

       <img
            src="2020.jpeg"
alt="avatar"
              className="avatar-img"
            />
       </CardText>
       <CardActions border>
        <Button colored> GitHub</Button>
        <Button colored> Linkedin</Button>
       
       </CardActions>
       <CardMenu style={{coloe:"#fff"}}> 
          <IconButton name='share'/>
       </CardMenu>
     
        </Card> {/*project 3*/}
       
        </div>
 




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
        <Tab>PROJECTS</Tab>
        {/* <Tab>Sequelizeip</Tab>
        <Tab>Javascrips</Tab>
        <Tab>sql</Tab> */}
      </Tabs>
      <section className="projects-grid">
        <Grid className="projects-grid">
          <Cell col={12}>
            <div className="content">   {this.toggleCategories()}</div>
          </Cell>
        </Grid>
      
      </section>
  
   
    </div>
  )}
}

export default Projects






// import React from 'react';

// import Hero from './Hero';
// import Carousel from './Carousel';

// function Projects(props) {

//     return(
//         <div className="h">
//             <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
//             <Carousel />
//         </div>
//     );

// }

// export default Projects;