import React from 'react';

// Its a Presentational Component.

function RenderMenuItem({ dish, onClick }) {
    return (
        <div onClick={() => onClick(dish.id)} className="card" style={{ width: "100%" }}>
            <img src={dish.image} className="card-img-top" alt={dish.name} />
            <div className="card-body">
                <h5 className="card-title">{dish.name}</h5>

            </div>
        </div>
    )
}


const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 my-3">
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>


        )
    })
    return (
        <div className="container">

            <div className="row">
                {menu}
            </div>


        </div>
    )

}

export default Menu