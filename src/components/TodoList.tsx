import React, { Fragment } from 'react';
import { Todo } from '../model';
import "./styles.css";
import SingleTodo from './SingleTodo';

interface PropsType {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    setEditTodo: (toDoItem:Todo) => void;
}

const TodoList: React.FC<PropsType> = ({ todos, setTodos, setEditTodo }) => {
    return (
        <div className="todos">
            {todos.map((todo) => (
                <Fragment key={todo.id}>
                    <SingleTodo
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                        setEditTodo={setEditTodo}
                    />
                    <hr className="todos__hr" />
                </Fragment>
            ))}
        </div>
    );
}

export default TodoList;
