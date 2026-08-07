import React, { useState, useEffect } from 'react';
import { Feather, Search, Moon, Sun, Menu, X, BookOpen, Send } from 'lucide-react';
import { writerInfo } from '../data/writerInfo';

export function Navbar({ theme, toggleTheme, onOpenContact, searchQuery, setSearchQuery, isSearching, setIsSearching }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#" className="brand-logo">
          <div className="brand-icon">
            <Feather size={20} />
          </div>
          <div className="brand-text">
            <span className="brand-name">{writerInfo.name}</span>
            <span className="brand-sub">Senior Content Writer @ GizmoGeekHub</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          <a href="#articles" className="nav-link">Articles</a>
          <a href="#featured" className="nav-link">Spotlight</a>
          <a href="#about" className="nav-link">About</a>
        </nav>

        {/* Action Controls */}
        <div className="navbar-actions">
          {/* Quick Search Toggle */}
          <div className={`search-input-wrapper ${isSearching ? 'active' : ''}`}>
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search by topic, title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearching(true)}
              className="search-input"
            />
            {searchQuery && (
              <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
                <X size={14} />
              </button>
            )}
          </div>

          {/* Theme Toggle Button */}
          <button className="theme-toggle-btn" onClick={toggleTheme} title="Toggle Dark/Light Mode">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Contact CTA */}
          <button className="btn btn-accent desktop-only" onClick={onOpenContact}>
            <Send size={15} />
            <span>Contact</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button className="mobile-toggle-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav">
            <a href="#articles" onClick={() => setMobileMenuOpen(false)}>Articles</a>
            <a href="#featured" onClick={() => setMobileMenuOpen(false)}>Spotlight</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About {writerInfo.name}</a>
            <button className="btn btn-accent w-full mt-4" onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}>
              <Send size={16} />
              <span>Contact</span>
            </button>
          </nav>
        </div>
      )}
      
      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1.25rem 0;
          transition: all var(--transition-normal);
          background: transparent;
        }

        .navbar-header.scrolled {
          padding: 0.85rem 0;
          background: var(--bg-glass);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: var(--text-primary);
        }

        .brand-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--accent-gold-glow);
          color: var(--accent-gold);
          border: 1px solid rgba(251, 191, 36, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          line-height: 1.1;
        }

        .brand-sub {
          font-size: 0.72rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-top: 2px;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.92rem;
          font-weight: 500;
          transition: color var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--accent-gold);
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .search-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          background: var(--bg-input);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          padding: 0.4rem 0.85rem;
          width: 220px;
          transition: all var(--transition-fast);
        }

        .search-input-wrapper:focus-within,
        .search-input-wrapper.active {
          width: 280px;
          border-color: var(--accent-gold);
          box-shadow: 0 0 0 3px var(--accent-gold-glow);
        }

        .search-icon {
          color: var(--text-muted);
          margin-right: 0.4rem;
          flex-shrink: 0;
        }

        .search-input {
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-size: 0.85rem;
          width: 100%;
          font-family: var(--font-sans);
        }

        .clear-search-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 2px;
        }

        .clear-search-btn:hover {
          color: var(--text-primary);
        }

        .theme-toggle-btn,
        .mobile-toggle-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-input);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .theme-toggle-btn:hover,
        .mobile-toggle-btn:hover {
          color: var(--accent-gold);
          border-color: var(--accent-gold);
          background: var(--accent-gold-glow);
          transform: translateY(-2px);
        }

        .mobile-toggle-btn {
          display: none;
        }

        .mobile-drawer {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
          padding: 1.5rem;
          box-shadow: var(--shadow-lg);
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .mobile-nav a {
          color: var(--text-primary);
          text-decoration: none;
          font-size: 1.05rem;
          font-weight: 500;
        }

        @media (max-width: 992px) {
          .desktop-nav, .btn-hire-desktop {
            display: none;
          }
          .search-input-wrapper {
            width: 160px;
          }
          .search-input-wrapper:focus-within {
            width: 200px;
          }
          .mobile-toggle-btn {
            display: inline-flex;
          }
        }

        @media (max-width: 576px) {
          .search-input-wrapper {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
