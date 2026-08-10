import React from 'react';
import { Feather, ArrowUp, Globe } from 'lucide-react';
import { writerInfo } from '../data/writerInfo';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Footer Main Row */}
        <div className="footer-main-row">
          <div className="footer-brand-col">
            <div className="brand-logo mb-3">
              <div className="brand-icon">
                <Feather size={18} />
              </div>
              <span className="brand-name">{writerInfo.name}</span>
            </div>
            <p className="footer-brand-desc">
              Senior Content Writer at GizmoGeekHub based in {writerInfo.location}. Covering consumer technology, AI innovations, hardware reviews, and software trends.
            </p>
            <div className="social-links">
              <a href={writerInfo.socials.twitter} target="_blank" rel="noreferrer" className="social-link" title="X (Twitter)">
                <span aria-hidden="true" className="social-text">X</span>
              </a>
              <a href={writerInfo.socials.linkedin} target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
                <span aria-hidden="true" className="social-text">in</span>
              </a>
              <a href={writerInfo.socials.gizmogeekhub} target="_blank" rel="noreferrer" className="social-link" title="GizmoGeekHub">
                <Globe size={18} />
              </a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#articles">Articles Archive</a></li>
              <li><a href="#featured">Spotlight Stories</a></li>
              <li><a href="#about">About {writerInfo.name}</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <span>© {new Date().getFullYear()} {writerInfo.name}. All rights reserved.</span>
          <button className="footer-scroll-btn" onClick={scrollToTop}>
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-section {
          padding-top: 4rem;
          padding-bottom: 2.5rem;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
        }

        .footer-main-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 4rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid var(--border-color);
        }

        .footer-brand-col {
          max-width: 500px;
        }

        .footer-brand-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          gap: 0.75rem;
        }

        .social-link {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--bg-input);
          border: 1px solid var(--border-color);
          text-decoration: none;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .social-text {
          line-height: 1;
          font-size: 1rem;
          font-weight: 500;
          text-decoration: none;
        }

        .social-link:hover {
          color: var(--accent-gold);
          border-color: var(--accent-gold);
          transform: translateY(-2px);
        }

        .footer-links-col h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
          letter-spacing: 0.02em;
        }

        .footer-links-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          padding: 0;
          margin: 0;
        }

        .footer-links-col a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.88rem;
          transition: color var(--transition-fast);
        }

        .footer-links-col a:hover {
          color: var(--accent-gold);
        }

        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .footer-scroll-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          cursor: pointer;
          transition: color var(--transition-fast);
        }

        .footer-scroll-btn:hover {
          color: var(--accent-gold);
        }

        @media (max-width: 768px) {
          .footer-main-row {
            flex-direction: column;
            gap: 2.5rem;
          }
          .footer-brand-col {
            max-width: 100%;
          }
          .footer-bottom-bar {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
