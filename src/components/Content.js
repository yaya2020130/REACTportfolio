import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YARED from '../assets/images/YARED.jpeg'
function Content(props) {

    return(
        <Container styles={{ backgroundImage:`url(${YARED})` }} fluid={true}>
            <Row className="justify-content-center">
                <Col md={8}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    );

}

export default Content;