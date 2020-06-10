import React from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
class AboutMe extends React.Component {
  render() {
    return (
      <div className='aboutme-body'>
        <Grid className='aboutme-grid'>
          <Cell col={12} >
            <h1>AboutMe</h1>
            <hr />
            <p>
              My name is Yared Anbesie ,currentilly i live in seattle but my orgin is from Ethiopia which is located in the eastern part of Africa.I have got my first degree from Addis Ababa university in Mechanical engineering in 2012 .i have worked in three didferent ships and worked on many industrial range marine equpments.I have got a certeficate in fullstack web developemnt from the university of washington

            </p>

            <p> 
    I have  got a very good understanding of developeming apps while i was in the program.rigth now i am looking for any entry level job sothat i can practice the theory i learnt in school. </p>
          </Cell>
        </Grid >
      </div >
    )
  }
}
export default AboutMe