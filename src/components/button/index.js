import React from "react";
import styles from './button.module.css'
import propTypes from 'prop-types'

export default class Button extends React.Component{
    static defaultProps={
        clickHandler : ()=>{},
        size:"default",
        style:{}

    }
    static propTypes={
        clickHandler : propTypes.func,
        type:propTypes.string,
        style:propTypes.object

    }
    render() {
        let {clickHandler,children,type,size,style} = this.props

        return (
            <button
                type="button"
                value="登 录"
                style={style}
                className={styles["login-btn"] + ' ' + styles[`login-btn--${size}`]}
                onClick={(ev)=>clickHandler(ev)}
            >{this.props.children}</button>
        );
    }
}




