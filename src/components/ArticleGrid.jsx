import React, { useMemo } from 'react';
import { ArticleCard } from './ArticleCard';
import { Sparkles, Search, X } from 'lucide-react';

export function ArticleGrid({ 
  articles, 
  onSelectArticle, 
  searchQuery, 
  setSearchQuery, 
  bookmarks, 
  onToggleBookmark 
}) {
  // Always sort articles by date published (Latest first)
  const sortedArticles = useMemo(() => {
    return articles.filter(article => {
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = article.title.toLowerCase().includes(query);
        const matchesExcerpt = article.excerpt.toLowerCase().includes(query);
        const matchesPub = article.publication.toLowerCase().includes(query);
        const matchesTags = article.tags.some(tag => tag.toLowerCase().includes(query));
        return matchesTitle || matchesExcerpt || matchesPub || matchesTags;
      }
      return true;
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [articles, searchQuery]);

  return (
    <section id="articles" className="articles-section">
      <div className="container">
        {/* Section Title Header */}
        <div className="section-header-row">
          <div>
            <div className="badge badge-gold mb-2">
              <Sparkles size={12} />
              <span>GIZMOGEEKHUB ARTICLES</span>
            </div>
            <h2 className="section-title">Latest Articles & Reviews</h2>
            <p className="section-subtitle">
              Exploring consumer tech, flagship smartphone reviews, AI breakthroughs, and hardware benchmarks.
            </p>
          </div>
        </div>

        {/* Active Search Summary */}
        {searchQuery && (
          <div className="active-filter-banner">
            <span>
              Showing results for: <strong>"{searchQuery}"</strong> ({sortedArticles.length} found)
            </span>
            <button className="clear-filter-btn" onClick={() => setSearchQuery('')}>
              <X size={14} /> Clear Search
            </button>
          </div>
        )}

        {/* Grid Display */}
        {sortedArticles.length > 0 ? (
          <div className="articles-grid">
            {sortedArticles.map(article => (
              <ArticleCard 
                key={article.id}
                article={article}
                onSelectArticle={onSelectArticle}
                isBookmarked={bookmarks.includes(article.id)}
                onToggleBookmark={onToggleBookmark}
              />
            ))}
          </div>
        ) : (
          <div className="empty-articles-state glass-card">
            <Search size={40} className="empty-icon text-muted mb-2" />
            <h3>No Articles Found</h3>
            <p>No articles matched your search query. Try searching for "Redmi", "Google", "OnePlus", or "OPPO".</p>
            <button className="btn btn-accent mt-3" onClick={() => setSearchQuery('')}>
              View All Articles
            </button>
          </div>
        )}
      </div>

      <style>{`
        .articles-section {
          padding: 5rem 0;
        }

        .section-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 2.5rem;
        }

        .section-subtitle {
          color: var(--text-secondary);
          font-size: 1rem;
          margin-top: 0.5rem;
        }

        .active-filter-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1.25rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          margin-bottom: 2rem;
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .clear-filter-btn {
          background: transparent;
          border: none;
          color: var(--accent-gold);
          display: flex;
          align-items: center;
          gap: 0.35rem;
          cursor: pointer;
          font-weight: 600;
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .empty-articles-state {
          padding: 4rem 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 1rem;
        }

        @media (max-width: 1024px) {
          .articles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .articles-grid {
            grid-template-columns: 1fr;
          }
          .section-header-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
