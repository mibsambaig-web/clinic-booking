import './Sidebar.css'

function Sidebar({ onLogout, onNavigate }) {
    return (
        <div className='sidebar'>
            <h2>MedBook</h2>
            <nav>
                <button onClick={() => onNavigate('dashboard')}>Dashboard</button>
                <button onClick={() => onNavigate('appointments')}>Appointments</button>
                <button onClick={() => onNavigate('patients')}>Patients</button>
            </nav>
            <button className="logout-btn" onClick={ onLogout }>Logout</button>
        </div>
    )
}

export default Sidebar