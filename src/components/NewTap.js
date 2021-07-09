
import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewTap(props){
const tap = {};
tap.id = v4();

function handleNewTapSubmission(event) {
  event.preventDefault();
  props.onNewTapCreation({names: event.target.names.value, pint: 124, brand: event.target.brand.value,alcohol: event.target.alcohol.value, id: v4()});
}
return (

    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewTapSubmission}
        buttonText="Add Tap!" />
    </React.Fragment>
  );
  }
  
  NewTap.propTypes = {
    onNewTapCreation: PropTypes.func,
    onSubTractPint: PropTypes.func,
    formSubmissionHandler: PropTypes.func,
  };
  
  export default NewTap;