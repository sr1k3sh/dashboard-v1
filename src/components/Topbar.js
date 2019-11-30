import React, { Component } from 'react'
import './topbar.css'
export default class Topbar extends Component {
    render() {
        return (
            <div className="topbar-container flex-row space-between" style={{paddingLeft:'15px',paddingRight:'15px',paddingTop:'15px',paddingBottom:'0'}}>
                <div className="flex-row space-around" style={{width:'80px'}}>
                    <img className="icon-14" src="./svgs/arrow-left.svg"></img>
                    <img className="icon-14" src='./svgs/arrow-right.svg'></img>
                </div>
                <div className="search-bar">
                    <form className="flex-row">
                        <input type="input" placeholder="search"></input>
                        <div className="ok-button flex-row justify-center">
                            <img className="icon-10" src="./svgs/search.svg"></img>
                        </div>
                        
                    </form>
                </div>
            </div>
        )
    }
}
