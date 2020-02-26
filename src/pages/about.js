import React from 'react';
import Jumbo from '../components/Jumbo';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Jumbo title={props.title} />

            <Content>

            <p> Hello, my name is Jonathan Roth and I am a recently certified Full Stack Developer with newly acquired and honed skills in HTML5, CSS3, JavaScipt, ReactJS, MongoDB, and NodeJS.
            </p>

            <p>Known as a creative problem solver and motivated worker with a focus on backend data routing and ReactJS with a passion for learning.
            </p>
            
            <p>Not satisfied with having just completed the course, I am already looking forward to my next educational experience and hope to a part of a motivated, like-minded team.
            </p> 

            </Content>
        </div>
    );
}

export default AboutPage;