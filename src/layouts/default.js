import React,{Component} from "react";
import Header from './header'
import Footer from './footer'
import Home from '../pages/Home'
import Follow from '../pages/Follow'
import Reg from '../pages/Reg'
import Loading from "../components/loading/loading";

import {Switch,Route,Redirect} from 'react-router-dom'
import Column from "../pages/Column";
import User from "../pages/User";
import Login from "../pages/Login";
import Detail from "../pages/Detail";
import NoPage from "../pages/NoPage";

export  default  class  Default extends Component{
    render() {
        return (
            <div className="default">
                <Header/>
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/follow' component={Follow}/>
                    <Route path='/column' component={Column}/>
                    <Route path='/user' component={User}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/reg' component={Reg}/>
                    <Route path='/detail/:_id' component={Detail}/>
                    <Redirect exact from='/' to="/home"/>
                    <Route component={NoPage}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}




