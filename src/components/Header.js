import React from "react";
import tapsImage from "./../img/suds.gif";
import ReusableForm from "./ReusableForm";

function Header() {
  return (
    <React.Fragment>
      <img src={tapsImage} id="beerPic" />
      <ReusableForm/>
   
      
      </React.Fragment>
  );
}

export default Header;