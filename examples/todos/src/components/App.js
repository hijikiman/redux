import React from 'react'
import Footer from './Footer'
import Footer2 from './Footer2'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <Footer2 />
  </div>
)

export default App
