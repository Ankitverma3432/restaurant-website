import React from 'react';

/* Although we can create a Separate RenderCard Component as RenderCard.js but as we have to use this only inside the HomeComponent so we don't really need to create a separate RenderCard.js and import that here.*/

function RenderCard({ item }) {
    return (
        <>
            <div className="card" >
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    {item.designation ? <h6 className="card-subtitle mb-2">{item.designation}</h6> : null}
                    <p className="card-text">{item.description}</p>
                </div>
            </div>
            </>
    )
}

function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    )
}

export default Home;