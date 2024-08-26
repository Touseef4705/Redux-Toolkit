import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/Todo/TodoSlice";

function AddTodo() {

    const [Input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        dispatch(addTodo(Input))
        setInput("")
    }

    return (
        <div className="max-w-md mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 p-4 bg-gray-100 rounded-lg shadow-md">
            <input
                type="text"
                placeholder="Enter Note Name"
                className="flex-grow py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                value={Input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                className="py-2 px-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                onClick={handleAddTodo}
            >
                Add Note
            </button>
        </div>

    )
}

export default AddTodo;