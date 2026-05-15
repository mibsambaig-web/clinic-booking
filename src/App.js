import Login from './components/Login/Login'
import Sidebar from './components/Admin/Sidebar'
import AdminDashboard from './components/Admin/AdminDashboard'
import PatientBooking from './components/Patient/PatientBooking'

import { useState } from "react";


function App() {
  const [currentPage, setCurrentPage] = useState('login')

  return (
    <div>
      {currentPage === 'login' && <Login onLogin={ setCurrentPage } />}
      {currentPage === 'admin' && <AdminDashboard onLogout={() => setCurrentPage('login')} />}
      {currentPage === 'patient' && <PatientBooking onLogout={() => setCurrentPage('login')} />}
    </div>
  )
}

export default App