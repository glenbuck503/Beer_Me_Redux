
import React from 'react';
import NewTap from './NewTap';
import TapList from './TapList';
import TapDetail from './TapDetail';
import { connect } from 'react-redux';
import PropTypes from "prop-types";







class TapControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      selectedTap: null,
      editing: false

    };

  }

  handleClick = () => {
    if (this.state.selectedTap != null) {
      this.setState({

        selectedTap: null,
        editing: false
 
      });
      
    } else {
      const { dispatch } = this.props;
    const action = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action);
    }
  }

  handleAddingNewTapToList = (newTap) => {
    const { dispatch } = this.props;
    const { id, names, brand, alcohol } = newTap;
    const action = {
      type: 'ADD_TAP',
      id: id,
      names: names,
      brand: brand,
      alcohol: alcohol,
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleChangingSelectedTap = (id) => {
    const selectedTap = this.props.masterTapList[id];
    this.setState({selectedTap: selectedTap});
  }

  handleDeletingTap = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_TAP',
      id: id
    }
    dispatch(action);
    this.setState({selectedTap: null});
  }

  handleEditClick = () => {
   
    this.setState({editing: true});
  }

  handleEditingTapInList = (tapToEdit) => {
    const editedMasterTapList = this.state.masterTapList
      .filter(tap => tap.id !== this.state.selectedTap.id)
      .concat(tapToEdit);
    this.setState({
        masterTapList: editedMasterTapList,
        editing: false,
        selectedTap: null
      });
  }

  handleSubtractPint = (id) => {
    const selectedTap = this.state.masterTapList.filter(tap => tap.id === id)[0];
    
    if (selectedTap.pint > 0){
      selectedTap.pint -= 1;
 
    this.setState({selectedTap: selectedTap});
    }
    else {
alert("Sold out!")

    }
  

}

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 


if (this.state.selectedTap != null) {
      currentlyVisibleState = <TapDetail 
        tap = {this.state.selectedTap} 
        onClickingDelete = {this.handleDeletingTap}
        // onClickingEdit = {this.handleEditClick}
        onSubtractPint = {this.handleSubtractPint} />
      buttonText = "Return to Tap List";
 
      
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewTap onNewTapCreation={this.handleAddingNewTapToList} 
      onSubtractPint = {this.handleSubtractPint}/>
      buttonText = "Return to Tap List";


    } else {
      
      currentlyVisibleState = <TapList tapList={this.props.masterTapList} onTapSelection={this.handleChangingSelectedTap}/>
      // onSubtractPint = {this.handleSubtractPint}/>
     
      buttonText = "Add Tap";
 
      
    }
    return (

      <React.Fragment>
      
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText} </button>


 
     
      </React.Fragment>
    );
  }

}

TapControl.propTypes = {
  masterTapList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterTapList: state.masterTapList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}
TapControl = connect(mapStateToProps)(TapControl);

export default TapControl;


