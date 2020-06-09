import React, {Component} from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component{
    render() {
        return(
            <>
                <Navbar dark>
                <div className="container">
                <NavbarBrand href="/">Restraunt U Love</NavbarBrand>
                </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className='row row-header'>
                            <div className="col-12 col-sm-8">
                                <h1>Restraunt AcknApp
                                </h1>
                                <p>We here make best learning from the best to the best.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    }
}

export default Header;