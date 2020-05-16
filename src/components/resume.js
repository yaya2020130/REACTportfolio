import React from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './Education';
import Experience from './Experience';

import Skills from './skills';
class Resume extends React.Component {
  render() {
    return (
      <div >
        <Grid>
          <Cell col={4} >
            <div styel={{ textAlign: 'center' }}>
              <img
                src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
                alt="avatar"
                style={{ height: '200px' }}
              />

            </div>
            <h2 styel={{ paddingTop: '2em' }}> Yared Anbesie</h2>
            <h4 style={{ color: 'grey' }}></h4>  <hr style={{ borderTop: '3px solid green', width: '50%' }} />
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
            <hr style={{ borderTop: '3px solid green', width: '50%' }} />
            <h5>Address</h5>
            <p> 3749 s 160th ln seatac wa</p>
            <h5>Phone</h5>
            <p>(206)-353-2602 </p>
            <h5>email</h5>
            <h5>anbesie.yg@gmail.com</h5>
            <hr style={{ color: 'grey' }}></hr>

          </Cell> 
        <Cell className='resume-right-col ' col={8} >
<h2>Education</h2>
              <Education

              startYear={2007}
           endYear={2012}
           schoolName="Addis Ababa University"
           schoolDescription="The Addis Ababa Institute of Technology (AAiT), which was established about 60 years ago, is the leading Institute of Technology in Ethiopia.At present, it is functioning with special autonomy from Addis Ababa University. It has a Supervisory Board, which is the highest governing body. The Institute is led by a Scientific Director with the rank of University Vice President."
           />

         <Education
              startYear={2020}
           endYear={2020}
           schoolName="Addis Ababa UniversityUniversity of washington Coding Bootcamp"
           schoolDescription="University of Washington Coding Boot Camp equips students with the core skills needed for a career in web development and technology through engaging classes."
           />
           <hr style={{borderTop:'3px solid#22947'}}/>

<h2>Experience</h2>
           <Experience
           startYear={2018}
           endYear={2020}
           jobName={"Home appliance technician"}
           job description ={"Maintaining home apliances"}

   
           />
<h1>Skills</h1>
<Skills/>
        </Cell>
        </Grid>
      </div >
    )
  }
}
export default Resume;