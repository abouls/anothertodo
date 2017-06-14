/**
 * Created by sun on 2017/6/5.
 */
let nextTodoId = 0
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}
let deleid = nextTodoId
export const deleTodo = (id) => {
    return {
        type: 'DELE_TODO',
        id
    }
}

