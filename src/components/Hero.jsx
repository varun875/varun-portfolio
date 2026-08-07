import React from 'react';
import { ArrowRight, FileText, Award, Eye, Globe, Sparkles } from 'lucide-react';
import { writerInfo } from '../data/writerInfo';

export function Hero({ onOpenContact, onExploreArticles }) {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Main Hero Content */}
          <div className="hero-content">
            <div className="badge badge-gold hero-badge">
              <Sparkles size={13} />
              <span>Senior Content Writer @ GizmoGeekHub</span>
            </div>

            <h1 className="hero-title">
              Crafting Exceptional <span className="title-highlight">Tech Articles</span> & In-Depth Gadget Coverage.
            </h1>

            <p className="hero-tagline">
              {writerInfo.heroTagline}
            </p>

            <p className="hero-bio-snippet">
              {writerInfo.bio}
            </p>

            <div className="hero-cta-group">
              <button className="btn btn-accent" onClick={onExploreArticles}>
                <span>Explore Articles</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Quick Stats Grid */}
            <div className="hero-stats-grid">
              {writerInfo.stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="hero-visual">
            <div className="hero-card-wrapper glow-effect">
              <div className="glass-card hero-author-card">
                <div className="author-image-wrapper">
                  <img 
                    src={writerInfo.avatar} 
                    alt={writerInfo.name} 
                    className="author-avatar-img"
                  />
                  <div className="verified-badge" title="Verified Writer">
                    ✓
                  </div>
                </div>

                <div className="author-details">
                  <h3 className="author-name">{writerInfo.name}</h3>
                  <p className="author-title">{writerInfo.title}</p>
                  
                  <div className="author-location">
                    <Globe size={14} />
                    <span>Based in {writerInfo.location}</span>
                  </div>

                  <div className="featured-in-mini">
                    <span className="mini-label">Lead Publication:</span>
                    <div className="outlet-pills">
                      <span className="outlet-pill">GizmoGeekHub</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 8.5rem;
          padding-bottom: 5rem;
          position: relative;
          overflow: hidden;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.85fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-badge {
          margin-bottom: 1.5rem;
        }

        .hero-title {
          font-size: 3.2rem;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
        }

        .title-highlight {
          color: var(--accent-gold);
          font-style: italic;
          font-family: var(--font-heading);
        }

        .hero-tagline {
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.5;
          margin-bottom: 1rem;
          border-left: 3px solid var(--accent-gold);
          padding-left: 1rem;
        }

        .hero-bio-snippet {
          font-size: 1rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin-bottom: 2rem;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
        }

        .stat-card {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.1;
        }

        .stat-label {
          font-size: 0.78rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-top: 0.25rem;
        }

        .hero-visual {
          position: relative;
        }

        .hero-author-card {
          padding: 2.25rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .author-image-wrapper {
          position: relative;
          margin-bottom: 1.5rem;
        }

        .author-avatar-img {
          width: 140px;
          height: 140px;
          border-radius: var(--radius-full);
          object-fit: cover;
          border: 3px solid var(--accent-gold);
          box-shadow: var(--shadow-md);
        }

        .verified-badge {
          position: absolute;
          bottom: 6px;
          right: 6px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #3b82f6;
          color: white;
          font-size: 0.85rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--bg-card);
        }

        .author-name {
          font-size: 1.6rem;
          margin-bottom: 0.25rem;
          color: var(--text-primary);
        }

        .author-title {
          font-size: 0.92rem;
          color: var(--accent-gold);
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .author-location {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .featured-in-mini {
          width: 100%;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-color);
        }

        .mini-label {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.75rem;
        }

        .outlet-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }

        .outlet-pill {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.3rem 0.7rem;
          border-radius: var(--radius-full);
          background: var(--bg-secondary);
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
        }

        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .hero-section {
            padding-top: 6.5rem;
            padding-bottom: 3.5rem;
          }
          .hero-title {
            font-size: 2rem;
          }
          .hero-tagline {
            font-size: 1.05rem;
          }
          .hero-bio-snippet {
            font-size: 0.92rem;
            margin-bottom: 1.5rem;
          }
          .hero-cta-group {
            flex-direction: column;
            width: 100%;
          }
          .hero-cta-group .btn {
            width: 100%;
            justify-content: center;
          }
          .hero-author-card {
            padding: 1.5rem;
          }
          .author-avatar-img {
            width: 110px;
            height: 110px;
          }
        }
      `}</style>
    </section>
  );
}
