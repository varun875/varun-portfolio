import React, { useState, useEffect } from 'react';
import { X, Clock, Eye, ThumbsUp, Bookmark, Share2, Type, ArrowLeft, Check, List, ExternalLink } from 'lucide-react';
import { writerInfo } from '../data/writerInfo';

export function ArticleReaderModal({ article, onClose, isBookmarked, onToggleBookmark }) {
  const [fontSize, setFontSize] = useState('medium'); // 'small', 'medium', 'large'
  const [likes, setLikes] = useState(parseInt(article.likes) || 0);
  const [hasLiked, setHasLiked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = (e) => {
      const modal = e.target;
      if (modal.scrollTop !== undefined) {
        const total = modal.scrollHeight - modal.clientHeight;
        const current = modal.scrollTop;
        setScrollProgress(Math.round((current / total) * 100));
      }
    };
    const modalEl = document.getElementById('article-reader-container');
    if (modalEl) {
      modalEl.addEventListener('scroll', handleScroll);
      return () => modalEl.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(prev => prev + 1);
      setHasLiked(true);
    } else {
      setLikes(prev => prev - 1);
      setHasLiked(false);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'small': return 'font-size-sm';
      case 'large': return 'font-size-lg';
      default: return 'font-size-md';
    }
  };

  return (
    <div className="reader-backdrop" onClick={onClose}>
      {/* Top Reading Progress Bar */}
      <div className="reading-progress-bar" style={{ width: `${scrollProgress}%` }} />

      <div 
        id="article-reader-container" 
        className="reader-modal glass-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Control Header */}
        <div className="reader-header">
          <button className="back-btn" onClick={onClose}>
            <ArrowLeft size={18} />
            <span>Back to Portfolio</span>
          </button>

          <div className="reader-controls">
            {/* Font Size Selector */}
            <div className="font-control-group">
              <Type size={14} className="text-muted" />
              <button 
                className={`font-btn ${fontSize === 'small' ? 'active' : ''}`}
                onClick={() => setFontSize('small')}
              >A-</button>
              <button 
                className={`font-btn ${fontSize === 'medium' ? 'active' : ''}`}
                onClick={() => setFontSize('medium')}
              >A</button>
              <button 
                className={`font-btn ${fontSize === 'large' ? 'active' : ''}`}
                onClick={() => setFontSize('large')}
              >A+</button>
            </div>

            <button 
              className={`control-btn ${isBookmarked ? 'active' : ''}`} 
              onClick={() => onToggleBookmark(article.id)}
              title="Bookmark Article"
            >
              <Bookmark size={16} fill={isBookmarked ? "currentColor" : "none"} />
            </button>

            <button className="control-btn" onClick={handleShare} title="Share Link">
              {copied ? <Check size={16} className="text-emerald" /> : <Share2 size={16} />}
            </button>

            <button className="close-btn" onClick={onClose}>
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Main Article Content Container */}
        <div className="reader-body">
          {/* Header Banner */}
          <div className="article-header">
            <div className="article-publication-tag">
              Published in <span className="pub-highlight">{article.publication}</span>
            </div>

            <h1 className="article-main-title">{article.title}</h1>

            {article.subtitle && (
              <p className="article-subtitle">{article.subtitle}</p>
            )}

            <div className="article-meta-bar">
              <div className="meta-author">
                <span className="author-name">By {writerInfo.name}</span>
                <span className="meta-sep">•</span>
                <span>{article.date}</span>
                <span className="meta-sep">•</span>
                <span className="read-time-pill"><Clock size={13} /> {article.readTime}</span>
              </div>
              {article.link && (
                <a 
                  href={article.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-accent live-link-btn"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0.9rem', fontSize: '0.82rem' }}
                >
                  <span>Read Live on GizmoGeekHub</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>

          {/* Hero Image */}
          <div className="article-featured-image">
            <img src={article.coverImage} alt={article.title} />
          </div>

          {/* Table of Contents */}
          {article.tableOfContents && (
            <div className="toc-box">
              <div className="toc-title">
                <List size={16} />
                <span>Table of Contents</span>
              </div>
              <ul className="toc-list">
                {article.tableOfContents.map(toc => (
                  <li key={toc.id}>
                    <a href={`#${toc.id}`} onClick={(e) => {
                      e.preventDefault();
                      const target = document.getElementById(toc.id);
                      if (target) target.scrollIntoView({ behavior: 'smooth' });
                    }}>
                      {toc.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Formatted Article Body */}
          <div 
            className={`article-content-prose article-body ${getFontSizeClass()}`}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Reader Footer & Interaction */}
          <div className="reader-footer">
            <div className="like-section">
              <button 
                className={`like-btn ${hasLiked ? 'liked' : ''}`}
                onClick={handleLike}
              >
                <ThumbsUp size={18} />
                <span>{hasLiked ? 'Applauded!' : 'Applaud Article'}</span>
                <span className="like-count">({likes})</span>
              </button>
            </div>

            <div className="article-tags-list">
              {article.tags.map((tag, idx) => (
                <span key={idx} className="article-tag-chip">#{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .reader-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(12px);
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 2rem 1rem;
          overflow-y: auto;
        }

        .reading-progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 4px;
          background: linear-gradient(90deg, #fbbf24, #f59e0b);
          z-index: 1010;
          transition: width 0.1s linear;
        }

        .reader-modal {
          width: 100%;
          max-width: 860px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
          margin-top: 1rem;
          margin-bottom: 3rem;
          box-shadow: var(--shadow-lg);
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        .reader-header {
          position: sticky;
          top: 0;
          background: var(--bg-glass);
          backdrop-filter: blur(16px);
          padding: 1rem 1.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-color);
          z-index: 10;
        }

        .back-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          cursor: pointer;
        }

        .back-btn:hover {
          color: var(--text-primary);
        }

        .reader-controls {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .font-control-group {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          background: var(--bg-input);
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-color);
        }

        .font-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.2rem 0.4rem;
          cursor: pointer;
          border-radius: var(--radius-sm);
        }

        .font-btn.active, .font-btn:hover {
          color: var(--accent-gold);
        }

        .control-btn, .close-btn {
          width: 36px;
          height: 36px;
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

        .control-btn:hover, .close-btn:hover {
          border-color: var(--accent-gold);
          color: var(--accent-gold);
        }

        .reader-body {
          padding: 3rem 4rem;
        }

        .article-publication-tag {
          font-size: 0.85rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 0.75rem;
        }

        .pub-highlight {
          color: var(--accent-gold);
          font-weight: 700;
        }

        .article-main-title {
          font-size: 2.8rem;
          line-height: 1.15;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .article-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.5rem;
          font-style: italic;
        }

        .article-meta-bar {
          padding-bottom: 1.5rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border-color);
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .meta-author {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .author-name {
          color: var(--text-primary);
          font-weight: 600;
        }

        .read-time-pill {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .article-featured-image {
          width: 100%;
          height: 380px;
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-bottom: 2.5rem;
        }

        .article-featured-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .toc-box {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.25rem 1.5rem;
          margin-bottom: 2.5rem;
        }

        .toc-title {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--accent-gold);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .toc-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .toc-list a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.92rem;
          transition: color var(--transition-fast);
        }

        .toc-list a:hover {
          color: var(--accent-gold);
        }

        /* Typography sizing classes */
        .font-size-sm { font-size: 1.05rem; }
        .font-size-md { font-size: 1.2rem; }
        .font-size-lg { font-size: 1.35rem; }

        .article-content-prose h3 {
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .article-content-prose p {
          margin-bottom: 1.5rem;
        }

        .article-content-prose .lead {
          font-size: 1.3rem;
          line-height: 1.7;
          color: var(--text-primary);
          font-weight: 400;
        }

        .editorial-quote {
          border-left: 4px solid var(--accent-gold);
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          font-size: 1.3rem;
          color: var(--accent-gold);
        }

        .data-callout {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          margin: 2rem 0;
        }

        .reader-footer {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .like-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-full);
          background: var(--bg-secondary);
          color: var(--text-primary);
          border: 1px solid var(--border-color);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .like-btn:hover, .like-btn.liked {
          background: var(--accent-gold-glow);
          color: var(--accent-gold);
          border-color: var(--accent-gold);
        }

        .article-tags-list {
          display: flex;
          gap: 0.5rem;
        }

        .article-tag-chip {
          font-size: 0.8rem;
          color: var(--text-muted);
          background: var(--bg-secondary);
          padding: 0.3rem 0.65rem;
          border-radius: var(--radius-sm);
        }

        @media (max-width: 768px) {
          .reader-body {
            padding: 2rem 1.5rem;
          }
          .article-main-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
