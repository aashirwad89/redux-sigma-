import React from 'react'
import Todo from './components/todo'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <>
    <Provider  store={store}>
 <Todo/>
    </Provider>
   
    </>
  )
}

export default App
