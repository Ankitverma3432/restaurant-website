import React, { Component } from 'react'

class Header extends Component {

    render() {
        return (
            <>
                <nav className="navbar navbar-dark">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-1 mx-5 h1">Ristorante Con Fusion</span>
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