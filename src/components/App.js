import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.toEditPage = this.toEditPage.bind(this)
    }

    toEditPage(){
        window.location.href += 'edit'
    }
    
    render(){
        return (
            <div id ='app'>  
                <Header header = {this.props.state.header}/>
                <Body body = {this.props.state.body}/>
                <Footer footer = {this.props.state.footer}/>
                <button id = "edit-button" onClick = {this.toEditPage}>EDIT</button>
            </div>
        )
    }
}