import React, {Component} from "react";
import Cell from '../components/cell';



export default class Follow extends Component {
    render() {
        return (
            <div className="follow pt">
                <Cell
                    index={0}
                    data={{_id: "1", title: "asdfasdfsadf", des: "asdfwefsdfasdfasdfasdfasdfasdfasdfasdfasd"}}
                    to={{pathname:'/detail',apiname:'home'}}
                />
                {/*<button style={{float: "right"}}>++</button>*/}
                <Cell
                    index={1}
                    data={{_id: "1", title: "jhgjgjkl.,jh", des: "dfghjkmnbvcxvbnmliuyt"}}
                    to={{pathname:'/detail',apiname:'home'}}
                />
            </div>
        );
    }
}