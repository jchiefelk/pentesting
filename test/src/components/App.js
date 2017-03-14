import React, { Component } from 'react';
import Publishing from './publishing';
import Dashboard from './dashboard';
import Header from './header';
import VideoBackground from './videobackground';
import { Router, Route, Link } from 'react-router'
import TimerMixin from 'react-timer-mixin';
import '../css/main.css';

class App extends Component {

    render() {
        return(
        	<div style={{alignItems: 'center'}}> 
        		<Header/>
                <Publishing/>
            </div>
        );
    }
}
export default App;
