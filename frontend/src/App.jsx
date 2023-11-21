import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import AllEmployees from './pages/AllEmployees'
import AddEmployee from './pages/AddEmployee'
import EmployeeData from './pages/EmployeeData'
import EditEmployee from './pages/EditEmployee'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
      <Navbar />
        <Routes>
          <Route path="/" element={<AllEmployees />} />
          <Route path="/view/:id" element={<EmployeeData />} />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/edit/:id" element={<EditEmployee />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
