import React from "react";
import PropTypes from "prop-types";



function Tap(props){

  return (
   
    <React.Fragment>

      <div onClick = {() => props.whenTapClicked(props.id)}>
      
        <h2>Tap Name: {props.names}</h2>
        <p>Click Here For Full Details on this Tap</p>
        <p>Brand Name: {props.brand}</p>
        <p>ABV: {props.alcohol}%</p>
        <p>Pints Left: {props.pint}</p>
        <hr/>

      </div>
    </React.Fragment>
  );
}


Tap.propTypes = {

  names: PropTypes.string,
  brand: PropTypes.string,
  alcohol: PropTypes.string,
  pint: PropTypes.number,
  id: PropTypes.string,
  whenTapClicked: PropTypes.func
};



export default Tap;