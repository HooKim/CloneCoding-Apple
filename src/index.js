import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './styles/all.css';
import App from './components/App';
import Editor from './components/Editor';

class Root extends React.Component{
    constructor(props){
        super(props);
        
        this.state = localStorage.getItem('state-for-apple-project') == null?
        {
            header : {
                menus : [
                    {link : 'www.google.com', name : '¾ÖÇÃ'}
                ],
                promotion : '¾Ñ ¸ÆºÏ ½Å¹ßº¸´Ù ½Î´Ù! ¿¡¾îµð¿Ãº¸´Ù ½Ñ M1 ¸ÆºÏ ¸¸³ªº¸¼¼¿ä'
            },
            body : [
                {
                    productTitle : '¸ÆºÏ¿¡¾î' ,
                    productText : '½Å¹ßº¸´Ù ½Î°í ¼º´ÉÀº ¸Å¿ì ¶Ù¾î³ª´Ù.',
                    productImage : '', 
                    isFull: true,
                    productLink : 'www.naver.com'
                }
            ],
            footer : {
                footnote : 'goodnote is footnote',
                roadmap : [
                    {
                        category : "¹®ÀÇ",
                        lists : [
                            {link : 'www.google.com', name : 'Ãªº¿ ÀÀ´ë'}
                        ]
                    }
                ],
                articles : "powered by Hoo"
            }
        }
        :
        JSON.parse(localStorage.getItem('state-for-apple-project'))
    }

    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path = '/' element = {<App state= {this.state}/>} />
                    <Route path = '/edit' element = {<Editor  state= {this.state}/>}/>
                </Routes>
            </BrowserRouter>

        )
    }


}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root/>);
