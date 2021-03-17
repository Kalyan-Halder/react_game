import React from 'react';

const CartTemplate = (props) => {
    return(
    <div className="wrapper">
    <div className="img">
            <img src={props.img} alt="Pic"></img>
    </div>
    <div className="bottom">
        <div className="details">
            <h1 className="header">{props.name}</h1>
            <p className="para">{props.details}</p>
            
        </div>
        <div className="social">
            <p className="IMDB para Para">{props.IMDB}</p>
            <p className="IGN para Para">{props.IGN}</p>
            <p className="Other para Para">{props.Other}</p>
            <a href={props.link} target="_black"><button className="btn para Para">Buy Now</button></a>
        </div>
    </div>
    </div>
    );
}

export default CartTemplate;