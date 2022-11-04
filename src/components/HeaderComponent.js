import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            isNavOpen : false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen : !this.state.isNavOpen
        })
    }
    render() {
        return (
            <>

                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src='assets/images/logo.png' alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                            
                        </a>

                        <button className="navbar-toggler" onClick={this.toggleNav} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div isOpen={this.state.isNavOpen} className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span>Home</NavLink>

                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span>About Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span>Menu</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span>Contact Us</NavLink>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Header