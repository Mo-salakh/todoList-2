


function ToDo({todo, toggleTask, removedTask}) {
    return(
        <div key={todo.id} className="todo-item">
            <div className={todo.complete ? 'item-text strike' : 'item-text'} onClick={toggleTask(todo.id)}>
                {todo.task}
            </div>

            <div onClick={removedTask(todo.id)}>
                X
            </div>
        </div>
    )
}

export default ToDo;