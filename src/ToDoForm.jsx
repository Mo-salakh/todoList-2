import { useState } from "react";



function ToDoForm({addTask}) {



    const [text, setText] = useState('')


    const handlerChange =(e) => {
        setText(e.currentTarget.value) //current - более точно определяет событие
    }

    const handlerSubmit = (e) => {
        e.preventDefault() //сбрасывает все события
        addTask(text)
        setText('')
    }

    const handlerPress = (e) => {
      if(e.key === 'Enter') {handlerSubmit(e)}
       
    }



    return(
        <form onClick={handlerSubmit}>
        <input
        type='text'
        value={text}
        onChange={handlerChange}
        onKeyDown={handlerPress}
        placeholder="add task"
        />
        <button>
            +
        </button>
        </form>

    )
}

export default ToDoForm;