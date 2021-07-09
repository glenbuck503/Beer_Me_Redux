
import React from 'react';
import NewTap from './NewTap';
import TapList from './TapList';
import TapDetail from './TapDetail';







class TapControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterTapList: [],
      selectedTap: null

    };

  }

  handleClick = () => {
    if (this.state.selectedTap != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTap: null
 
      });
      
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewTapToList = (newTap) => {
    const newMasterTapList = this.state.masterTapList.concat(newTap);
    this.setState({masterTapList: newMasterTapList,
    formVisibleOnPage: false });
    
  }

  handleChangingSelectedTap = (id) => {
    const selectedTap = this.state.masterTapList.filter(tap => tap.id === id)[0];
    this.setState({selectedTap: selectedTap});
  }

  handleDeletingTap = (id) => {
    const newMasterTapList = this.state.masterTapList.filter(tap => tap.id !== id);
    this.setState({
      masterTapList: newMasterTapList,
      selectedTap: null
    });
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
 
      
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTap onNewTapCreation={this.handleAddingNewTapToList} 
      onSubtractPint = {this.handleSubtractPint}/>
      buttonText = "Return to Tap List";


    } else {
      
      currentlyVisibleState = <TapList tapList={this.state.masterTapList} onTapSelection={this.handleChangingSelectedTap}
      onSubtractPint = {this.handleSubtractPint}/>
     
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



export default TapControl;


