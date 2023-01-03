import React, {useState} from 'react';
import uuid from 'uuid'
import {Row , Col, Button , FormControl} from 'react-bootstrap'
import s from './AddTodo.module.css'


const AddTodo = ({todo , setTodo}) => {
    const [value, setValue] = useState('')

    function saveTodo() {
setTodo(
    [...todo, {
        id: uuid,
        title: value,
        status: true
    }]
)
        setValue('')
    }
    return (
        <Row>
        < Col className={s.addTodoForm}>
        <FormControl placeholder='Enter a task' value={value} onChange={(e)=>setValue(e.target.value) }/>
        <Button onClick={saveTodo} className={s.btn}>Save</Button>
        < /Col>
    </Row>
)
    ;
};

export default AddTodo;