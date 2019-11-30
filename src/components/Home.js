import React, { Component } from 'react'
import './home.css'
import NavBar from './NavBar'
import RightnavBar from './RighnavBar'
import MainContainer from './MainContainer'
export default class Home extends Component {
    render() {
        return (
            <div className="home-container"> 
                <NavBar></NavBar>
                <MainContainer></MainContainer>
                <RightnavBar></RightnavBar>
            </div>
        )
    }
}
