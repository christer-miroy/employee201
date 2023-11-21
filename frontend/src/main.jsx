import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddEmployee from './pages/AddEmployee.jsx'
import EmployeeData from './pages/EmployeeData.jsx'
import EditEmployee from './pages/EditEmployee.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/view/:id" element={<EmployeeData />} />
        <Route path="/edit/:id" element={<EditEmployee />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
