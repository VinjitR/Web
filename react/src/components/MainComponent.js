import React, { Component } from 'react';
import '../App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
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
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristornte Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes} onClick={
      (dishId)=>this.onDishSelect(dishId)
      }/>
      <div ClassName='row'>
      <Dishdetail dish={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]}></Dishdetail></div>
    </div>
  );
}
}
export default Main;