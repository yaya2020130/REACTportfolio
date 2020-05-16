import React, {Component}from 'react'
import {Layout,Navigation,Header,Drawer,Content} from 'react-mdl';
import Main from './components/Main'
import {Link} from 'react-router-dom'
import css from './App.css'
 class App extends Component{
 render(){
   return (
    <div className="demo-big-content">
    <Layout>
        <Header className ="header-color" title="Title" scroll>
            <Navigation>
                <Link to="/aboutMe">AboutMe</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/landingPage">LandingPage</Link>
                <Link to="/contact">Contact</Link>
                

            </Navigation>
        </Header>
        <Drawer title="My Portfolio">
            <Navigation>
            <Link to="/AboutMe">AboutMe</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/LandingPage">Landing Page</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  )
   }
};
export default App;