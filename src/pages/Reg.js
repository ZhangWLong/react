import React from "react";
import '../assets/css/reg.css'
import Nav from "../components/nav/nav";
import Button from "../components/button";
import Input from "../components/input";
import axios from 'axios'

import {Link} from 'react-router-dom'

export default class Reg extends React.Component {
    state = {
        username: '',
        password: '',
        errorMess:''
    };

    reg = async () => {
        console.log("111")
        let {username,password} = this.state;
        let fromData = new FormData();

        fromData.append('username',username);
        fromData.append('password',password);

        if (this.file.files.length > 0){
            fromData.append('icon',this.file.files[0])
        }

        let res = await axios({url:'/api/reg',method:'post', data: fromData})

        if (res.data.err === 0){
            this.props.history.push('/login')
        }else{
            this.setState({errorMess:res.data.msg})
        }


    };

    changeIpt = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }


    render() {
        let {username,password,errorMess} = this.state
        return (
            <div className="content">
                <Nav arrow="gray" bgColor="transparent" borderWidth={0}/>
                <h1 onClick={()=>this.file.click()}></h1>
                <input type="file" ref={el=>this.file=el} style={{visibility:"hidden"}}/>
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
                    <Input label="账 号" type="text" model={{name:'username',value:username,onChange:this.changeIpt}}/>
                    <Input label="密 码" type="password" model={{name:'password',value:password,onChange:this.changeIpt}}/>
                    {errorMess}
                </ul>
                <div className="footbox">
                    <Button type="button"  className="login-btn" style={{marginTop: "0.64rem"}} clickHandler={this.reg}>注 册</Button>
                    <a className="tishi">忘记密码？</a>
                </div>
            </div>
        )
    }
}






