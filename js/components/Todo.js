/**
 * Created by sun on 2017/6/10.
 */
import React from 'react'
import { deleTodo } from '../actions/todos'
import { connect } from 'react-redux'
let Todo = ({ text,id=0,dispatch }) => (
    <div >
    <li>
        {text}
    </li>
        <button onClick={()=>{dispatch(deleTodo(id))}} >删除</button>
    </div>
)
Todo = connect()(Todo)

const mapStateToProps = (state) => {

    return {
        id:state
    }
}

const mapDispatchToProps = () => {
    return {
    }
}

const Dtodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo)


export default Dtodo