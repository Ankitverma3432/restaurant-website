import React from 'react'
// Its a Presentational Component


    function RenderComment({dish}) {
        if (dish != null) {
            return (
                <div className="col-12 col-md-5 my-3">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Comments</h4>
                            <div  className="card-text">{dish.comments.map((c) => {
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
                    {/* {this.renderDish(this.props.dishes)}
                    {this.renderComment(this.props.dishes)} */}

                    <RenderDish dish = {props.dishes}/>
                    <RenderComment dish = {props.dishes}/>
                </div>
            </div>
        )
    }
        
        
    

export default DishDetail 
