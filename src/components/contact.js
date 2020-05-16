import React from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
class Contact extends React.Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}><h3>Yared Anbesie Gebrie</h3>
            <img src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
              alt="avatar" styling={{ height: '30px' }} className="avatar-img">

            </img>
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>

          </Cell>
          <Cell col={6}><h2>Contact Me</h2>
            <hr />

            <div className='contact-list'>
              <List>
                <ListItem>
                  <ListItemContent  style={{fontSize:'25px',fontFamil:'Anton'}}icon="person">
                    <i classname="fa fa-phone-square" arial-hidden="true"></i>
                  (206)-353-2602
                    </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent  style={{fontSize:'25px',fontFamil:'Anton'}}icon="person">
                    <i classname="fa fa-envelop" arial-hidden="true"></i>
                  anbesie.yg@gmail.com
                    </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent  style={{fontSize:'25px',fontFamil:'Anton'}}icon="person">
                    <i classname="fa fa-github" arial-hidden="true"></i>
                    https://github.com/yaya2020130
                    </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent  style={{fontSize:'25px',fontFamil:'Anton'}}icon="person">
                    <i classname="fa linkedin" arial-hidden="true"></i>
                    https://www.linkedin.com/in/yared-gebrie/
                    </ListItemContent>
                </ListItem>
              </List>
            </div>

          </Cell>
        </Grid>

      </div>
    )
  }
}
export default Contact;