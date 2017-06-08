import  Todo from './TodoList.js'

import ReactDOM  from 'react-dom'

import React  from 'react'

import store from  './stores/Store'

import {Provider} from  'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <Todo>{store.getState()}</Todo></Provider>,
    document.getElementById('MRcontext')
);

store.dispatch({type:'test1'})


