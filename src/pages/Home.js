import React, {Component} from "react";
import Swipe from '../components/swiper/swiper'
import Cell from '../components/cell'
import Button from "../components/button";

import axios from 'axios';

export default class Home extends Component {

    state={
        banner:[],
        home:[]
    };

    constructor(props) {
        super(props);
    }

    show=()=>{
        alert(1)
    };

    async componentDidMount() {

        let res = await axios({url:'/api/goods/home',params:{_page:1,_limit:10}});
        console.log("11111",res);
        // this.setState({banner:res.data.data})

    }

    render() {
        return (
            <div className="home">
                <Swipe data={[
                    {_id: '1', title: 'alix', sub_title: '111', banner: '/images/img_1.jpg'},
                    {_id: '2', title: 'jsjsjs', sub_title: '222', banner: '/images/img_2.jpg'},
                    {_id: '3', title: 'sss', sub_title: '333', banner: '/images/img_3.jpg'}
                ]}
                       to={{pathname: '/detail', apiname: 'banner'}}
                />
                <Cell
                    index={0}
                    data={{_id: "1", title: "asdfasdfsadf", des: "asdfwefsdfasdfasdfasdfasdfasdfasdfasdfasd"}}
                    to={{pathname:'/detail',apiname:'home'}}
                >
                    <Button style={{float:'right'}} clickHandler={ this.show} size="mini">+</Button>
                </Cell>
                <Cell
                    data={{_id: "1", title: "jhgjgjkl.,jh", des: "dfghjkmnbvcxvbnmliuyt" }} to={{pathname:'/detail',apiname:'home'}}
                ></Cell>
            </div>
        );
    }
}


