import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'  
import Error404 from './pages/error404'
import Home from './pages/home'
import Form from './pages/form'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path = '/' element = { <Form/> }/>
        <Route exact path = '/home' element = { <Home/> }/>
        <Route path = '*' element= { <Error404/> }/>
      </Routes>
    </div>
  )
}

export default App
