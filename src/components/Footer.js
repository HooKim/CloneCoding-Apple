import React from "react";
import {connect} from 'react-redux'
import '../styles/footer.css'

const WrappedFooter = (props) => (
    <div id = 'footer'>
        <Footnote footnote = {props.footer.footnote}/>
        <Roadmap roadmap = {props.footer.roadmap} />
        <Articles articles = {props.footer.articles}/>
    </div> 
)

const Footer = connect((state) => ({footer : state.footer}))(WrappedFooter)

const Footnote = (props) => (
    <div id = 'footnote'>
        {props.footenote}
    </div> 
)

const Roadmap = (props) => (
    <div id = 'roadmap'>
        {props.roadmap.map((val, idx) => (
            <div key = {idx} className = 'roadmap'>
                <div className = 'roadmap-category'>
                    {val.category}
                </div>
                <div className = 'roadmap-lists'>
                    {val.lists.map((list, l_idx) => (
                        <a key ={l_idx} href = {list.link}>{list.name}</a>
                    ))}
                </div>
            </div>
        ))}
    </div> 
)

const Articles = (props) => (
    <div id = 'articles'>
        {props.articles}
    </div> 
)

export default Footer;