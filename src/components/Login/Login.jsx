import { useState } from "react";
import './Login.css'
function Login({ onLogin }) {
    const [tab, setTab] = useState('admin')
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    function handleLogin() {
        if (tab === 'admin') {
            if (id === 'admin001' && password === 'admin123') {
                onLogin('admin')
            } else {
                setError('Invalid credentials')
            }
        } else {
            if (id === 'PT-0042' && password === 'patient123') {
                onLogin('patient')
            } else {
                setError('Invalid credentials')
            }
        }
    }

    return (
        <div className='login-page'>
            <div className='login-card'>
                <h2 className='login-title'>MedBook</h2>
                <p className='login-sub'>Clinic Management System</p>

                <div className='login-tabs'>
                    <button className={tab === 'admin' ? 'tab active' : 'tab'} onClick={() => { setTab('admin'); setError('') }}>Admin</button>
                    <button className={tab === 'patient' ? 'tab active' : 'tab'} onClick={() => { setTab('patient'); setError('') }}>Patient</button>
                </div>

                <div className='login-form'>
                    <input
                        className='login-input'
                        type='text'
                        placeholder={tab === 'admin' ? 'Admin ID' : 'Patient ID'}
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                    <input
                        className='login-input'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && <p className='login-error'>{error}</p>}

                    <button className='login-btn' onClick={handleLogin}>Login</button>
                </div>

                <div className='demo-credentials'>
                    <p className='demo-title'>Demo Credentials</p>
                    {tab === 'admin' ? (
                        <p className='demo-detail'>ID: admin001 &nbsp;|&nbsp; Password: admin123</p>
                    ) : (
                        <p className='demo-detail'>ID: PT-0042 &nbsp;|&nbsp; Password: patient123</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Login