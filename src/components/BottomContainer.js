import React, { Component } from 'react'
import TitleComponent from './TitleComponent'
import ShotCard from './ShotCard'
export default class BottomContainer extends Component {
    render() {
        return (
            <div className="bottom-container">
                <TitleComponent width="240px" title="Most Popular Shots" but={true} butTitle="LAST 30 DAYS"></TitleComponent>
                <div className="flex-row padding-10">
                    <ShotCard></ShotCard>
                    <ShotCard></ShotCard>
                    <ShotCard></ShotCard>
                    <ShotCard></ShotCard>
                    <ShotCard></ShotCard>
                    <ShotCard></ShotCard>
                    <ShotCard></ShotCard>

                </div>
            </div>
        )
    }
}
