import React, {  Component } from 'react';
import Header from './header';

export default class About extends Component {

  render() {
    return (
      	<div style={{alignItems: 'center', justifyContent: 'center'}}> 
      	<Header/>
          <div style={{display: 'flex', alignItems: 'center' ,justifyContent: 'center', flexDirection: 'column'}}>
              <p style={{fontSize: 24, marginTop: 50, color: 'black'}} >
                Universal JavaScript Boilerplate I built for a Finance/Science news site I'm building.
              </p>
              <p style={{fontSize: 24, marginTop: 50}} >
                Sits on top of Express.js, Node.js, React.js, MySQL, and bundled together using Webpack
              </p>
          </div>
      </div>
    );
  }
}