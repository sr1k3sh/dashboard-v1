import React, { Component } from 'react'
import './listcard.css'
export default class ViewerCard extends Component {
    render() {
        return (
            <div className="view-card flex-row space-between">
                <img className="icon-24 pro margin-right" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwI8dtrgBwgdqR1IQo7VCiYBWJ_CNvcH6sCAEW1ghW3NyMS3Dm&s"></img>
                    <span className="font-small margin-right">Rikesh Shrestha</span>
                    <span className="font-small">1243</span>
            </div>
        )
    }
}
