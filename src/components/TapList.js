import React from 'react';
import Tap from './Tap';
import TapDetail from './Tap';
import PropTypes from "prop-types";



function TapList(props){
  const {tap, onSubtractPint, onClickingEdit, onClickingDelete} = props;

  return (
    <React.Fragment>

      <hr/>

  
      {props.tapList.map((tap) =>
        <Tap
  
         whenTapClicked = { props.onTapSelection }

         

          names={tap.names}
          brand={tap.brand}
          alcohol={tap.alcohol}
          pint={tap.pint}
          key={tap.id}
     
          id={tap.id}/>

        


      
      )}
                
                



               
      
    </React.Fragment>
   
   
   
    
  );
}

TapList.propTypes = {
  tap: PropTypes.func,
  onClickingDelete: PropTypes.func,
  // onClickingEdit: PropTypes.func,
  onSubTractPint: PropTypes.func
};


export default TapList;