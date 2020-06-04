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
                src="yared.jpeg"
                alt="avatar"
                style={{ height: '200px' }}
              />

            </div>
            <h2 styel={{ paddingTop: '2em' }}> Yared Anbesie</h2>
            <h4 style={{ color: 'grey' }}></h4>  <hr style={{ borderTop: '3px solid green', width: '50%' }} />
            <p> A full stack web developer with vast array of knowledge in many different front end and back end languages, responsive framework, databases and a good practice in coding with a background in Mechanical Engineering and life-long dedication to learning. Effective at combining creativity and problem solving to develop user-friendly applications. Known among staff for having strong communication skill and attention to detail no matter the complexity of the project or the situation.  </p>
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
           schoolDescription="The Addis Ababa Institute of Technology (AAiT), which was established about 60 years ago, is the leading Institute of Technology in Ethiopia.At present, it is functioning with special autonomy from Addis Ababa University. It has a Supervisory Board, which is the highest governing body."
           />

         <Education
              startYear={2020}
              endYear={2020}
              schoolName="University of washington Coding Bootcamp"
              schoolDescription="University of Washington Coding Boot Camp equips students with the core skills needed for a career in web development and technology through engaging classes."
           />
           <hr style={{borderTop:'3px solid#22947'}}/>

<h2>Experience</h2>
           <Experience
           startYear={2018}
           endYear={2020}
           companyName="SEARS"
           jobName="Home appliance technician"
           jobDescription ="Worked for sears for one year and half .worked mainly on repairing and installing home appliances such as all sort of ovens ,Diswashers and Microwaves"

   
           />
                    <Experience
           startYear={2018}
           
           companyName="AMAZON"
           jobName="technecian"
           jobDescription ="worked in the fulfilment center for twomonths .Helped the maintenance department in rapairing the following industial machineries :-
           conveyers,motors,pneumatics systmes for different machineries"
           />

<Experience
           startYear={2014}
           endYear={2016}
           companyName="Northern Dependant"
           jobName="Apparentice Engineer"
           jobDescription ="worked on three differnt ships as apparentice engineer and have done the following things:-
           maintaing and attending marine machineries such as boilers , compressors, pumps,purifires,heaters,condensors,replenshing refrigerants e.t.c"

   
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