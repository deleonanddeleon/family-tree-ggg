import React from "react";
import {
  Link,
} from "react-router-dom";

const CardParent = (props) => (
  <div className="col-lg-12">
    {/* <div className="card mx-auto" style={{width: "18rem"}}> */}
    <div className="card cardparent mx-auto">
      {/* <img className="card-img-top" src={`img/${props.toy.image}.png`} alt=""/> */}
      <div className="card-body">
        <h5 className="card-title text-center">{props.node.name}</h5>
        <h5 className="card-subtitle text-center">{props.node.spouse}</h5>
        <p className="card-text mt-1 text-center">
          {/* {props.node.description}
          <br/> */}
          <Link className="cardlink text-center" to={props.node.link}>/up</Link>
        </p>
      </div>
    </div>
  </div>
);

// const CardParent = (props) => (
//   <>
//   <h1>{props.node.name}</h1>
//   <h1>{props.node.spouse}</h1>
//   <Link className="text-center" to={props.node.link}>Parent</Link>
//   </>
// );

export default CardParent;