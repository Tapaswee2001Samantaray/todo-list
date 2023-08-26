import React from 'react';
import { Todo } from '../model';
import "./styles.css";

interface PropsType {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    setEditTodo: (toDoItem: Todo) => void;
}

const SingleTodo: React.FC<PropsType> = ({ todo, todos, setTodos, setEditTodo }) => {

    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo));
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
        <>
            <span className="todos__single--text">{todo.todo}</span>
            <div>
                <span>
                    <button
                        className="icon"
                        type="submit"
                        onClick={() => handleDone(todo.id)}
                    >
                        V
                    </button>
                </span>
                <span>
                    <button
                        className="icon"
                        type="submit"
                        onClick={() => handleDelete(todo.id)}
                    >
                        X
                    </button>
                </span>
                <span>
                    <button
                        className="icon"
                        type="submit"
                        onClick={() => setEditTodo(todo)}
                    >
                        Edit
                    </button>
                </span>
            </div>
        </>
    );
};

export default SingleTodo;