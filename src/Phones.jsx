import React, { Component } from 'react'

export default class Phones extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    render() {
        return (
            this.props.data.map(item=>{
                return (
                  <div className="content" key={item.id}>
                  <div className="inside">
                    <img src={item.imgUrl} alt="phones"/>
                    <div className="price">
                      <ul>
                      <li style={{fontWeight:"bold"}}>{item.name} </li>
                      <li>${item.price}</li>
                      <li id="remove" onClick={()=>this.props.removeItem(item.id)} style={{color:'#40B9B9'}}>remove</li>
                      </ul>
                    </div>
                  </div>
                  <div className="updown">
                    <span><i onClick={()=>this.props.increase(item.id)} className="fas fa-sort-up"></i></span>
                    <span>{item.count}</span>
                    <span><i onClick={()=>this.props.decrease(item.id)} className="fas fa-sort-down"></i></span>
                  </div>
                </div>
                )
              }) 
        )
            
    }
}
