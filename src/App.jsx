import React, { Component } from 'react'
import "./App.css"
import Phones from "./Phones.jsx"
const products = [
  {
    id: 1,
    name: "Samsung Galaxy S10",
    price: 50,
    imgUrl: "https://www.ispyprice.com/static/nwprd_model/asus-zenfone-max-m2-64gb-8852.jpg",
    count: 0,
  },
  {
    id: 2,
    name: "Motorola GTX G233",
    price: 60,
    imgUrl:  "https://techryn.com/wp-content/uploads/2020/09/iPhone-13-leaks.jpg",
    count: 0,
  },
  {
    id: 3,
    name: "Iphone 12 Axios",
    price: 999.99,
    imgUrl:  "https://www.gizmochina.com/wp-content/uploads/2017/08/Samsung-Note-8-Profile-Page.jpg",
    count: 0,
  },
  {
    id: 4,
    name: "Googleee Pixel II",
    price: 500.99,
    imgUrl: "https://cdn.vox-cdn.com/thumbor/QEy2yLCqjpwa6vXzXHgltQM4zoc=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13384867/motoone.jpg",
    count: 0,
  },
  {
    id: 5,
    name: "Nokia AI smart",
    price: 779.99,
    imgUrl: "https://i2.wp.com/nokiapoweruser.com/wp-content/uploads/2014/07/Nokia-life-saver.jpg?fit=700%2C700&ssl=1",
    count: 0,
  }
];
export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      products,
      counter:0,
      total:0
       
    }
  }
  increase=(id)=>{
    console.log(id)
    const {products ,total} = this.state;
    const newProd = [...products]
    let newTot = total
    const obj = newProd.findIndex(item=>item.id===id)
    newProd[obj].count++;
    newTot+=newProd[obj].price
    console.log(newTot)
    // let count= newProd.reduce((acc,item)=>{
    //   return acc+item.count
    // },0)
    this.setState({products:newProd,counter:this.state.counter+1,total:newTot})
    // console.log(newProd)
  }
  decrease=(id)=>{
    console.log(id)
    const {products,total} = this.state;
    const newProd = [...products]
    let newTot = total
    const obj = newProd.findIndex(item=>item.id===id)
    if(newProd[obj].count>0){
      newProd[obj].count-=1
      newTot-=newProd[obj].price
      // let count= newProd.reduce((acc,item)=>{
      //   return acc+item.count
      // },0)
      this.setState({products:newProd,counter:this.state.counter-1,total:newTot})
    }
    
    // console.log(newProd)
  }
  removeItem=(id)=>{
    const {products, counter, total} = this.state;
    const newProd = [...products]
    const obj = newProd.findIndex(item=>item.id===id)
    const newCount = counter-newProd[obj].count
    let newTotal =total;
    newTotal -= products[obj].count*products[obj].price
    newProd.splice(obj,1)
    this.setState({products:newProd,counter:newCount,total:newTotal})
  }
  render() {
    console.log(this.state.products)
    return (
      <div className='App'>
        <div className="header">
          Shopping Card
          <span ><i id="cart" className="fas fa-shopping-bag"></i><span id="count">{this.state.counter}</span></span>
        </div>
        <h4>YOUR BAG</h4>
        <Phones data={this.state.products} decrease={this.decrease} removeItem={this.removeItem} increase={this.increase}/>
        <div className="footer">
          <div><span>Total</span></div>
          <div><span>{this.state.total.toFixed(2)}</span></div>
        </div>
      </div>
    )
  }
}
