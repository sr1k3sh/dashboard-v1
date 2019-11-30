import React, { Component } from 'react'
import TitleComponent from './TitleComponent'
import './midcontainer.css'
import Bar from './../svgs/Bar'
import ListCard from './ListCard'
import ViewerCard from './ViewerCard'
import ProductDesign from './ProductDesign'
export default class MidContainer extends Component {
    render() {
        return (
            <div className="mid-container ">
               <TitleComponent width="180px" title="Monthly stats" but={true} butTitle="change"></TitleComponent>
                <div className="stats-container padding-10">
                    <div className="graph-container">
                        <img src="https://leanpub.com/site_images/d3-t-and-t-v4/fill01.png"></img>
                    </div>
                    <div className="goal-card">
                        <div className="goal-indicator flex-row justify-center">
                            <span>7</span>
                        </div>
                        <div className="goal-details">
                            <div>
                                <Bar className="icon-14" fill="#fff"></Bar><Bar className="icon-14" fill="#fff"></Bar>
                            </div>
                            <div style={{display:'flex',flexDirection:'column'}}>
                                <span style={{fontSize:'10px',color:'#fff'}}>Montly stats goal</span>
                                <span  style={{fontSize:'14px',color:'#fff'}}>21</span>
                            </div>
                        </div>
                    </div>
                    <div className="scores">
                        <div className="score-card padding-10 margin-bottom">
                            <div>
                                <Bar className="icon-14" fill="#546af5"></Bar><Bar className="icon-14" fill="#546af5"></Bar>
                            </div>
                            <span style={{fontSize:'10px',color:'#a9a9a9'}}>like</span>
                            <span style={{fontSize:'15px',fontWeight:'bold'}}>12,824</span>
                        </div>
                        <div className="score-card padding-10">
                            <div>
                                <Bar className="icon-14" fill="#546af5"></Bar><Bar className="icon-14" fill="#546af5"></Bar>
                            </div>
                            <span style={{fontSize:'10px',color:'#a9a9a9'}}>like</span>
                            <span style={{fontSize:'15px',fontWeight:'bold'}}>12,824</span>
                        </div>
                    </div>
                </div>
                <div className="fan-container">
                    <div className="big-fans">
                        <TitleComponent width="180px" title="Biggest fan" but={false} butTitle="Favorite designer"></TitleComponent>
                        <div className="list padding-10">
                            <ListCard></ListCard>
                            <ListCard></ListCard>
                            <ListCard></ListCard>
                        </div>
                    </div>
                    <div className="profile-views">
                        <TitleComponent width="100px" title="Profile views" but={false} ></TitleComponent>
                        <div className="list padding-10">
                            <ViewerCard></ViewerCard>
                            <ViewerCard></ViewerCard>
                            <ViewerCard></ViewerCard>
                        </div>
                    </div>
                    <ProductDesign></ProductDesign>
                </div>
            </div>
        )
    }
}
