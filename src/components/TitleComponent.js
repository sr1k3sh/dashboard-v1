import React, { Component } from 'react'
import './title.css'
export default class componentName extends Component {
    render() {
        return (
            <div style={{width:this.props.width}} className="title-container flex-row space-around padding-vertical">
                <div className="title flex-row justify-center" >
                    <span>{this.props.title}</span>
                </div>
                <div className={`${this.props.but?'but-title':''} but flex-row justify-center`}>
                    <span>{this.props.butTitle}</span>
                </div>
            </div>
        )
    }
}
