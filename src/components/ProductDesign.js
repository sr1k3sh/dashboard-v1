import React, { Component } from 'react'
import './product.css'

export default class ProductDesign extends Component {
    render() {
        return (
            <div className="product-container padding-10">
                <div className='product-heading'>
                    <span style={{textTransform:'uppercase',color:'#848fc9',fontWeight:'bold',fontSize:'10px'}}>product design</span>
                    <span style={{textTransform:'uppercase',color:'#c4c4c4',fontWeight:'bold',fontSize:'9px'}}>Poland</span>
                </div>
                <img className="word-map" src="./svgs/world.svg"></img>
                <div className="job-offers">
                    <span className="font-small">New Job offers</span>
                    <span style={{fontSize:20,fontWeight:'bold'}}>105</span>
                    <div className="button"><span>APPLY</span></div>
                </div>
            </div>
        )
    }
}
