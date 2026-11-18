import React, { useState } from 'react';
import { Search, ShoppingBag, Check, Plus, Clock, TrendingUp, Sparkles } from 'lucide-react';

// Preview 1: Online Book Store Application Interface
export function BookstorePreview() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [cartCount, setCartCount] = useState(3);
  const [addedId, setAddedId] = useState(null);

  const books = [
    { id: 1, title: 'Clean Architecture', author: 'Robert C. Martin', price: '₹650', tag: 'Architecture', rating: '4.9' },
    { id: 2, title: 'Designing Data-Intensive Apps', author: 'Martin Kleppmann', price: '₹820', tag: 'Backend', rating: '4.9' },
    { id: 3, title: 'You Don\'t Know JS Yet', author: 'Kyle Simpson', price: '₹540', tag: 'Frontend', rating: '4.8' },
  ];

  const handleAddToCart = (id) => {
    setAddedId(id);
    setCartCount(prev => prev + 1);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <div className="preview-app-container bookstore-app">
      {/* App Header */}
      <div className="preview-top-nav">
        <div className="preview-brand">
          <span className="brand-dot" />
          <span className="brand-name">BookStoreOS</span>
        </div>
        <div className="preview-search-bar">
          <Search size={12} className="preview-search-icon" />
          <span className="preview-search-placeholder">Search 5,000+ books, authors...</span>
        </div>
        <div className="preview-cart-pill">
          <ShoppingBag size={13} />
          <span>{cartCount}</span>
        </div>
      </div>

      {/* Filter Categories */}
      <div className="preview-filter-row">
        {['All', 'Backend', 'Architecture', 'Frontend'].map(cat => (
          <button
            key={cat}
            className={`preview-filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Books Mini Grid */}
      <div className="preview-books-grid">
        {books.map(b => (
          <div key={b.id} className="preview-book-card">
            <div className="book-spine-indicator" />
            <div className="book-details">
              <span className="book-tag">{b.tag}</span>
              <h5 className="book-title">{b.title}</h5>
              <span className="book-author">{b.author}</span>
              <div className="book-footer">
                <span className="book-price">{b.price}</span>
                <button
                  className="book-add-btn"
                  onClick={() => handleAddToCart(b.id)}
                  title="Add to Cart"
                >
                  {addedId === b.id ? <Check size={12} color="#10b981" /> : <Plus size={12} />}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Status Bar */}
      <div className="preview-status-bar">
        <span className="status-live-indicator">
          <span className="status-pulse" />
          <span>Angular v17 Frontend • Node.js API Online</span>
        </span>
        <span className="status-metric">Checkout: &lt;1.8s</span>
      </div>
    </div>
  );
}

// Preview 2: Beauty Parlour & Salon Management Dashboard
export function SalonPreview() {
  const appointments = [
    { time: '10:30 AM', client: 'Priya Sharma', service: 'Hair Spa & Therapy', chair: 'Chair 01', status: 'Confirmed' },
    { time: '11:45 AM', client: 'Ananya Patel', service: 'Bridal Makeover', chair: 'Studio A', status: 'In Progress' },
    { time: '01:15 PM', client: 'Ritu Desai', service: 'Skin Rejuvenation', chair: 'Room 03', status: 'Scheduled' },
  ];

  return (
    <div className="preview-app-container salon-app">
      {/* App Header */}
      <div className="preview-top-nav">
        <div className="preview-brand">
          <Sparkles size={13} color="#f59e0b" />
          <span className="brand-name">GlowDesk Salon OS</span>
        </div>
        <div className="salon-header-badge">
          <span>Today: 18 Bookings</span>
        </div>
      </div>

      {/* KPI Micro Row */}
      <div className="salon-kpi-row">
        <div className="salon-kpi-chip">
          <span className="kpi-num">6 / 6</span>
          <span className="kpi-label">Active Stylists</span>
        </div>
        <div className="salon-kpi-chip">
          <span className="kpi-num">100%</span>
          <span className="kpi-label">Digitized Logs</span>
        </div>
        <div className="salon-kpi-chip">
          <span className="kpi-num">₹18,400</span>
          <span className="kpi-label">Day Revenue</span>
        </div>
      </div>

      {/* Appointment Schedule List */}
      <div className="salon-queue-list">
        {appointments.map((apt, idx) => (
          <div key={idx} className="salon-queue-item">
            <div className="queue-time">
              <Clock size={11} />
              <span>{apt.time}</span>
            </div>
            <div className="queue-info">
              <span className="queue-client">{apt.client}</span>
              <span className="queue-service">{apt.service} • {apt.chair}</span>
            </div>
            <span className={`queue-badge badge-${apt.status.toLowerCase().replace(' ', '-')}`}>
              {apt.status}
            </span>
          </div>
        ))}
      </div>

      {/* Status Bar */}
      <div className="preview-status-bar">
        <span className="status-live-indicator">
          <span className="status-pulse" />
          <span>MySQL Relational DB • Role Guards Active</span>
        </span>
        <button className="preview-mini-action-btn">+ New Booking</button>
      </div>
    </div>
  );
}

// Preview 3: Tech-Fusion React CRUD Platform Data Grid
export function CrudPreview() {
  const [searchTerm, setSearchTerm] = useState('');
  const records = [
    { name: 'Kartik Bhure', role: 'Full Stack MERN Lead', dept: 'Engineering', status: 'Active', latency: '98ms' },
    { name: 'Sneha Patel', role: 'Frontend React Dev', dept: 'Product UI', status: 'Active', latency: '110ms' },
    { name: 'Arjun Mehta', role: 'Database Architect', dept: 'Backend Ops', status: 'Verified', latency: '115ms' },
  ];

  return (
    <div className="preview-app-container crud-app">
      {/* App Header */}
      <div className="preview-top-nav">
        <div className="preview-brand">
          <span className="brand-dot" style={{ backgroundColor: '#38bdf8' }} />
          <span className="brand-name">TechFusion CRUD Suite</span>
        </div>
        <span className="crud-badge">Vite + React 19</span>
      </div>

      {/* Controls Bar */}
      <div className="crud-controls-bar">
        <div className="preview-search-bar" style={{ flex: 1, maxWidth: '240px' }}>
          <Search size={11} className="preview-search-icon" />
          <input
            type="text"
            placeholder="Search records..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="crud-input-clean"
          />
        </div>
        <div className="crud-stats-pill">
          <span>Records: 1,420</span>
        </div>
      </div>

      {/* Data Table */}
      <div className="crud-table-wrapper">
        <div className="crud-table-header">
          <span>Name / Role</span>
          <span>Dept</span>
          <span>Status</span>
          <span>Latency</span>
        </div>
        {records.map((r, i) => (
          <div key={i} className="crud-table-row">
            <div className="crud-col-user">
              <span className="crud-user-name">{r.name}</span>
              <span className="crud-user-role">{r.role}</span>
            </div>
            <span className="crud-dept">{r.dept}</span>
            <span className="crud-status-badge">{r.status}</span>
            <span className="crud-latency">{r.latency}</span>
          </div>
        ))}
      </div>

      {/* Status Bar */}
      <div className="preview-status-bar">
        <span className="status-live-indicator">
          <span className="status-pulse" />
          <span>Custom React Hooks • Optimistic CRUD State</span>
        </span>
        <span className="status-metric">Lighthouse 100/100</span>
      </div>
    </div>
  );
}

// Preview 4: MERN SaaS Cloud Analytics
export function SaasPreview() {
  return (
    <div className="preview-app-container saas-app">
      {/* App Header */}
      <div className="preview-top-nav">
        <div className="preview-brand">
          <TrendingUp size={13} color="#38bdf8" />
          <span className="brand-name">MERN Cloud Metrics</span>
        </div>
        <div className="saas-badge-live">
          <span className="pulse-cyan" />
          <span>Realtime Stream</span>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="saas-metrics-row">
        <div className="saas-stat-card">
          <span className="saas-stat-label">Monthly Run Rate</span>
          <span className="saas-stat-val">$28,450</span>
          <span className="saas-stat-trend">+14.2% MoM</span>
        </div>
        <div className="saas-stat-card">
          <span className="saas-stat-label">Active Users</span>
          <span className="saas-stat-val">12,840</span>
          <span className="saas-stat-trend">+6.8% today</span>
        </div>
      </div>

      {/* Sparkline Visual Chart */}
      <div className="saas-chart-wrapper">
        <div className="saas-chart-header">
          <span>API Request Throughput</span>
          <span className="chart-peak">Peak 4,200 req/s</span>
        </div>
        <svg viewBox="0 0 340 70" fill="none" className="saas-sparkline-svg">
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path
            d="M 0,55 Q 35,45 70,48 T 140,30 T 210,38 T 280,18 T 340,12 L 340,70 L 0,70 Z"
            fill="url(#chartGrad)"
          />
          <path
            d="M 0,55 Q 35,45 70,48 T 140,30 T 210,38 T 280,18 T 340,12"
            stroke="#38bdf8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="340" cy="12" r="4" fill="#38bdf8" />
        </svg>
      </div>

      {/* Status Bar */}
      <div className="preview-status-bar">
        <span className="status-live-indicator">
          <span className="status-pulse" />
          <span>MongoDB Aggregation • 99.98% System Uptime</span>
        </span>
        <span className="status-metric">JWT Auth</span>
      </div>
    </div>
  );
}

// Master preview selector based on project ID
export default function ProjectDevicePreview({ projectId }) {
  switch (projectId) {
    case 'online-book-store':
      return <BookstorePreview />;
    case 'beauty-parlour-system':
      return <SalonPreview />;
    case 'tech-fusion-crud-platform':
      return <CrudPreview />;
    case 'mern-saas-dashboard':
    default:
      return <SaasPreview />;
  }
}

