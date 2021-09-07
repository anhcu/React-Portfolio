import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Anh Cu',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
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
    <div className="nav">Hello world....</div>
  );
  }
}

export default App;
