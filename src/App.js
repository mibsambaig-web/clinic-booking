import Login from './components/Login/login'
import Sidebar from './components/Admin/Sidebar'
import AdminDashboard from './components/Admin/AdminDashboard'

import { useState } from "react";


function App() {
  const [currentPage, setCurrentPage] = useState('login')

  return (
    <div>
      {currentPage === 'login' && <Login onLogin={ setCurrentPage } />}
      {currentPage === 'admin' && <AdminDashboard onLogout={() => setCurrentPage('login')} />}
      {currentPage === 'patient' && <h1>Patient Booking</h1>}
    </div>
  )
}

export default App