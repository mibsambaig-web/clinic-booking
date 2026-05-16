import { useState, useEffect } from 'react'
import './AppointmentsView.css'

function AppointmentsView() {

    const [Filter, setFilter] = useState('all')
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        fetch('https://clinic-backend-production-276e.up.railway.app/appointments')
        .then(res => res.json())
        .then(data => setAppointments(data))
    }, [])
    const filtered = Filter=== 'all' ? appointments : appointments.filter(apt => apt.status === Filter)

    function handleConfirm(id) {
        setAppointments(appointments.map(apt =>
            apt.id === id ? { ...apt, status: 'confirmed' } : apt
        ))
    }

    function handleCancel(id) {
        setAppointments(appointments.filter(apt => apt.id !== id))
    }
    return (
        <div className="appointments-page">
            <h2 className="page-title">Appointments</h2>

            <div className="filter-buttons">
                <button className={Filter === 'all' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('all')}>All</button>
                <button className={Filter === 'confirmed' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('confirmed')}>Confirmed</button>
                <button className={Filter === 'pending' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('pending')}>Pending</button>
            </div>

            <div className="appointments-table">
                <div className="table-header">
                    <span>Patient</span>
                    <span>Time</span>
                    <span>Service</span>
                    <span>Status</span>
                    <span>Action</span>
                </div>

                {filtered.map((apt) => (
                    <div className="table-row" key={apt.id}>
                        <div className="patient-info">
                            <div className="patient-initials">{apt.initials}</div>
                            <span>{apt.name}</span>
                            </div>
                            <span>{apt.time}</span>
                            <span>{apt.service}</span>
                            <span className={`status-badge ${apt.status}`}>{apt.status}</span>
                            <div className="action-buttons">
                            <button className='btn-confirm' onClick={() => handleConfirm(apt.id)}>Confirm</button>
                            <button className='btn-cancel' onClick={() => handleCancel(apt.id)}>Cancel</button>
                        </div>
                    </div>    
                ))}

            </div>
        
        </div>

    )
}

export default AppointmentsView