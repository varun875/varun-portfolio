import React from 'react';
import { writerInfo } from '../data/writerInfo';

export function PublicationsBar() {
  return (
    <section className="publications-section">
      <div className="container">
        <div className="publications-header">
          <span className="pub-tagline">PRIMARY PUBLICATION</span>
        </div>

        <div className="pub-grid">
          {writerInfo.featuredPublications.map((pub, idx) => (
            <div key={idx} className="pub-item glass-card">
              <span className="pub-logo-text">{pub.logoText}</span>
              <span className="pub-badge">{pub.badge}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .publications-section {
          padding: 2.5rem 0 4rem 0;
          border-bottom: 1px solid var(--border-color);
        }

        .publications-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .pub-tagline {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .pub-grid {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .pub-item {
          padding: 1.25rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 0.35rem;
          border-radius: var(--radius-md);
        }

        .pub-logo-text {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: 0.02em;
        }

        .pub-badge {
          font-size: 0.7rem;
          color: var(--accent-gold);
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .pub-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 576px) {
          .pub-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
