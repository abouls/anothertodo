/**
 * Created by sun on 2017/6/10.
 */
import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'


const TodoList = ({ todos, onTodoClick }) => (
    <ul>
        {
            todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
            />
        )}
    </ul>
)

const  getVisibleTodos=(todos)=>{return todos}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos)
    }
}

const mapDispatchToProps = (state) => {
    return {
        onTodoClick: (id) => {
            // dispatch(toggleTodo(id))
            console.log(state.todos)
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)




export default VisibleTodoList