import ReactDOM  from 'react-dom'
import React  from 'react'
// import store from  './stores/Store'
import {createStore} from 'redux'
import {Provider} from  'react-redux'
import PropTypes from 'prop-types'
import {connect} from  'react-redux'

//reducer and store
const todo = (state=initialState ,action)=>{
    switch (action.type){
        case 'test1':
            return(alert(state.input));

        // alert("works!")
        // return state + 1;

        case 'test2':
        // return state - 1;

        default:
            state
    }
}

const initialState={todos:["redux","aha"],input:""}
let store = createStore(todo)

//react Component

class TodoInput extends React.Component{

    onChange(event) {
        return this.props.onChange(event.target.value)
    }


    render(){
        return(
            <input type="text" onChange={this.onChange.bind(this)}/>
        )
    }
}


class TodoList extends React.Component {

    constructor() {
        super();
        this.state = {todos: ["this is 1st", "休息", "whereismy"], input: "",};

    }


    changeText(text) {

        // const value=text
        // return value

    }

    render() {
        const {onAdd} = this.props



        return (
            <div>
                <TodoInput/>
                <h1>0000</h1>
                <button onClick={onAdd}>添加</button>
                <ul>
                    {/*<TodoItem/>*/}
                </ul>
            </div>
        );
    }
}
TodoList.propTypes = {
    onAdd: PropTypes.func.isRequired
}

const TEST = {type: 'test1'}

function mapStateToprops(state) {

    return {
        // value:state

    }

}
function mapDispatchToProps(dispatch) {

    return {
        onAdd: () => dispatch(TEST)
    }

}


const Todo = connect(mapStateToprops, mapDispatchToProps)(TodoList)



ReactDOM.render(
    <Provider store={store}>
        <Todo>{store.getState()}</Todo></Provider>,
    document.getElementById('MRcontext')
);

store.dispatch({type: 'test1'})

