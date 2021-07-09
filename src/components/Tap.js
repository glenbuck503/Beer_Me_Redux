import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";




function Tap(props){
  
  
  const {tap, onSubTractPint, onClickingEdit, onClickingDelete} = props;

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
    <div onClick = {() => props.onClickingDelete(props.id)}></div>
      

 <hr/>




 








      



      

    </React.Fragment>
  );
}


Tap.propTypes = {

  names: PropTypes.string,
  brand: PropTypes.string,
  alcohol: PropTypes.number,
  pint: PropTypes.number,
  id: PropTypes.string,
  whenTapClicked: PropTypes.func,
  onSubTractPint: PropTypes.func,
  onClickingDelete: PropTypes.func,
  buttonText: PropTypes.string
  

  
};



export default Tap;