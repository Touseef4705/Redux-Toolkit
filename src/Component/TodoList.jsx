import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../Features/Todo/TodoSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function TodoList() {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch();
    // console.log(todos)
    return (
        <div className="max-w-md mx-auto mt-3 bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-center">Note List</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className="flex justify-between items-center bg-gray-100 p-2 rounded-md mb-2">
                    <div className="flex flex-col flex-grow">
                      <span  className="text-lg text-start font-semibold">
                        <span>{todo.text}</span>
                      </span>
                      <span className="text-sm text-start text-gray-600">
                        Date: {todo.date}:{todo.month}:{todo.year}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600">
                        <Link to={`/${todo.text}`}>
                            <FontAwesomeIcon icon={faEdit} />
                        </Link>
                      </button>
                      <button onClick={() => dispatch(removeTodo(todo.id))} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </div>
                  </li>
                  

                ))}
            </ul>
        </div>

    )
}

export default TodoList