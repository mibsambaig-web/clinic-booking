import { useState } from 'react'
import './PatientBooking.css'

function PatientBooking({ onLogout }) {
    const [step, setStep] = useState(1)
    const [selected, setSelected] = useState({
        service: '',
        date: '',
        name: '',
        phone: ''
    })

    const services = [
        'General Checkup',
        'Dental Cleaning',
        'Root Canal',
        'Consultation',
        'Teeth Whitening'
    ]

    const dates = [
        'Mon, 19 May 2026',
        'Tue, 20 May 2026',
        'Wed, 21 May 2026',
        'Thu, 22 May 2026',
        'Fri, 23 May 2026',
    ]

    return (
        <div className='booking-page'>
            <div className='booking-card'>

                <div className='booking-header'>
                    <h2 className='booking-title'>MedBook</h2>
                    <button className='logout-btn' onClick={onLogout}>Logout</button>
                </div>

                <div className='step-indicator'>
                    {[1, 2, 3, 4].map((s) => (
                        <div key={s} className={`step-dot ${step >= s ? 'active' : ''}`}></div>
                    ))}
                </div>

                {step === 1 && (
                    <div>
                        <h3 className='step-title'>Select a Service</h3>
                        <div className='services-list'>
                            {services.map((service) => (
                                <div
                                    key={service}
                                    className={`service-item ${selected.service === service ? 'active' : ''}`}
                                    onClick={() => setSelected({ ...selected, service })}
                                >
                                    {service}
                                </div>
                            ))}
                        </div>
                        <button className='next-btn' onClick={() => selected.service && setStep(2)}>Next</button>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <h3 className='step-title'>Pick a Date</h3>
                        <div className='dates-list'>
                            {dates.map((date) => (
                                <div
                                    key={date}
                                    className={`date-item ${selected.date === date ? 'active' : ''}`}
                                    onClick={() => setSelected({ ...selected, date })}
                                >
                                    {date}
                                </div>
                            ))}
                        </div>
                        <div className='nav-buttons'>
                            <button className='back-btn' onClick={() => setStep(1)}>Back</button>
                            <button className='next-btn' onClick={() => selected.date && setStep(3)}>Next</button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <h3 className='step-title'>Your Details</h3>
                        <div className='details-form'>
                            <input
                                className='booking-input'
                                type='text'
                                placeholder='Full Name'
                                value={selected.name}
                                onChange={(e) => setSelected({ ...selected, name: e.target.value })}
                            />
                            <input
                                className='booking-input'
                                type='text'
                                placeholder='Phone Number'
                                value={selected.phone}
                                onChange={(e) => setSelected({ ...selected, phone: e.target.value })}
                            />
                        </div>
                        <div className='nav-buttons'>
                            <button className='back-btn' onClick={() => setStep(2)}>Back</button>
                            <button className='next-btn' onClick={async () => {
                                if (selected.name && selected.phone) {
                                    try {
                                        await fetch('https://clinic-backend-production-276e.up.railway.app/appointments', {
                                            method: 'POST',
                                            headers: { 'Content-Type': 'application/json' },
                                            body: JSON.stringify({
                                                name: selected.name,
                                                phone: selected.phone,
                                                service: selected.service,
                                                date: selected.date,

                                            })
                                        })
                                    } catch (err) {
                                        console.error(err)
                                    }
                                    setStep(4)
                                }
                            }}>Next</button>
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div className='confirm-screen'>
                        <div className='confirm-icon'>✓</div>
                        <h3 className='confirm-title'>Booking Confirmed</h3>
                        <div className='confirm-details'>
                            <p><span>Service</span><strong>{selected.service}</strong></p>
                            <p><span>Date</span><strong>{selected.date}</strong></p>
                            <p><span>Name</span><strong>{selected.name}</strong></p>
                            <p><span>Phone</span><strong>{selected.phone}</strong></p>
                        </div>
                        <button className='next-btn' onClick={onLogout}>Done</button>
                    </div>
                )}

            </div>
        </div>
    )
}

export default PatientBooking