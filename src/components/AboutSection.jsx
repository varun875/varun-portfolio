import React from 'react';
import { Feather, Check, Compass } from 'lucide-react';
import { writerInfo } from '../data/writerInfo';

export function AboutSection() {
  const expertiseTopics = [
    "Smartphone Reviews & Comparisons",
    "Smartwatch & Wearable Reviews",
    "Gaming Laptop Reviews",
    "Buying Guides",
    "Technology News & Industry Updates",
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-column">
            <div className="glass-card about-card glow-effect">
              <img src={writerInfo.avatar} alt={writerInfo.name} className="about-avatar" />
              <div className="about-manifesto-box">
                <Compass size={18} className="text-gold mb-1" />
                <h4>Writing Approach</h4>
                <p className="manifesto-text">
                  Every review is based on real-world use, from outdoor visibility and gaming performance to battery life, so readers know what to expect before they buy.
                </p>
              </div>
            </div>
          </div>

          <div className="about-text-column">
            <div className="badge badge-gold about-badge">
              <Feather size={12} />
              <span>ABOUT THE WRITER</span>
            </div>

            <h2 className="section-title about-title">
              Tech Reviews & Gadget Insights
            </h2>

            <p className="about-p">
              Hi, I'm <strong>Varun P.</strong>, a Content Writer at <strong>GizmoGeekHub</strong> based in Chennai, India. Over the past two years, I've published 95+ articles covering smartphones, smartwatches, gaming laptops, and major tech news.
            </p>

            <p className="about-p">
              I enjoy breaking down complex specifications into straightforward, practical reviews that help readers understand what really matters before making a purchase.
            </p>

            <div className="expertise-block">
              <h4 className="expertise-title">Core Coverage Areas</h4>
              <div className="expertise-grid">
                {expertiseTopics.map((topic, i) => (
                  <div key={i} className="expertise-item">
                    <Check size={15} className="text-gold" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 6rem 0;
          border-top: 1px solid var(--border-color);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-card {
          padding: 2rem;
          text-align: center;
        }

        .about-avatar {
          width: 100%;
          max-width: 320px;
          height: 360px;
          object-fit: cover;
          border-radius: var(--radius-md);
          margin-bottom: 1.5rem;
          box-shadow: var(--shadow-md);
        }

        .about-manifesto-box {
          background: var(--bg-secondary);
          padding: 1.25rem;
          border-radius: var(--radius-md);
          border-left: 3px solid var(--accent-gold);
          text-align: left;
        }

        .about-manifesto-box h4 {
          font-size: 0.9rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .manifesto-text {
          font-family: var(--font-sans);
          font-style: normal;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.65;
        }

        .about-badge {
          margin-bottom: 1.25rem;
          display: inline-flex;
        }

        .about-title {
          margin-bottom: 1.5rem;
          line-height: 1.25;
        }

        .about-p {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.25rem;
        }

        .expertise-block {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-color);
        }

        .expertise-title {
          font-size: 1.05rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        .expertise-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .expertise-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
