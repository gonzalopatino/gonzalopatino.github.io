import { NavLink, Outlet } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
  return (
    <div className="site-container">
      {/* Header */}
      <header className="site-header">
        <h1 className="site-title">Gonzalo Patino</h1>
        <p className="site-subtitle">Computer Science ePortfolio – SNHU CS-499</p>
        
        {/* Navigation */}
        <nav className="site-nav">
          <div className="nav-row nav-row--primary">
            <NavLink to="/" end>Home</NavLink>
            <span className="nav-divider">|</span>
            <NavLink to="/assessment">Self-Assessment</NavLink>
            <span className="nav-divider">|</span>
            <NavLink to="/code-review">Code Review</NavLink>
          </div>
          <div className="nav-row nav-row--secondary">
            <NavLink to="/software-engineering">Software Engineering</NavLink>
            <span className="nav-divider">|</span>
            <NavLink to="/algorithms">Algorithms</NavLink>
            <span className="nav-divider">|</span>
            <NavLink to="/database">Databases</NavLink>
            <span className="nav-divider">|</span>
            <NavLink to="/original-code">Original Code</NavLink>
            <span className="nav-divider">|</span>
            <NavLink to="/enhanced-code">Enhanced Code</NavLink>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="site-main">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <p>© 2025 Gonzalo Patino | SNHU CS-499 Computer Science Capstone</p>
      </footer>
    </div>
  );
}
