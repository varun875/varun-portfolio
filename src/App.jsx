import React, { useState, useEffect } from 'react';
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
    </div>
  );
}

export default App;
