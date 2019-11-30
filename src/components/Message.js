import React, { Component } from 'react'

export default class Message extends Component {
    render() {
        return (
            <div className="message-container flex-row space-between margin-bottom">
                <div>
                    <img className="icon-24 pro margin-right" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwI8dtrgBwgdqR1IQo7VCiYBWJ_CNvcH6sCAEW1ghW3NyMS3Dm&s"></img>
                </div>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <span className="font-small">John Doe</span>
                    <span className="font-small">What's up buddy</span>
                </div>
                <span style={{fontSize:'13px',fontWeight:'500'}}>32Mins</span>
            </div>
        )
    }
}
