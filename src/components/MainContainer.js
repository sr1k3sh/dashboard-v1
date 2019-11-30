import React, { Component } from 'react'
import Topbar from './Topbar'
import './maincontainer.css'
import RightnavBar from './RighnavBar'
import MidContainer from './MidContainer'
import BottomContainer from './BottomContainer'
export default class MainContainer extends Component {
    render() {
        return (
            <div className="main-container ">
                <Topbar></Topbar>
                <MidContainer></MidContainer>
                <BottomContainer></BottomContainer>
            </div>
        )
    }
}
