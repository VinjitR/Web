import React, {Component} from 'react';
import { Navbar, NavbarBrand,Nav, NavbarToggler,NavItem,Collapse, Jumbotron } from 'reactstrap';
import {NavLink} from'react-router-dom';



class Header extends Component{

    constructor(props){
        super(props);
        this.state ={
            isNavOpen: false
        };
        this.toggleNav=this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({ isNavOpen: !this.state.isNavOpen})
    }

    render() {
        return(
            <div className="container-flex align-self-items-left">
                <Navbar dark expand='md'>
                <div className="container">
                    <div className="row auto">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            
                            </Nav>
                        </Collapse>
                    </div>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className='row row-header'>
                            <div className="col-12 col-sm-8">
                                <h1>Restraunt AcknApp</h1>
                                <p>We here make best learning from the best to the best.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;