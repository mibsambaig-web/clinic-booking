import './DashboardView.css'

function DashboardView() {
    const stats = [
    { label: "Todays Appointment", value: '8', sub: '3 confirmed · 2 pending' },
    { label: 'Total Patinents', value: '142', sub: '+4 this week' },
    { label: 'Pending Review', value: '3', sub: 'Awaiting confirmation' },
    { label: 'Revenue (May)', value: "Rs 84k", sub: '+12% vs last month' },
    ]

    return (
        <div>
            <h2>Good Morning, Dr. Asqa </h2>
            <p>Here's ypur clinic overview</p>

            <div className="stats-grid">
                {stats.map((stat, i) => (
                    <div className="stat-card" key={i}>
                        <p className="stat-label">{stat.label}</p>
                        <h3 className="stat-value">{stat.value}</h3>
                        <p className="stat-sub">{stat.sub}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DashboardView