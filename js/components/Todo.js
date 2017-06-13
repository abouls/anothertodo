/**
 * Created by sun on 2017/6/10.
 */
import React from 'react'

const Todo = ({ onClick, text }) => (
    <li
        onClick={onClick}

    >
        {text}
    </li>
)



export default Todo