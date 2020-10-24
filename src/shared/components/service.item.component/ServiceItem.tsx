import React, { Component } from "react";
import './ServiceItem.css'

const serviceItem = (props) => {
    return (
        <article className="service-item">
            <img src={props.src}></img>
            <h2>{props.title}</h2>
        </article>
    );
}

export default serviceItem
