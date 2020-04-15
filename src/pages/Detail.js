import React, {Component} from "react";
import '../assets/css/detail.css';
import zan from '../assets/img/zan.png'
import xing from '../assets/img/xing.png'
import fx from '../assets/img/fx.png'
import Nav from '../components/nav/nav'




export default class Detail extends Component {
    state={

    };

    constructor(props) {
        super(props);
        this.axios({})
    }

    render() {
        return (
            <div className="detail pt">
                <Nav/>
                <div className="content">
                    <div className="header clear"><h2><img src="/images/head.png" alt=""/></h2><p>作者名字</p></div>
                    <div className="cont">
                        <h3>习近平1：弘扬宪法精神推动宪法实施</h3>
                        <div className="time"><p>2019年12月04日 20:35:58 <span><img src={zan}
                                                                                 alt=""/></span></p></div>
                        <div className="text-box">推进职业教育现代化座谈会12月2日在京召开。中共中央政治局常委、国务院总理李克强作出重要批示。批示指出：加快发展现代职业教育
                            推进职业教育现代化座谈会12月2日在京召开。中共中央政治局常委、国务院总理李克强作出重要批示。批示指出：加快发展现代职业教育
                        </div>
                    </div>
                </div>
                <div className="foot-btn">
                    <ul>
                        <li className="say"><a>
                            <i></i><span>0</span>
                        </a></li>
                        <li className="zan"><a>
                            <i></i><span>0</span>
                        </a></li>
                        <li className="xing"><a>
                            <i><img src={xing} alt=""/></i>
                        </a></li>
                        <li className="fx"><a>
                            <i><img src={fx} alt=""/></i>
                        </a></li>
                    </ul>
                </div>
            </div>
        );
    }
}