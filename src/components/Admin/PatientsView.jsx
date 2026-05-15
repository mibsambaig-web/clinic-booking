import './PatientsView.css';

function PatientsView() {
    const patients = [
        { id: 1, name: 'Ahmed Siddiqui', initials: 'AS', phone: '0300-1234567', service: 'General Checkup', visits: 4 },
        { id: 2, name: 'Fatima Malik', initials: 'FM', phone: '0321-9876543', service: 'Dental Cleaning', visits: 2 },
        { id: 3, name: 'Bilal Hassan', initials: 'BH', phone: '0333-5550001', service: 'Root Canal', visits: 1 },
        { id: 4, name: 'Sara Qureshi', initials: 'SQ', phone: '0311-2223344', service: 'Consultation', visits: 6 },
        { id: 5, name: 'Omar Farooq', initials: 'OF', phone: '0345-6677889', service: 'Teeth Whitening', visits: 3 },
    ]

    return  (
        <div className='patients-page'>
            <h2 className='page-title'>Patients</h2>
            <p className='page-sub'>Total: {patients.length}</p>

            <div className='patients-grid'>
                {patients.map((patient) => (
                    <div className='patient-card' key={patient.id}>
                        <div className='patient-card-initials'>{patient.initials}</div>
                        <h4 className='patient-card-name'>{patient.name}</h4>
                        <p className='patient-card-detail'>{patient.phone}</p>
                        <p className='patient-card-detail'>{patient.service}</p>
                        <p className='patient-card-visits'>{patient.visits} visits</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PatientsView