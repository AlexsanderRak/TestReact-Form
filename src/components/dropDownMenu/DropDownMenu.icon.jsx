import React from 'react';
import './dropDownMenu.icon.scss'

function DropDownMenuIconHeader(props, id) {

    return (
        <div className="dropDownMenuIcon-header">
            {(+id | id === "0") ? 
            <>
                <i className="dropDownMenuIcon-header-icon" style={{background:`url(${props[id].img}) no-repeat`}}></i>
                <span className="dropDownMenuIcon-header-title">{props[id].title}</span>
            </>
            :
            <span className="dropDownMenuIcon-header-defualt">All users</span>
            }
        </div>
    )
}

function DropDownMenuIconBottom(props, setCloseDropDown) {

    return (
        <div className="dropDownMenuIcon-bottom">
             <div index={"Defult"} className="dropDownMenuIcon-bottom-item">All users</div>
            {props.map((el, index) =>
            <div key={index} index={index} className="dropDownMenuIcon-bottom-item">
                <i className="dropDownMenuIcon-bottom-item-icon" index={index} style={{background:`url(${el.img}) no-repeat`}}></i>
                <span className="dropDownMenuIcon-bottom-item-title" index={index}>{el.title}</span>
            </div>
            )}
        </div>
    );
}

export { DropDownMenuIconBottom, DropDownMenuIconHeader };