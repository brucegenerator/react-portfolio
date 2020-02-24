import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import { 
         Nav,
         Navbar,
         Container 
        } 
from 'react-bootstrap';

import HomePage from "./pages/home"
import AboutPage from "./pages/about"
import ContactPage from "./pages/contact"

import Footer from "./components/Footer"
                  

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Jonathan Roth",
      headerLinks: [
        { title: 'Home', path: "/"},
        { title: 'About', path: "/about"},
        { title: 'Contact', path: "/contact"},
      ],
      home: {
        title: "Shimmer",
        subTitle: "And light the way",
        body: "Check out my projects below"
      },
      about: {
        title: "About Me"
      },
      contact: {
        title: "Drop me a line!"
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Jonathan Roth</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={ () => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} body={this.state.home.body} /> } />
          <Route path="/about" render={ () => <AboutPage title={this.state.about.title} /> } />
          <Route path="/contact" render={ () => <ContactPage title={this.state.contact.title} /> } />

          <Footer />
        </Container>
      </Router>
    )
  }
}

export default App;
