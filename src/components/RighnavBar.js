import React, { Component } from 'react'
import './rightnavbar.css'
import TitleComponent from './TitleComponent'
import Message from './Message'
export default class RightnavBar extends Component {
    render() {
        return (
            <div className='right-nav-container'>
                <TitleComponent width="180px" title="Monthly stats" but={true} butTitle="change"></TitleComponent>
                <div className="padding-10">
                    <Message></Message>
                    <Message></Message>
                    <Message></Message>
                    <Message></Message>
                    <Message></Message>
                    <Message></Message>
                    <Message></Message>
                </div>
                <div className="flex-column space-around" style={{height:270}}>
                    <img width="100%" src="https://vectorforfree.com/wp-content/uploads/2018/12/Teamwork_Illustration.jpg"></img>
                    <div className="flex-column">
                        <span style={{fontWeight:'bold'}}>Boost your Content</span>
                        <span className="font-small">Buy additional profile views</span>
                    </div>
                    <div className="button"><span>ACTIVATE PROMOTION</span></div>
                </div>
            </div>
        )
    }
}
