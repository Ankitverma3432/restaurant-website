import React from 'react';
import { Link } from 'react-router-dom'; //We are doing this here to use React Params or URL Params



function RenderMenuItem({ dish, onClick }) {
    return (
        <div className="card" style={{ width: "100%" }}>
            {/* We are using REACT Params or URL Params here. */}
            <Link to={`/menu/${dish.id}`}>
                <img src={dish.image} className="card-img-top" alt={dish.name} />
                <div className="card-body">
                    <h5 className="card-title">{dish.name}</h5>

                </div>
            </Link>
        </div>
    )
}

// Its a Presentational Component.

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 my-3">
                <RenderMenuItem dish={dish} />
            </div>

        )
    })
    return (
        <div className="container">
            <div className="row">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/home">Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Menu</li>
                    </ol>
                </nav>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {menu}
            </div>


        </div>
    )

}

export default Menu