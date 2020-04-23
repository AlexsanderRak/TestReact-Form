import React, { useState } from 'react';
import './dropDownMenu.item.scss'
import {filterArray} from './dropDownFunction'

function DropDownMenuItemHeader(props, id) {
     
    let index = props.indexOf(id);
    return (
        <div className="dropDownMenuItem-header">
            {(index !== -1) ? 
            <span className="dropDownMenuItem-header-title">{props[index]}</span>
            :
            <span className="dropDownMenuItem-header-defualt">Select buyer</span>
            }
        </div>
    )
}



function DropDownMenuItemBottom(props) {
    
    const [filteredArray, setFilteredArray] = useState(props)

    return (
        <div className="dropDownMenuItem-bottom"> 
            <input className="dropDownMenuItem-bottom-search" onClick={(e)=>e.stopPropagation()} index={"default"} type="text" onChange={(e)=>{ setFilteredArray(filterArray(e.currentTarget.value, props))}}/>
            {filteredArray.map((el, index) =>
            <div key={index} index={el} className="dropDownMenuItem-bottom-item">
                <span className="dropDownMenuItem-bottom-item-title" index={el}>{el}</span>
            </div>
            )}
        </div>
    );
}

export { DropDownMenuItemBottom, DropDownMenuItemHeader };