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
                    {link : 'www.google.com', name : '����'}
                ],
                promotion : '�� �ƺ� �Źߺ��� �δ�! �����ú��� �� M1 �ƺ� ����������'
            },
            body : [
                {
                    productTitle : '�ƺϿ���' ,
                    productText : '�Źߺ��� �ΰ� ������ �ſ� �پ��.',
                    productImage : '', 
                    isFull: true,
                    productLink : 'www.naver.com'
                }
            ],
            footer : {
                footnote : 'goodnote is footnote',
                roadmap : [
                    {
                        category : "����",
                        lists : [
                            {link : 'www.google.com', name : 'ê�� ����'}
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
