import {createStore} from 'redux'

const demoState = {
    header : {
        menus : [
            {link : 'www.google.com', name : 'apple'}
        ],
        promotion : 'promotion'
    },
    body : [
        {
            productTitle : 'air' ,
            productText : 'Powerful',
            productImage : '', 
            isFull: true,
            productLink : 'www.naver.com'
        }
    ],
    footer : {
        footnote : 'goodnote is footnote',
        roadmap : [
            {
                category : "QA",
                lists : [
                    {link : 'www.google.com', name : 'AI Chat'}
                ]
            }
        ],
        articles : "powered by Hoo"
    }
}

const reducer = (state = demoState, action) => {
    switch(action.type){
        case 'SAVE_EDIT':
            return {...state,...action.state}
        default:
            return {...state}

    }
};

const getStore = (savedState = null) => {
    let store
    store = createStore(reducer)
    if(savedState !== null)
        store.dispatch({type:'SAVE_EDIT', state: savedState})
    return store;
}

export default getStore