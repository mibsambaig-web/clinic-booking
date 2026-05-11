function Login({ onLogin }) {
    return (
        <div>
            <h2>Welcome to Medbook</h2>
            <button onClick={() => onLogin('admin')}>Login as Admin</button>
            <button onClick={() => onLogin('patient')}>Login as Patient</button>
        </div>
    )
}

export default Login