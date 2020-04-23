import React, { useState } from 'react';
import './mainForm.scss'
import Button from './button/Button'
import DropDownMenu from './dropDownMenu/DropDownMenu'
import firstI from '../Img/man.jpeg'
import second from '../Img/woman.jpeg'
import third from '../Img/woman2.jpg'

function MainForm() {
  const items = [
    "TestBuyer",
    "TestBuyer1",
    "TestBuyer2",
    "TestBuyer3",
    "TestBuyer4",
    "TestBuyer5",
    "TestBuyer6",
    "TestBuyer7",
    "TestBuyer8",
    "TestBuyer9",
    "TestBuyer10",
    "TestBuyer11",
    "TestBuyer12",
    "TestBuyer13",
    "TestBuyer14",
    "TestBuyer15",
    "TestBuyer16",
  ];
  const first = [
    { title: "First Element", img: firstI },
    { title: "Second Element", img: second },
    { title: "Third Element", img: third },
  ];
  const [openDropDownItem, setOpenDropDownItem] = useState(false)
  const [openDropDownIcon, setOpenDropDownIcon] = useState(false)
  return (
    <div className="main" onClick={() => { setOpenDropDownItem(false); setOpenDropDownIcon(false) }}>
      <div className="main-form">
        <div className="main-form-dropDown">
          <DropDownMenu
            type="findItem"
            items={items}
            isOpen={openDropDownItem}
            setOpen={() => setOpenDropDownItem(!openDropDownItem)}
          />
          <DropDownMenu
            type="icon"
            items={first}
            isOpen={openDropDownIcon}
            setOpen={() => setOpenDropDownIcon(!openDropDownIcon)}
          />

        </div>
        <div className="main-form-inputs">
          <input className="main-form-input" placeholder="Text field" type="text" />
          <input className="main-form-input" placeholder="Text field" type="text" />
          <input className="main-form-input" placeholder="Text field" type="text" />
        </div>
        <div className="main-form-buttons">
          <Button btnText={"Reset"} btnStyle="btn-white" />
          <Button btnText={"Filter"} />
        </div>
      </div>
    </div>
  );
}

export default MainForm;