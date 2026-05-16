
import { useState, useEffect } from 'react'
import './DashboardView.css'


function DashboardView() {
    const [ appointments, setAppointments ] = useState ([])

    useEffect(() => {
        fetch('https://clinic-backend-production-276e.up.railway.app/appointments')
        .then(res => res.json())
        .then(data => setAppointments(data))
    }, [])

      function handleConfirm(id) {
        fetch(`https://clinic-backend-production-276e.up.railway.app/appointments/${id}/confirm`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(updated => {
            setAppointments(appointments.map(apt =>
                apt.id === id ? updated : apt
            ))
        })
      }

      function handleCancel(id) {
        fetch(`https://clinic-backend-production-276e.up.railway.app/appointments/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            setAppointments(appointments.filter(apt => apt.id !== id))
        })
      }
    
    const stats = [
    { label: "Todays Appointment", value: '8', sub: '3 confirmed · 2 pending' },
    { label: 'Total Patients', value: '142', sub: '+4 this week' },
    { label: 'Pending Review', value: '3', sub: 'Awaiting confirmation' },
    { label: 'Revenue (May)', value: "Rs 84k", sub: '+12% vs last month' },
    ]

    return (
        <div>
            <h2 className='page-title'>Good Morning, Dr. Asqa </h2>
            <p className='page-title-sub'>Here's your clinic overview</p>

            <div className="stats-grid">
                {stats.map((stat, i) => (
                    <div className="stat-card" key={i}>
                        <p className="stat-label">{stat.label}</p>
                        <h3 className="stat-value">{stat.value}</h3>
                        <p className="stat-sub">{stat.sub}</p>
                    </div>
                ))}
            </div>

            <div className='appointment-section'>
                <h3 className='section-title'>Todays appointment</h3>

                <div className='appointment-table'>
                    <div className='table-header'>
                        <span>Patient</span>
                        <span>Time</span>
                        <span>Service</span>
                        <span>Status</span>
                        <span>Action</span>
                    </div>

                    {appointments.map((apt) => (
                        <div className='table-row' key={apt.id}>
                            <div className='patient-info'>
                                <div className='patient-initials'>{apt.initials}</div>
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
        </div>
    )
}

export default DashboardView