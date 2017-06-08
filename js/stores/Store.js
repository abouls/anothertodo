/**
 * Created by sun on 2017/6/5.
 */
import {createStore} from 'redux'


const counter = (state = 0,action)=>{
    switch (action.type){
        case 'test1':
            alert("works!")
            return state + 1;

        case 'test2':
            return state - 1;

        default:
            state

    }


}

let store = createStore(counter)



export default store