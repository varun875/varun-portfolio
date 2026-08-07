import React from 'react';
import { Clock, Eye, ArrowUpRight, Calendar } from 'lucide-react';

export function ArticleCard({ article, onSelectArticle }) {
  const getBadgeStyle = (cat) => {
    switch (cat) {
      case 'Tech & AI': return 'badge-gold';
      case 'Culture & Society': return 'badge-blue';
      case 'Business & Finance': return 'badge-emerald';
      case 'Long-form Essays': return 'badge-purple';
      default: return 'badge-gold';
    }
  };

  return (
    <article className="article-card glass-card">
      {/* Cover Image Header */}
      <div className="card-image-wrapper">
        <img src={article.coverImage} alt={article.title} className="card-cover-img" />
        <div className="card-badge-overlay">
          <span className={`badge ${getBadgeStyle(article.category)}`}>
            {article.category}
          </span>
          <span className="publication-pill">
            {article.publication}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="card-content-body">
        <div className="card-meta-row">
          <span className="card-date">
            <Calendar size={13} />
            {article.date}
          </span>
          <span className="meta-dot">•</span>
          <span className="card-read-time">
            <Clock size={13} />
            {article.readTime}
          </span>
        </div>

        <h3 className="card-title line-clamp-2" onClick={() => onSelectArticle(article)}>
          {article.title}
        </h3>

        <p className="card-excerpt line-clamp-3">
          {article.excerpt}
        </p>

        {/* Card Footer */}
        <div className="card-footer-row">
          <div className="card-stats">
            <span className="stat-item" title="Total Views">
              <Eye size={14} />
              {article.views} Views
            </span>
          </div>

          <button className="read-btn" onClick={() => onSelectArticle(article)}>
            <span>Read Article</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .article-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          height: 100%;
          cursor: pointer;
        }

        .card-image-wrapper {
          position: relative;
          width: 100%;
          height: 210px;
          overflow: hidden;
        }

        .card-cover-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .article-card:hover .card-cover-img {
          transform: scale(1.06);
        }

        .card-badge-overlay {
          position: absolute;
          top: 1rem;
          left: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          z-index: 2;
        }

        .publication-pill {
          background: var(--bg-glass);
          backdrop-filter: blur(8px);
          color: var(--text-primary);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-color);
        }

        .card-content-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-meta-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
        }

        .card-date {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .meta-dot {
          opacity: 0.5;
        }

        .card-read-time {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .card-title {
          font-size: 1.35rem;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: 0.75rem;
          transition: color var(--transition-fast);
        }

        .article-card:hover .card-title {
          color: var(--accent-gold);
        }

        .card-excerpt {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .card-footer-row {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }

        .card-stats {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .read-btn {
          background: transparent;
          border: none;
          color: var(--text-primary);
          font-size: 0.88rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          cursor: pointer;
          transition: color var(--transition-fast);
        }

        .article-card:hover .read-btn {
          color: var(--accent-gold);
        }
      `}</style>
    </article>
  );
}
