import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PublicationsBar } from './components/PublicationsBar';
import { FeaturedSpotlight } from './components/FeaturedSpotlight';
import { ArticleGrid } from './components/ArticleGrid';
import { AboutSection } from './components/AboutSection';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { articles } from './data/articles';

export function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio_theme') || 'dark';
  });

  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactInitialService, setContactInitialService] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bookmarks state synced with localStorage
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio_bookmarks');
      return saved ? JSON.parse(saved) : ['ai-hallucination-economy', 'the-future-of-longform-prose'];
    } catch {
      return ['ai-hallucination-economy'];
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('portfolio_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'paper' : 'dark'));
  };

  const handleToggleBookmark = (articleId) => {
    setBookmarks(prev => {
      if (prev.includes(articleId)) {
        return prev.filter(id => id !== articleId);
      } else {
        return [...prev, articleId];
      }
    });
  };

  const handleOpenContactWithService = (service) => {
    setContactInitialService(service);
    setIsContactOpen(true);
  };

  const handleExploreArticles = () => {
    const el = document.getElementById('articles');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-main-wrapper">
      {/* Navigation Bar */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenContact={() => { setContactInitialService(null); setIsContactOpen(true); }}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isSearching={isSearching}
        setIsSearching={setIsSearching}
      />

      {/* Main Content Sections */}
      <main>
        <Hero 
          onOpenContact={() => { setContactInitialService(null); setIsContactOpen(true); }} 
          onExploreArticles={handleExploreArticles}
        />

        <PublicationsBar />

        <FeaturedSpotlight 
          articles={articles} 
          onSelectArticle={setSelectedArticle} 
        />

        <ArticleGrid 
          articles={articles}
          onSelectArticle={setSelectedArticle}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          bookmarks={bookmarks}
          onToggleBookmark={handleToggleBookmark}
        />

        <AboutSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenContact={() => { setContactInitialService(null); setIsContactOpen(true); }}
      />

      {/* Article Reader Overlay Modal */}
      {selectedArticle && (
        <ArticleReaderModal 
          article={selectedArticle} 
          onClose={() => setSelectedArticle(null)}
          isBookmarked={bookmarks.includes(selectedArticle.id)}
          onToggleBookmark={handleToggleBookmark}
        />
      )}

      {/* Contact / Pitch Commission Modal */}
      <ContactModal 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialService={contactInitialService}
      />

      {/* Floating Scroll To Top Button */}
      {showScrollTop && (
        <button 
          className="scroll-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}

      <style>{`
        .scroll-top-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--accent-gold);
          color: #0f172a;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(251, 191, 36, 0.4);
          z-index: 90;
          transition: all var(--transition-fast);
        }

        .scroll-top-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(251, 191, 36, 0.6);
        }
      `}</style>
    </div>
  );
}

export default App;
