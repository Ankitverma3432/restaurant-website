import React from 'react'

import { Link } from "react-router-dom";

// Its a Presentational Component

    function RenderComment({dish}) {
        if (dish != null) {
            return (
                <div className="col-12 col-md-5 my-3">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Comments</h4>
                            <div  className="card-text">{dish.map((c) => {
                                return (
                                    <div key={c.id}>
                                        <p>{c.comment}</p>
                                        <p>--{c.author},{c.date}</p>
                                    </div>
                                )
                            })}</div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div></div>
            );
        }
    }


    function RenderDish({dish}) {
        if (dish != null) {
            return (
                <div className="col-12 col-md-5 my-3">
                    <div className="card">
                        <img src={dish.image} className="card-img-top" alt={dish.name} />
                        <div className="card-body">
                            <h5 className="card-title">{dish.name}</h5>
                            <p className="card-text">{dish.description}</p>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div></div>
            );
        }
    }
    
  const DishDetail=(props)=>{     
        return (
            <div className="container">
                <div className="row">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                       
                        <li class="breadcrumb-item"><Link to="/menu">Menu</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">{props.dish.name}</li>
                    </ol>
                </nav>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
                <div className="row">                 
                    <RenderDish dish = {props.dish}/>
                    <RenderComment dish = {props.comments}/>
                </div>
            </div>
        )
    }
        
        
    

export default DishDetail 
