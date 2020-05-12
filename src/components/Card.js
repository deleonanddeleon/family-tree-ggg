import React from "react";
import {
  Link,
} from "react-router-dom";

const Card = (props) => (
  // <div className="col-md-6 col-lg-4">
  <div className="col">
    <div className="card mb-3 mx-auto">
      {/* <img className="card-img-top" src={`img/${props.toy.image}.png`} alt=""/> */}
      <div className="card-body">
        <h6 className="card-title text-center">{props.node.name}</h6>
        <h6 className="card-subtitle text-center nickname">"{props.node.nickname}"</h6>
        <p className="card-text text-center">
          {/* {props.node.description}
          <br/> */}
          {/* <Link className="text-center" to={props.node.link}>{props.node.link}</Link> */}
          <Link className="cardlink text-center" to={props.node.link}>/next</Link>
        </p>
      </div>
    </div>
  </div>
);

// const Card = (props) => (
//   <>
//   <h3>{props.node.name}</h3>
//   <Link className="text-center" to={props.node.link}><h5>Next</h5></Link>
//   </>
// );

export default Card;