import { useState } from 'react'
import Todo from './components/ToDo'
import './App.css';
import ToDoForm from './components/ToDoForm';
import Search from './components/Search';


function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Estudo de React',
      category: 'Estudos',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'Criar CRUD no projeto',
      category: 'Trabalho',
      isCompleted: true,
    }
  ])

  const [search, setSearch] = useState("");


  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false
    },
    ];

    setTodos(newTodos)
  }

  const removeTodo = (id)=>{
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) => todo.id !== id? todo : null);
    setTodos(filteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <div className="todo-list">
        {todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
        .map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
      </div>
      <ToDoForm addTodo={addTodo} />
    </div>
  );
}

export default App
