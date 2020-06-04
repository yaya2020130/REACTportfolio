import React from 'react';

import Card from './Card';


import YARED from '../assets/images/YARED.jpeg';
import AYAM from '../assets/images/AYAM.jpeg';
import MODY from '../assets/images/MODY.png';
import DAYA from '../assets/images/DAYA.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Yared Anbesie',
                    subTitle: 'responsivePortolio',
                    imgSrc: YARED ,
                    link: ' https://yaya2020130.github.io/Yared-Portfolio/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'AYAM!',
                    subTitle: 'Language Translator App',
                    imgSrc: AYAM,
                    link: ' https://yaya2020130.github.io/language-translator/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'CREATING A BRACKET APP',
                    subTitle: 'MODY',
                    imgSrc: MODY,
                    link: 'https://modybrackets.herokuapp.com/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'DAYA',
                    subTitle: 'REPORTING APP',
                    imgSrc: DAYA,
                    link: '',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card  style={{minWidth:'700px',margin:'auto'}}item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container style={{minWidth:'700px',margin:'auto'}} fluid={true}>
                <Row className="justify-content-around" >
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;