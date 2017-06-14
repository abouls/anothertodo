/**
 * Created by sun on 2017/6/10.
 */
import React from 'react'
import Dtodo from './Todo'
import { connect } from 'react-redux'



const TodoList = ({ todos, onTodoClick }) => (
    <ul>
        {
            todos.map(todo =>
            <Dtodo
                key={todo.id}
                {...todo}
            />
        )}
    </ul>
)



const mapStateToProps = (state) => {
    return {
        todos:state
    }
}

const mapDispatchToProps = () => {
    return {
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)




export default VisibleTodoList