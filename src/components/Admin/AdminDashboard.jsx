import './AdminDashboard.css'
import { useState } from 'react'
import Sidebar from './Sidebar'
import DashboardView from './DashboardView'
import AppointmentsView from './AppointmentsView'
import PatientsView from './PatientsView'


function AdminDashboard ({ onLogout }) {
    const [currentView, setCurrentView] = useState('dashboard')
    return (
        <div className="dashboard-layout">
            <Sidebar onLogout={onLogout} onNavigate={setCurrentView} />
            <main className='main-content'>
                {currentView === 'dashboard' && <DashboardView />}
                {currentView === 'appointments' && <AppointmentsView />}
                {currentView === 'patients' && <PatientsView />}
            </main>
        </div>
    )
}

export default AdminDashboard