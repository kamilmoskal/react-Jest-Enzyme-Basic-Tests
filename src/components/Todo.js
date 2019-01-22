import React from 'react';

const Todo = ({todos, deleteTodo}) => {

    const todoList = todos && todos.length ? (
        todos.map(each => {
            return (
                <div className="collection-item" key={each.id}>
                    <p onClick={() => {deleteTodo(each.id)}}>{each.content}</p>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todo's left!! lul</p>
    )
    
    return (
        <div className="todo-list collection">
            { todoList }
        </div>
    )
}
export default Todo;