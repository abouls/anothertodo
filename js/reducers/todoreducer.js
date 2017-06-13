/**
 * Created by sun on 2017/6/5.
 */

const todo = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            console.log(action.id,action.text)
            return {
                id: action.id,
                text: action.text,
            }

        default:
            return state
    }
}

const initialState={todos:["redux","aha"],input:""}

const todos = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':

            console.log(state)
            return [
                ...state,
                todo(undefined, action)
            ]

        default:
            return state
    }
}



export default todos