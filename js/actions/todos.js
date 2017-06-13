/**
 * Created by sun on 2017/6/5.
 */
let nextTodoId = 0
const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}


export  {addTodo}