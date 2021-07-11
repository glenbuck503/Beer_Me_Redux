import React from 'react';
import Tap from './Tap';

import PropTypes from "prop-types";



function TapList(props){
  return (
    <React.Fragment>
      <hr />

      {Object.values(props.tapList).map((tap) =>
        <Tap
          whenTapClicked = { props.onTapSelection }
          names={tap.names}
          brand={tap.brand}
          alcohol={tap.alcohol}
          pint={tap.pint}
  
          id={tap.id}
          key={tap.id}/>
      )}

    </React.Fragment>
  );
}



TapList.propTypes = {
  tapList: PropTypes.object,
  onTapSelection: PropTypes.func
};


export default TapList;