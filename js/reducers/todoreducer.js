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

        default:
            return state
    }
}
//赋予初始state一个对象，通过解构对象就被刷掉了。回头自己看解构
// const initialState={text:"i know this will disappear"}

const initialState=["lets go"]

const todos = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return[
                ...state,
                todo(todo.text, action)
            ]


        default:
            return state
    }
}



export default todos