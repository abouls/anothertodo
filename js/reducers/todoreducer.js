/**
 * Created by sun on 2017/6/5.
 */

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
            }
         case 'DELE_TODO':

             return {
                 id:action.id

             }



        default:
            return state
    }
}


// const initialState={text:"i know this will disappear"}

const initialState=["lets go"]

const todos = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return[
                ...state,
                todo(undefined, action)
            ]
        case 'DELE_TODO':
            console.log(todo(undefined, action))
            // console.log(state)
            return [
                  ...state.slice(0,todo(undefined, action)),
                 ...state.slice(todo(undefined, action)+1)

            ]


        default:
            return state
    }
}



export default todos