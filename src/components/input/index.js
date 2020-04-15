import React from "react";
import styles from './input.module.css'
import propTypes from 'prop-types'


    export default class Input extends React.Component {
    /*
    * type  类型   text
    * model  双向绑定模式    null    |{value, name , onChange}
    * multl  多行输入      false
    * lable  标题     ''
    * */

    static defaultProps = {
        type: 'text',
        model: null,
        multi: false,
        label: ''
    }
    static propTypes = {
        type: propTypes.string,
        model: propTypes.shape({
            name: propTypes.string.isRequired,
            value: propTypes.string.isRequired,
            onChange: propTypes.func.isRequired
        }),
        label: propTypes.string,
        multi: propTypes.bool,
        style: propTypes.object
    };
    renderSpan = (label) => {
        return label ? <span>{label}</span> : null
    }

    renderInput = () => {
        let {model, type, label,style} = this.props;//{name,value,onChange}
        let inputEle = null;

        if (!model) {
            inputEle = (
                <div className={styles.inputs}>
                    <input type={type} style={style} defaultValue="" style={{paddingLeft: label ? '1.34rem' : '0.2rem'}}/>
                    {this.renderSpan(label)}
                </div>
            );
            return inputEle
        }

        let {model: {name, value, onChange}} = this.props;

        inputEle = (
            <div className={styles.inputs}>
                <input
                    type={type}
                    value={value}
                    style={{paddingLeft: label ? '1.34rem' : '0.2rem'}}
                    onChange={onChange}
                    name={name}
                />
                {this.renderSpan(label)}
            </div>
        );
        return inputEle
    };

    renderTextarea = () => {
        let {model,label} = this.props;//{name,value,onChange}
        let multiEle = null;

        if (!model) {
            multiEle = (
                <div>
                    {this.renderSpan(label)}
                    <textarea></textarea>
                </div>
            );
            return multiEle
        };

        let {model:value,name,onChange} = this.props;
            multiEle = (
                <textarea
                    value={value}
                    onChange={onChange}
                    name={name}
                ></textarea>
            )
        return multiEle
    };

    render() {

        let {multi} = this.props;

        return multi ? this.renderTextarea() : this.renderInput()
    }
}