import React from 'react';

import Jumbo from "../components/Jumbo";
import Carousel from "../components/Carousel";

function HomePage(props) {

    return(
        <div>
        <Jumbo title={props.title} subTitle={props.subTitle} body={props.body}/>
        <Carousel />
        </div>
    );
}

export default HomePage;