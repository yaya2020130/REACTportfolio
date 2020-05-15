import React from 'react'
import { Grid ,Cell} from 'react-mdl'

class LandingPage extends React.Component{
  render() {
  return (
    <div style={{width:'100%' ,margine:'auto'}}>
     <Grid className ='landing-grid'>
      <Cell col={12}>
        <img
        src="https://images.app.goo.gl/FkweW2wb1S56zwe9A"
        alt="avatar"
        className="avatar-img"
        />
        <hr/>
        <p>HTML/CSS|Bootstrap|JavaScript|React|Node|Express|MongoDB</p>
        <div className="social-links">
          <a href="http:google.com" target="-black"></a></a>
        </div>

      </Cell>
     </Grid>
    </div>
  )
}
}
export default LandingPage;