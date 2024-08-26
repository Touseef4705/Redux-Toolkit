import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './Component/TodoList'
import AddTodo from './Component/AddTodo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Todosdetails from './Component/TodosDetails'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<> <AddTodo/> <TodoList /> </>} />
          <Route path=':text' element={<Todosdetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
