import { useState } from 'react';
import './App.css';
import { Todo } from './model';
import InputField from './components/InputField';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editToDo, setEditTodo] = useState<Todo | null>(null);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      const _oldData = [...todos];
      if (editToDo?.id) {
        const findItem = _oldData.find(each => each.id === editToDo.id);
        console.log(findItem)
        if (findItem) {
          findItem.todo = todo;
        }
      } else {
        _oldData.push({ id: Date.now(), todo: todo, isDone: false });
      }
      setTodos(_oldData);
      setTodo("");
      setEditTodo(null);
    }
  }

  return (
    <div className="App">
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} editToDo={editToDo} />
      <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
    </div>
  );
}

export default App;
