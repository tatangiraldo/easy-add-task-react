import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { Todo } from './components/Todo'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Todo />
  </React.StrictMode>,
)
