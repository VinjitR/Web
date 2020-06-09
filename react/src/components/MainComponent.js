import React, { Component } from 'react';
import '../App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';

class Main extends Component{

  constructor(props) {
    super(props);
    
    this.state ={
      dishes:DISHES,
      selectedDish:null,
    };
  }
onDishSelect(dishId){
    this.setState({selectedDish:dishId});
}

render() {
  return (
    <div className="App">
      <Header/>
      <Menu dishes={this.state.dishes} onClick={
      (dishId)=>this.onDishSelect(dishId)
      }/>
      <Dishdetail dish={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]}></Dishdetail>
      <Footer/>
    </div>
  );
}
}
export default Main;