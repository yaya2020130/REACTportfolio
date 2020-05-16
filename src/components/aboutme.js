import React from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
class AboutMe extends React.Component {
  render() {
    return (
      <div className='aboutme-body'>
        <Grid className='aboutme-grid'>
          <Cell col={12} >
            <h1>AboutMe</h1>
            <hr/>
            <p>  My name is Yared Anbesie Gebrie ,  i am from Ethiopia .I grew up and lived in Ethiopia for most of my life ,until i moved
            to seattle in 2016. I joined the university of Addis Ababa in 2007 and graduated  in Mechanical Engineering .I have also taken additional post graduate class to become marine engineer.After working for a couple of  years in more mechanical inclined indutery .I finally decided to switch my carrer to web-development </p>

            <p> As a juniour webdeveloper and student in University of Washington Coding Bootcamp, i have learnt a lot of skils  both from backend and front end sides  .The knowledge i have got from the bootcamp was enormouse and deep becaouse of this i am very much eager to join the industry to advance , learn and practise the things i have  learnt.
            In short the tree months intensive course has given me the exposure i needed to work in the industery as fullstack web developer.</p>
          </Cell>
        </Grid >
      </div >
    )
  }
}
export default AboutMe