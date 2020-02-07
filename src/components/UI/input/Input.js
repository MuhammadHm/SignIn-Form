import React, { Component } from 'react';
import sytles from './Input.module.css';


export default class Input extends Component {
    render() {
        return (
            <div className={sytles.inputContainer}>
                <label className={sytles.label}>{this.props.title}</label>
                <input className={sytles.input} {...this.props} ></input>
            </div>
        )
    }
}
