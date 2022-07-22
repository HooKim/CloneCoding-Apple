import React from "react";
import '../styles/header.css'

const Header = (props) => (
    <div id = 'head'> 
        <Menus menus = {props.header.menus}/>
        <Promotion promotion = {props.header.promotion}/>
    </div>
);
 const Menus = (props) => (
    <div id = 'menus'>
        {
            props.menus.map((val, idx) => (
                <a href = {"http://" + val.link} className = 'menu-link'>
                    <li key = {idx} className = 'menu'>
                        {val.name}
                    </li>
                </a>
                
            ))
        }
    </div>
);  
const Promotion = (props) => (
    <div id = 'promotion'>
        {props.promotion}
    </div>
);

export default Header;

