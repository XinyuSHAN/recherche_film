import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import App from './App.js';
import Detail from './Detail.js';
import history from './history';


class routeMap extends React.Component{
    updateHandle(){
        console.log("换了一页")
    }
    render(){
        return(
            <Router history={history} onUpdate={this.updateHandle.bind(this)}>
                    <Route exact path='/' component={App}/>
                    <Route path='/detail' component={Detail}/>
                
            </Router>
        );
    }
}
export default routeMap;