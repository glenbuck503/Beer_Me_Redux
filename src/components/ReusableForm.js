import React from "react";
import PropTypes from "prop-types";
import TapDetail from "./TapDetail"

function ReusableForm(props) {
  return (
    <React.Fragment>

      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='names'
          placeholder='Tap' />
        <input
          type='text'
          name='brand'
          placeholder='brand' />
        <input
          type='text'
          name='alcohol'
          placeholder='abv' />
        <button type='submit'>{props.buttonText}</button>
        

        

        
      </form>
      
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string

};

export default ReusableForm;