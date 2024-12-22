import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Content from './pages/Content'

function App() {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Header />
      <Content />
      <Sidebar />
    </div>
  )
}

export default App
