import React from 'react';
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
// import { Col } from "react-bootstrap";

import Card from "../components/Card";

import Moneta from "../assets/images/puzzle.png";
import Webscraper from "../assets/images/newspaper.jpeg"
import ClickyGame from "../assets/images/react.png";

class Carousel extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id:0,
                    title: 'Moneta',
                    subTitle: 'A Game for mindfulness and memory stimulation',
                    imgSrc: Moneta,
                    link: 'https://mc-moneta.herokuapp.com/dashboard',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Webscraper',
                    subTitle: 'A webscraper for NPR news',
                    imgSrc: Webscraper,
                    link: 'https://glacial-fortress-91201.herokuapp.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'ClickyGame',
                    subTitle: 'A matching game with a twist',
                    imgSrc: ClickyGame,
                    link: 'https://floating-headland-07846.herokuapp.com/',
                    selected: false
                },
            ]
                
        }
    }
    handlCardClick = (id, card) => {
        console.log(id);
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected= false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return<Card item={item} click={(e => this.handlCardClick(item.id, e))} key={item.id} />
        })
    }

        render() {
            return(
                <Container fluid={true}>
                    <Row className="justify-content-around">
                        {this.makeItems(this.state.items)}
                    </Row>
                </Container>
            );
        }
}

export default Carousel;