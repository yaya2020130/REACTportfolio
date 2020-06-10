// import React from 'react'
// import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
// class Contact extends React.Component {
//   render() {
//     return (
//       <div className="contact-body">
//         <Grid className="contact-grid">
//           <Cell col={6}><h3>Yared Anbesie Gebrie</h3>
//             <img src="yared.jpeg"
//               alt="avatar" styling={{ height: '30px' }} className="avatar-img">

//             </img>
//             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>

//           </Cell>
//           <Cell col={6}><h2>Contact Me</h2>
//             <hr />

//             <div className='contact-list'>
//               <List>
//                 <ListItem>
//                   <ListItemContent  style={{fontSize:'25px',fontFamil:'Anton'}}icon="person">
//                     <i classname="fa fa-phone-square" arial-hidden="true"></i>
//                   (206)-353-2602
//                     </ListItemContent>
//                 </ListItem>
//                 <ListItem>
//                   <ListItemContent  style={{fontSize:'25px',fontFamil:'Anton'}}icon="person">
//                     <i classname="fa fa-envelop" arial-hidden="true"></i>
//                   anbesie.yg@gmail.com
//                     </ListItemContent>
//                 </ListItem>
//                 <ListItem>
//                   <ListItemContent  style={{fontSize:'25px',fontFamil:'Anton'}}icon="person">
//                     <i classname="fa fa-github" arial-hidden="true"></i>
//                     https://github.com/yaya2020130
//                     </ListItemContent>
//                 </ListItem>
//                 <ListItem>
//                   <ListItemContent  style={{fontSize:'25px',fontFamil:'Anton'}}icon="person">
//                     <i classname="fa linkedin" arial-hidden="true"></i>
//                     https://www.linkedin.com/in/yared-gebrie/
//                     </ListItemContent>
//                 </ListItem>
//               </List>
//             </div>

//           </Cell>
//         </Grid>

//       </div>
//     )
//   }
// }
// export default Contact;
import React from 'react';
import './ContactForm.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero';
import Content from '../components/Content';
import Axios from 'axios';
import YARED from '../components/YARED';
class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }


    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();

        console.log(event.target);

        this.setState({
            disabled: true
        });

        Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                console.log(err);

                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })

    }


    render() {
        return(
            <div> 
                <Hero title={this.props.title} />

                <Content  >
                    <Form  className="contact-form"  onSubmit={this.handleSubmit}>
                    <YARED/>
                        <Form.Group  className="form-field">
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>


                        <Form.Group  className="form-field">
                            <Form.Label className="label-content" htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>


                        <Form.Group  className="form-field">
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea"rows="3" value={this.state.message} onChange={this.handleChange} />
                        </Form.Group>


                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>


                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                    </Form>
                </Content>
            </div>
        );
    }

}

export default Contact;