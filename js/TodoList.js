import  React from  'react'
import {connect} from  'react-redux'
import PropTypes from 'prop-types'


class TodoList extends React.Component {


    render() {
         const {value,onAdd} = this.props

        return (
            <div>
                <h1>0000</h1>
                <button onClick={onAdd}>添加</button>
            </div>
        );
    }
}
TodoList.propTypes = {
    onAdd: PropTypes.func.isRequired
}

const TEST = {type: 'test1'}

function mapStateToprops() {

    return {}

}
function mapDispatchToProps(dispatch) {

    return {
        onAdd: () => dispatch(TEST)
    }

}


const Todo = connect(mapStateToprops, mapDispatchToProps)(TodoList)

export default TodoList
