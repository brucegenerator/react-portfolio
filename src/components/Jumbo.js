import React from "react";
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

function Jumbo(props) {
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid">
            <Container fluid={ true }>
                <Row className="justify-content-center py-5">
                    <Col md= { 8 } sm={ 12 }>
                        { (props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>) }
                        { (props.title && <h3 className="display-4 font-weight-bold">{props.subTitle}</h3>) }
                        { (props.title && <h3 className="lead font-weight-light">{props.body}</h3>) }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Jumbo;