import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import AddTodo from "./Components/AddTodo/AddTodo";
import TodoList from "./Components/TodoList/TodoList";
import {useState} from "react";
import {Container} from 'react-bootstrap'

function App() {
  const [todo, setTodo] = useState([])

  return (
    <Container>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />

    </Container>
  );
}

export default App;
