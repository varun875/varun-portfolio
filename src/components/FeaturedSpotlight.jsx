import React from 'react';
import { Sparkles, ArrowRight, Award, Eye, Calendar, Clock } from 'lucide-react';

export function FeaturedSpotlight({ articles, onSelectArticle }) {
  const featuredArticles = [...articles].filter(a => a.featured).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (featuredArticles.length === 0) return null;
  const lead = featuredArticles[0];

  return (
    <section id="featured" className="featured-section">
      <div className="container">
        <div className="badge badge-gold mb-3">
          <Award size={13} />
          <span>EDITORIAL SPOTLIGHT</span>
        </div>

        <div className="glass-card spotlight-card">
          <div className="spotlight-grid">
            <div className="spotlight-content">
              <div className="spotlight-meta">
                <span className="pub-badge-tag">{lead.publication}</span>
                <span className="meta-sep">•</span>
                <span className="meta-item"><Calendar size={13} /> {lead.date}</span>
                <span className="meta-sep">•</span>
                <span className="meta-item"><Clock size={13} /> {lead.readTime}</span>
                <span className="meta-sep">•</span>
                <span className="meta-item"><Eye size={13} /> {lead.views} Reads</span>
              </div>

              <h2 className="spotlight-title" onClick={() => onSelectArticle(lead)}>
                {lead.title}
              </h2>

              <p className="spotlight-subtitle">
                {lead.subtitle}
              </p>

              <p className="spotlight-excerpt">
                {lead.excerpt}
              </p>

              <div className="spotlight-tags">
                {lead.tags.map((tag, i) => (
                  <span key={i} className="spotlight-tag">#{tag}</span>
                ))}
              </div>

              <div className="spotlight-actions">
                <button className="btn btn-accent" onClick={() => onSelectArticle(lead)}>
                  <span>Read Full Article</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="spotlight-media" onClick={() => onSelectArticle(lead)}>
              <div className="spotlight-img-frame">
                <img src={lead.coverImage} alt={lead.title} className="spotlight-cover-img" />
              </div>
              <div className="spotlight-badge">
                <Sparkles size={14} />
                <span>Featured Article</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .featured-section {
          padding: 4rem 0;
          background: linear-gradient(180deg, transparent 0%, var(--bg-secondary) 50%, transparent 100%);
        }

        .spotlight-card {
          overflow: hidden;
          padding: 0;
          border: 1px solid var(--border-hover);
        }

        .spotlight-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
        }

        .spotlight-content {
          padding: 3.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .spotlight-meta {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
        }

        .meta-item {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }

        .pub-badge-tag {
          font-weight: 700;
          color: var(--accent-gold);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .meta-sep {
          opacity: 0.4;
        }

        .spotlight-title {
          font-size: 2.2rem;
          line-height: 1.2;
          color: var(--text-primary);
          margin-bottom: 1rem;
          cursor: pointer;
          transition: color var(--transition-fast);
        }

        .spotlight-title:hover {
          color: var(--accent-gold);
        }

        .spotlight-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.25rem;
          font-weight: 500;
        }

        .spotlight-excerpt {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .spotlight-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .spotlight-tag {
          font-size: 0.8rem;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-sm);
        }

        .spotlight-media {
          position: relative;
          height: 100%;
          min-height: 380px;
          cursor: pointer;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .spotlight-img-frame {
          width: 100%;
          height: 100%;
          max-height: 380px;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          background: #090d16;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .spotlight-cover-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.6s ease;
        }

        .spotlight-media:hover .spotlight-cover-img {
          transform: scale(1.03);
        }

        .spotlight-badge {
          position: absolute;
          bottom: 1.5rem;
          right: 1.5rem;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(10px);
          color: var(--accent-gold);
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(251, 191, 36, 0.4);
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        @media (max-width: 992px) {
          .spotlight-grid {
            grid-template-columns: 1fr;
          }
          .spotlight-content {
            padding: 2rem;
          }
          .spotlight-title {
            font-size: 1.7rem;
          }
        }

        @media (max-width: 576px) {
          .spotlight-content {
            padding: 1.25rem;
          }
          .spotlight-title {
            font-size: 1.35rem;
          }
          .spotlight-subtitle {
            font-size: 0.95rem;
          }
          .spotlight-media {
            min-height: 220px;
          }
        }
      `}</style>
    </section>
  );
}
