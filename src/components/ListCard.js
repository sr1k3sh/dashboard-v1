import React, { Component } from 'react'
import './listcard.css'
export default class ListCard extends Component {
    render() {
        return (
            <div className="list-card flex-row space-between">
                <div className="flex-row space-around" style={{width:115}}>
                    <img className="icon-24 pro margin-right" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwI8dtrgBwgdqR1IQo7VCiYBWJ_CNvcH6sCAEW1ghW3NyMS3Dm&s"></img>
                    <span className="font-small">Rikesh Shrestha</span>
                </div>
                <div className="flex-row " style={{width:115}}>
                    
                    <img className="icon-14 margin-right" src="./svgs/heart.svg"></img>
                    <span className="font-small">12,233</span>
                </div>
                <div className="flex-row" style={{width:115}}>
                    <img className="icon-14 margin-right" src="./svgs/message-circle.svg"></img>
                    <span className="font-small">120</span>
                </div>
                <div className="flex-row" >
                    <span className="font-small margin-right">-</span>
                    <span className="font-small">+</span>
                </div>
            </div>
        )
    }
}
