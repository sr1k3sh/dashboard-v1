import React, { Component } from 'react'
import './navbar.css'
import Aperture from '../svgs/Aperture'
export default class NavBar extends Component {
    render() {
        return (
            <div className='navbar-container flex-column space-between'>
                <div className="padding-10 flex-column space-between" style={{height:'45%'}}>
                    <div className="navbar-logo">
                        <Aperture svgColor="#A7B2F7"></Aperture>
                    </div>
                    <div className="navbar-menu1 flex-column space-evenly" style={{height:'100%'}}>
                        <img className="icon-14" src={'./svgs/command.svg'}></img>
                        <img className="icon-14" src={'./svgs/home.svg'}></img>
                        <img className="icon-14" src={'./svgs/avatar.svg'}></img>
                        <img className="icon-14" src={'./svgs/cake.svg'}></img>
                        <img className="icon-14" src={'./svgs/suitcase.svg'}></img>
                    </div>
                </div>
                <div className="padding-10 flex-column space-between" style={{height:'33%'}}>
                    <div className="navbar-menu2 flex-column space-evenly" style={{height:'180px'}}>
                        <img className="icon-14" src={'./svgs/command.svg'}></img>
                        <img className="icon-14" src={'./svgs/home.svg'}></img>
                        <img className="icon-14" src={'./svgs/cake.svg'}></img>
                    
                    </div>
                    <div className="profile-img ">
                        <img className="icon-14" src={'./svgs/avatar.svg'}></img>
                    </div>
                </div>
            </div>
        )
    }
}
