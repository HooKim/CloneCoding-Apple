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
                <Header/>
                <Body/>
                <Footer/>
                <button id = "edit-button" onClick = {this.toEditPage}>EDIT</button>
            </div>
        )
    }
}
