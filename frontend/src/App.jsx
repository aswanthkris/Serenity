import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import './App.css'

//Routes
import UserRoutes from './Routes/UserRouter/UserRoutes'
import AdminRoutes from './Routes/AdminRouter/AdminRoutes'
import ExpertRoutes from './Routes/ExpertRouter/ExpertRoutes'



function App() {


  return (

    <div className="App">
      <UserRoutes />
      <AdminRoutes />
      <ExpertRoutes />
    </div >
  )
}

export default App
