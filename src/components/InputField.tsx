import React, { useEffect, useRef } from 'react';
import "./styles.css";
import { Todo } from '../model';

interface PropsType {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
    editToDo: Todo | null;
}

const InputField: React.FC<PropsType> = ({ todo, setTodo, handleAdd, editToDo }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    }

    useEffect(() => {
        if (editToDo) {
            setTodo(editToDo.todo);
        }
    }, [editToDo]);

    return (
        <form className="input" onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur();
        }}>
            <input
                ref={inputRef}
                type="text"
                className="input__box"
                value={todo}
                placeholder="Add Task"
                onChange={handleChange}
            />
            <button className="input__submit">{editToDo ? 'Update' : 'Add'}</button>
        </form>
    )
}

export default InputField;
