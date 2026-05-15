
import './DashboardView.css'
import { useState } from 'react'

function DashboardView() {
    const [ appointments, setAppointments ] = useState ([
        { id: 1, name: 'Ahmed Siddiqui', initials: 'AS', time: '09:00 AM', service: 'General Checkup', status: 'confirmed', date: '9 May 2026', phone: '0300-1234567' },
        { id: 2, name: 'Fatima Malik', initials: 'FM', time: '09:45 AM', service: 'Dental Cleaning', status: 'confirmed', date: '9 May 2026', phone: '0321-9876543' },
        { id: 3, name: 'Bilal Hassan', initials: 'BH', time: '10:30 AM', service: 'Root Canal', status: 'pending', date: '9 May 2026', phone: '0333-5550001' },
        { id: 4, name: 'Sara Qureshi', initials: 'SQ', time: '11:15 AM', service: 'Consultation', status: 'confirmed', date: '9 May 2026', phone: '0311-2223344' },
        { id: 5, name: 'Omar Farooq', initials: 'OF', time: '12:00 PM', service: 'Teeth Whitening', status: 'pending', date: '9 May 2026', phone: '0345-6677889' },
      ])

      function handleConfirm(id) {
        setAppointments(appointments.map(apt => 
            apt.id === id ? { ...apt, status: 'confirmed' } : apt
        ))
      }

      function handleCancel(id) {
        setAppointments(appointments.filter(apt => apt.id !== id
        ))
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