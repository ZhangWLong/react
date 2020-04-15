import React, {Component} from 'react';
import {render} from 'react-dom';
import './utils/font'
import './assets/css/index.css'

import './plugins/axios'

import Default from './layouts/default'

import {BrowserRouter as Router, Route} from "react-router-dom";



render(
    <Router>
        <Route component={Default}/>
    </Router>
    ,
    document.getElementById("root"),
    ()=>console.log(`react-dom render`)
)



