import React, { Component } from 'react'
import './shotcard.css'
export default class ShotCard extends Component {
    render() {
        return (
            <div className="shot-container margin-right" style={{padding:'15px'}}>
                <img class="icon-45" src="./shot.png" style={{marginBottom:'8px'}}></img>
                <span style={{fontSize:'11px',fontWeight:'bold',marginBottom:'8px'}}>Drive Storage</span>
                <div className="flex-row">
                    <div className="flex-row margin-right">
                        <img className="icon-8" src="./svgs/heart.svg"></img>
                        <span className="font-smaller">12,233</span>
                    </div>
                    <div className="flex-row ">
                        <img className="icon-8" src="./svgs/heart.svg"></img>
                        <span className="font-smaller">12,233</span>
                    </div>
                </div>
            </div>
        )
    }
}
