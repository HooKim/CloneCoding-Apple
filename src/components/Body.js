import React from "react";
import {connect} from 'react-redux'
import '../styles/body.css'

const WrappedBody = (props) => (
    <div id = 'body'>
        {props.body.map((val, idx) => (
            <ProductWrapper key = {idx} productWrapper = {val} />
        ))}
    </div>
);

const Body = connect((state) => ({body : state.body}))(WrappedBody)


const ProductWrapper = (props) => (
    <a href = {"http://" + props.productWrapper.productLink}>
        <div className = 'product-wrapper'>
            <div className = 'product-title-text'>
                <ProductTitle productTitle ={props.productWrapper.productTitle} />
                <ProductText productText = {props.productWrapper.productText}/>
            </div>
            <ProductImage productImage = {props.productWrapper.productImage}/>
        </div>
    </a>
);

const ProductTitle = (props) => (
    <div className = 'product-title'>
        {props.productTitle}
    </div>
)

const ProductText = (props) => (
    <div className = 'product-text'>
        {props.productText}
    </div>
);

const ProductImage = (props) => (
    <div className = 'product-image'>
        <img src = {props.productImage}></img>
    </div>
);

export default Body;