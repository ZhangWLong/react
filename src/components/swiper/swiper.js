import React, {Component} from "react";
import styles from './style.module.css'
import $ from 'jquery'
import Swipe from "./assets/js/swipe";

import propTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

class Swiper extends Component {
    static defaultProps={
        title:'',
        sub_title:''
    }
    static  propTypes = {
        // data: propTypes.array.isRequired,
        data: propTypes.arrayOf(propTypes.shape({//限定传过来的对象中各个键值对的类型和是不是毕传参数
            _id:propTypes.string.isRequired,
            title:propTypes.string,
            sub_title:propTypes.string,
            banner:propTypes.string.isRequired
        })).isRequired,
        to: propTypes.shape({
            pathname:propTypes.string.isRequired,
            apiname:propTypes.string.isRequired
        }),
    };

    to=(_id)=>{
    if(!this.props.to) return;
        let {history,to} = this.props;
        history.push({pathname:`${to.pathname}/${_id}`,search:`apiname=${to.apiname}`})
    }

    componentDidMount() {
        //手写一部分代码
        new Swipe($('.style_banner__2yxa0')[0], {
            auto: 2000,
            continuous: true,
            stopPropation: true,
            callback: function (index, element) {
                $('.banner ol li').removeClass('active');
                $('.banner ol li').eq(index).addClass('active');
            }
        })
    }

    render() {
        let {data,to} = this.props;
        return (
            <div className={styles.banner}>
                <ul className={styles.clearfix}>
                    {
                        data.map(item => (
                            <li key={item._id} onClick={()=>this.to(item._id)}>
                                <img src={item.banner} alt=""/>
                                <div className={styles["text-box"]}>
                                    <h2>{item.title}</h2>
                                    <p>{item.sub_title}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default withRouter(Swiper)
