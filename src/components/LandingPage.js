import React from 'react'
import { Grid, Cell } from 'react-mdl'

class LandingPage extends React.Component {
  render() {
    return (
      <div style={{ width: '100%', margine: 'auto' }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img
              src="https://cdn2.vectorstock.com/i/1000x1000/49/86/man-character-face-avatar-in-glasses-vector-17074986.jpg"
              alt="avatar"
              className="avatar-img"
            />
            <div className='banner-text'>
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>HTML/CSS|Bootstrap|JavaScript|React|Node|Express|MongoDB</p>

              <div className="social-links">

                {/*  linkrdin*/}
                <a href="http:google.com" rel="noopner noreferrer" target="_black">

                  <i className="fa fa-linkedin-square" arial-hidden="true" />
                </a>

                {/*  Githu*/}
                <a href="http:google.com" rel="noopner noreferrer" target="_black">

                  <i className="fa fa-github-square" arial-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default LandingPage;