import './AdminDashboard.css'
import { useState } from 'react'
import Sidebar from './Sidebar'
import DashboardView from './DashboardView'


function AdminDashboard ({ onLogout }) {
    const [currentView, setCurrentView] = useState('dashboard')
    return (
        <div className="dashboard-layout">
            <Sidebar onLogout={onLogout} onNavigate={setCurrentView} />
            <main className='main-content'>
                {currentView === 'dashboard' && <DashboardView />}
                {currentView === 'appointments' && <h1>Appointments View</h1>}
                {currentView === 'patients' && <h1>Patients View</h1>}
            </main>
        </div>
    )
}

export default AdminDashboard