import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Anh Cu',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Hello',
        subTitle: "I'm a Web Developer",
        text: 'Check out my recent project'
      },
      about: {
        title: 'Get to know me'
      },
      contact: {
        title: 'Let\'s talk'
      }
    }
  }

  render() {
  return (
    <Router>
      <Container className="p-0" fluid={true}>

        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand>Anh Cu</Navbar.Brand>
          
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
           <Navbar.Collapse id="navbar-toggle">
              <Nav>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </Container>
    </Router>
  );
  }
}

export default App;
