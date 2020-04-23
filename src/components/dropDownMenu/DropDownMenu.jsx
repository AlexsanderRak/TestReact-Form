import React, { useState } from 'react';
import './dropDownMenu.scss'
import  {DropDownMenuIconHeader, DropDownMenuIconBottom} from './DropDownMenu.icon'
import  {DropDownMenuItemHeader, DropDownMenuItemBottom} from './DropDownMenu.item'
import {filterArray} from './dropDownFunction'


function DropDownMenu(props) {

  const [headerTitle, setHeaderTitle] = useState(null);
  

  const type = {
    "icon": {
      "header": DropDownMenuIconHeader(props.items, headerTitle),
      "bottom": DropDownMenuIconBottom(props.items, ()=>props.setOpen(!props.isOpen)),
    },
    "findItem": {
      "header": DropDownMenuItemHeader(props.items, headerTitle),
      "bottom": DropDownMenuItemBottom(props.items, ()=>props.setOpen(!props.isOpen)),
    },
  }

  function setTitle(str) {

    let result = filterArray(str, props.items);

    setHeaderTitle(result[0]);
    props.setOpen(!props.isOpen);
  }

  return (
    <div className="dropDownMenu" onClick={(e)=>{props.setOpen(!props.isOpen);e.stopPropagation()}}>
      <div className="dropDownMenu-header">
        {type[props.type].header}
      </div>
      <div className="dropDownMenu-btn" >
        <i className={`dropDownMenu-btn-arrow ${props.isOpen ? 'active': ''}`} />
      </div>
      <div className={`dropDownMenu-bottom ${props.isOpen ? 'active': ''}`} onKeyPress={(e)=>{e.key === "Enter" && setTitle(e.target.value)}} onClick={(e)=>{setHeaderTitle(e.target.attributes["index"].nodeValue); props.setOpen(!props.isOpen)}}>
        {type[props.type].bottom}   
        
      </div>
    </div>
  );
}

export default DropDownMenu;