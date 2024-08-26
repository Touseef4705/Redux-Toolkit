import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";

const currentDate = new Date()

const initialState = {
    todos: [{
        id: 1,
        text: "Hello World",
        date: currentDate.getDate(),
        month: currentDate.getMonth() + 1, 
        year: currentDate.getFullYear(),
        Description: "Welcome to my note app. If you want to write a description, you can click the edit button and enter your description. Thank you."
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                date: currentDate.getDate(),
                month: currentDate.getMonth() + 1, 
                year: currentDate.getFullYear(),
                Description: action.payload
            }
            // console.log(todo)
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateDescription: (state, action) => {
            const { id, newDescription } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.Description = newDescription;
            }
        }
    }
})

export const { addTodo, removeTodo, updateDescription  } = todoSlice.actions
export default todoSlice.reducer