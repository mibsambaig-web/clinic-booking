import { useState } from "react";
import './AppointmentsView.css'

function AppointmentsView() {

    const [Filter, setFilter] = useState('all')
    const [appointments, setAppointments] = useState([
        { id: 1, name: 'Ahmed Siddiqui', initials: 'AS', time: '09:00 AM', service: 'General Checkup', status: 'confirmed', date: '9 May 2026', phone: '0300-1234567' },
        { id: 2, name: 'Fatima Malik', initials: 'FM', time: '09:45 AM', service: 'Dental Cleaning', status: 'confirmed', date: '9 May 2026', phone: '0321-9876543' },
        { id: 3, name: 'Bilal Hassan', initials: 'BH', time: '10:30 AM', service: 'Root Canal', status: 'pending', date: '9 May 2026', phone: '0333-5550001' },
        { id: 4, name: 'Sara Qureshi', initials: 'SQ', time: '11:15 AM', service: 'Consultation', status: 'confirmed', date: '9 May 2026', phone: '0311-2223344' },
        { id: 5, name: 'Omar Farooq', initials: 'OF', time: '12:00 PM', service: 'Teeth Whitening', status: 'pending', date: '9 May 2026', phone: '0345-6677889' },
    ])
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
                            <span className={'status-badge ${apt.status}'}>{apt.status}</span>
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