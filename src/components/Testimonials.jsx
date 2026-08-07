import React from 'react';
import { Quote, Star } from 'lucide-react';
import { writerInfo } from '../data/writerInfo';

export function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <div className="badge badge-gold mb-2">
            <span>EDITORIAL PRAISE</span>
          </div>
          <h2 className="section-title">What Editors & Publishers Say</h2>
        </div>

        <div className="testimonials-grid">
          {writerInfo.testimonials.map((item, idx) => (
            <div key={idx} className="testimonial-card glass-card">
              <div className="quote-icon">
                <Quote size={28} />
              </div>

              <div className="star-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>

              <p className="testimonial-quote">
                "{item.quote}"
              </p>

              <div className="testimonial-author">
                <img src={item.avatar} alt={item.author} className="author-thumb" />
                <div className="author-info">
                  <span className="author-name">{item.author}</span>
                  <span className="author-role">{item.role} • <strong>{item.publication}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          padding: 5rem 0;
          border-top: 1px solid var(--border-color);
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 3rem;
        }

        .testimonial-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .quote-icon {
          color: var(--accent-gold);
          opacity: 0.5;
          margin-bottom: 1rem;
        }

        .star-rating {
          display: flex;
          gap: 0.2rem;
          margin-bottom: 1.25rem;
        }

        .testimonial-quote {
          font-family: var(--font-serif-body);
          font-size: 1.08rem;
          line-height: 1.7;
          color: var(--text-serif);
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-color);
        }

        .author-thumb {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--accent-gold);
        }

        .author-info {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .author-role {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        @media (max-width: 992px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
