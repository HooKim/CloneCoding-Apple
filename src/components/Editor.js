import {connect} from 'react-redux'
import React from "react";

class WrappedEditor extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.state
        this.targetState = this.targetState.bind(this)
        this.finalSave = this.finalSave.bind(this)
        this.backToHome = this.backToHome.bind(this)
        this.addContents = this.addContents.bind(this)
        this.deleteContents = this.deleteContents.bind(this)
    }

    targetState(e){
        const targetId = e.target.id.split('-')
        let curObj = this.state
        //idx begins from 1
        let i;
        for(i = 1; i < targetId.length-1; i++){
            if(!isNaN(targetId[i]))
                curObj = curObj[parseInt(targetId[i])]
            else
                curObj = curObj[targetId[i]]
        } 
        // Not to point literal itself, but to point to the object containing the literal
        if(!isNaN(targetId[i]))
            curObj[parseInt(targetId[i])] = e.target.value;
        else
            curObj[targetId[i]] = e.target.value
    }

    backToHome(){
        const home = new URL(window.location.href)
        window.location.href = home.origin + '/'
    }

    finalSave(e){
        localStorage.setItem('state-for-apple-project', JSON.stringify(this.state));
    }

    addContents(e){
        const targetId = e.target.id.split('-')
        let curObj = this.state
        console.log(targetId)
        //idx begins from 1
        let i;
        for(i = 1; i < targetId.length-1; i++){
            if(!isNaN(targetId[i]))
                curObj = curObj[parseInt(targetId[i])]
            else
                curObj = curObj[targetId[i]]
        } 
        const defaultFormat ={
            'menus' : {
                link : "",
                name : ""
            },
            'body' : {
                productTitle : "",
                productText : "",
                productImage : "",
                isFull : true
            },
            'roadmap' : {
                category : "",
                lists : [{
                    link : "",
                    name : ""
                }]
            },
            'lists' : {
                link : "",
                name : ""
            }
        }
        curObj.push(defaultFormat[targetId[i-1]])
        this.setState((prev) => (prev))
        
    }

    deleteContents(e){
        const targetId = e.target.id.split('-')
        let targetObject =  this.state;
        console.log(targetId)
        //idx begins from 1
        let i =1 ;
        for(; i < targetId.length-2; i++){
            if(!isNaN(targetId[i])){
                targetObject = targetObject[idx]
            }
            else
                targetObject = targetObject[targetId[i]]
        } 
        const idx = parseInt(targetId[i]);
        targetObject.splice(idx, 1);
        this.setState((prev) => (prev));
    
    }
    componentDidMount(){
        document.querySelectorAll('.add-button').forEach((btn) => {
            btn.addEventListener('click', this.addContents)
        })
        document.querySelectorAll('.delete-button').forEach((btn) => {
            btn.addEventListener('click', this.deleteContents)
        })
    }
    componentDidUpdate(){
        document.querySelectorAll('.add-button').forEach((btn) => {
            btn.addEventListener('click', this.addContents)
        })
        document.querySelectorAll('.delete-button').forEach((btn) => {
            btn.addEventListener('click', this.deleteContents)
        })
    }
    

    render(){
        
        return(
        <div id ="edit" onChange ={this.targetState}>
            <EditorForHeader state = {this.props.state} />
            <EditorForBody state = {this.props.state} />
            <EditorForFooter state = {this.props.state} />
            <br></br>
            <button onClick = {this.finalSave} >SAVE</button>
            <button onClick = {this.backToHome}>BACK</button>
        </div>
        )
    }
}

const Editor = connect((state) => ({state : state}))(WrappedEditor)

const EditorForHeader = (props) => (
    <div id = "edit-header">
        <h2>Header</h2>
        <div id = "edit-header-menus">
            <h3>Menus</h3>
            <button className = "add-button" id = "edit-header-menus-button">+</button>
            {props.state.header.menus.map((val, idx) => {
                let menuId = "edit-header-menus-"+idx
                return(
                    <div key ={idx} className = "edit-header-menus" id ={menuId} >
                        {"Name"} <input id={menuId + "-name"} type = "text" defaultValue = {val.name}></input>
                        {"Link"} <input id={menuId + "-link"} type = "text" defaultValue = {val.link}></input>
                        <button className = "delete-button" id ={menuId + "-button"}>-</button>
                    </div>
                )
            })}
        </div>
        <h3>Promotion</h3>
        <textarea id="edit-header-promotion" defaultValue ={props.state.header.promotion}></textarea>
    </div>
)


const EditorForBody = (props) => (
    <div id ="edit-body">
        <div className = "edit-body">
            <h2>Body</h2>
            <button className = "add-button" id = "edit-body-button">+</button>
            {props.state.body.map((val, idx) => {
                let productId = "edit-body-"+idx
                return(
                    <div key ={idx} id = {productId}>
                        {"Product Text"} <input id={productId + "-productTitle"} defaultValue ={val.productTitle}></input>
                        {"Product Text"} <input id={productId + "-productText"} defaultValue ={val.productText}></input>
                        {"Product Image"} <input id={productId + "-productImage"} defaultValue ={val.productImage}></input>
                        {"Product Link"} <input id={productId + "-productLink"} defaultValue ={val.productLink}></input>
                        <button className = "delete-button" id ={productId + "-button"}>-</button>
                    </div>
                )
            })}
        </div> 
    </div>
)

const EditorForFooter = (props) => (
    <div id = "edit-footer">
        <h2>Footer</h2>
        <div className = "edit-footer-footnote">
            {"Footnote"} {<input id ="edit-footer-footnote" defaultValue = {props.state.footer.footnote}></input>}
        </div>
        <div className = "edit-footer-roadmap">
            <h3>Roadmap</h3> 
            <button className ="add-button" id = {"edit-footer-roadmap-button"}>+</button>
            {props.state.footer.roadmap.map((val, idx) => {
                let roadmapId = "edit-footer-roadmap-" + idx
                return(
                    <div key ={idx} id = {roadmapId}>
                        <button className = "add-button" id = {roadmapId + "-lists-buttonAdd"}>+</button>
                        <button className = "delete-button" id = {roadmapId + "-buttonDel"}>-</button>
                        <div id ={roadmapId + "-lists"}>
                        <input id = {roadmapId + "-category"} defaultValue = {val.category}></input>
                        {val.lists.map((list, lidx) => {
                            let roadmapListId = roadmapId + "-lists-" + lidx;
                            return(
                                <div key ={lidx} id ={roadmapListId}>
                                        {"Name"} <input id = {roadmapListId + "-name"} defaultValue ={list.name}></input>
                                        {"Link"} <input id = {roadmapListId + "-link"} defaultValue ={list.link}></input>
                                        <button className = "delete-button" id ={roadmapListId + "-button"}>-</button>
                                    </div>
                                )
                            })}
                        
                        </div>
                    </div>
                )

            })}
        </div>
        <br></br>
        <div className = "edit-footer-articles">
            {"Articles"}<input id = "edit-footer-articles" defaultValue ={props.state.footer.articles}></input>
        </div>
    </div>

)

export default Editor;