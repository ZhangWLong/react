import React from "react";
import '../assets/css/login.css'
import Nav from "../components/nav/nav";
import Button from "../components/button";
import Input from "../components/input";

import qs from 'qs'

import {Link} from 'react-router-dom'

export default class Login extends React.Component {

    state = {
        username: '',
        password: '',
        errorMess:''
    };

    login = async () => {
        let params = new URLSearchParams();
        params.append("username",this.state.username);
        params.append("password",this.state.password);

        let res = await this.axios({
            url: '/api/login',
            method: 'post',
            data:params
        });
        if (res.data.err === 0){
            window.localStorage.setItem("user",qs.stringify(res.data));
            let path = qs.parse(this.props.location.search,{ignoreQueryPrefix:true}).path;
            if (path && !path.includes('/login')){
                this.props.history.push({
                    pathname:qs.parse(this.props.location.search,{ignoreQueryPrefix:true}).path
                })
            }else{
                this.props.history.push('/user');
            }

        }else{
            this.setState({
                errorMess:res.data.msg
            })
        }
    };

    changeUserName = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    };


    render() {
        return (
            <div className="content">
                <Nav arrow="gray" borderWidth={0} bgColor="transparent"/>
                <h1></h1>
                <div className="login-box">
                    <p className="lsolid"></p>
                    <div className="login">
                        <Link to="/login">登录</Link>
                        <span></span>
                        <Link to="/reg">注册</Link>
                    </div>
                    <p className="rsolid"></p>
                </div>
                <ul>
                    <Input label="账 号"
                           model={{name: 'username', value: this.state.username, onChange: this.changeUserName}}/>

                    <Input label="密 码" type="password"
                           model={{name: 'password', value: this.state.password, onChange: this.changeUserName}}/>
                    {this.errorMess}

                </ul>
                <div className="footbox">
                    <Button clickHandler={this.login} style={{marginTop: "0.64rem"}}>登 录</Button>
                    {/*<Button clickHandler={ this.show.bind(null,1,2,3)}>登 录</Button>*/}
                    <a className="tishi">忘记密码？</a>
                </div>
            </div>
        );
    }
}






