import React from "react";
import {connect} from 'react-redux';
import '../styles/header.css';

const WrappedHeader = (props) => (
    <div id = 'head'> 
        <Menus menus = {props.header.menus}/>
        <Promotion promotion = {props.header.promotion}/>
    </div>
);
const Header = connect((state) => {console.log(state);return{header : state.header}})(WrappedHeader)

 const Menus = (props) => (
    <div id = 'menus'>
        {
            props.menus.map((val, idx) => (
                <a key={idx} href = {"http://" + val.link} className = 'menu-link'>
                    <li className = 'menu'>
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

