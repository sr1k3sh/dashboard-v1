import React, { Component } from 'react'

export default class Bar extends Component {
    render() {
        return (
            <React.Fragment>
                   
                <svg class={this.props.className} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    style={{fill:this.props.fill}} viewBox="0 0 490 490">
                <g id="Black_25_">
                    <rect x="25.924" y="311.043" width="58.417" height="178.957"/>
                    <rect x="120.861" y="231.295" width="58.417" height="258.705"/>
                    <rect x="215.784" width="58.417" height="490"/>
                    <rect x="310.721" y="93.621" width="58.417" height="396.379"/>
                    <rect x="405.659" y="176.798" width="58.417" height="313.202"/>
                </g>

                </svg>

            </React.Fragment>
        )
    }
}
