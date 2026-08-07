import React, { useState } from 'react';
import { X, Send, CheckCircle, Sparkles, Sliders, Calendar, Mail } from 'lucide-react';
import { writerInfo } from '../data/writerInfo';

export function ContactModal({ isOpen, onClose, initialService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    publicationOrCompany: '',
    serviceType: initialService ? initialService.title : 'Long-form Feature Articles',
    wordCount: 2500,
    deadline: '2-3 weeks',
    projectBrief: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="contact-backdrop" onClick={onClose}>
      <div className="contact-modal glass-card" onClick={(e) => e.stopPropagation()}>
        <div className="contact-header">
          <div className="flex items-center gap-2">
            <div className="icon-badge">
              <Sparkles size={16} />
            </div>
            <div>
              <h2 className="modal-title">Pitch / Commission Request</h2>
              <p className="modal-subtitle">Direct editorial inquiry line with {writerInfo.name}</p>
            </div>
          </div>

          <button className="close-modal-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {isSubmitted ? (
          <div className="success-state">
            <div className="success-icon">
              <CheckCircle size={56} />
            </div>
            <h3>Commission Inquiry Received!</h3>
            <p>
              Thank you for reaching out, <strong>{formData.name}</strong>. {writerInfo.name} will review your pitch for <strong>{formData.serviceType}</strong> ({formData.wordCount} words) and reply within 24 hours.
            </p>
            <button className="btn btn-accent mt-4" onClick={handleReset}>
              Close Window
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid-2">
              <div className="form-group">
                <label>Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="name@publication.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-grid-2">
              <div className="form-group">
                <label>Publication / Company</label>
                <input
                  type="text"
                  placeholder="e.g. The Atlantic / Acme Corp"
                  value={formData.publicationOrCompany}
                  onChange={(e) => setFormData({ ...formData, publicationOrCompany: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Service / Article Format</label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                >
                  <option value="Long-form Feature Articles">Long-form Feature Article</option>
                  <option value="Opinion & Cultural Essays">Opinion & Cultural Essay</option>
                  <option value="Executive Thought Leadership">Executive Thought Leadership</option>
                  <option value="Comprehensive Whitepapers">Comprehensive Whitepaper</option>
                  <option value="Columnist / Recurring Work">Columnist / Recurring Work</option>
                </select>
              </div>
            </div>

            {/* Interactive Word Count Slider */}
            <div className="form-group slider-group">
              <div className="slider-label-row">
                <label>Target Word Count:</label>
                <span className="slider-value-badge">{formData.wordCount.toLocaleString()} Words</span>
              </div>
              <input
                type="range"
                min="1000"
                max="10000"
                step="500"
                value={formData.wordCount}
                onChange={(e) => setFormData({ ...formData, wordCount: parseInt(e.target.value) })}
                className="word-count-slider"
              />
              <div className="slider-ticks">
                <span>1,000w</span>
                <span>3,500w</span>
                <span>6,000w</span>
                <span>10,000w</span>
              </div>
            </div>

            <div className="form-group">
              <label>Project Brief & Topic Outline *</label>
              <textarea
                rows={4}
                required
                placeholder="Describe the article angle, target audience, key sources or primary interview leads, and desired deadline..."
                value={formData.projectBrief}
                onChange={(e) => setFormData({ ...formData, projectBrief: e.target.value })}
              />
            </div>

            <div className="form-actions-row">
              <div className="direct-email-note">
                <Mail size={14} />
                <span>Or email directly: <strong>{writerInfo.email}</strong></span>
              </div>

              <button type="submit" className="btn btn-accent" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span>Sending Pitch...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Pitch Request</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>

      <style>{`
        .contact-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(12px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .contact-modal {
          width: 100%;
          max-width: 680px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 2.5rem;
          box-shadow: var(--shadow-lg);
          position: relative;
        }

        .contact-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 2rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-color);
        }

        .icon-badge {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: var(--accent-gold-glow);
          color: var(--accent-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 0.75rem;
        }

        .modal-title {
          font-size: 1.5rem;
          color: var(--text-primary);
        }

        .modal-subtitle {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .close-modal-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
        }

        .close-modal-btn:hover {
          color: var(--text-primary);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          background: var(--bg-input);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 0.75rem 1rem;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.9rem;
          outline: none;
          transition: border-color var(--transition-fast);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: var(--accent-gold);
        }

        .slider-group {
          background: var(--bg-secondary);
          padding: 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }

        .slider-label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .slider-value-badge {
          background: var(--accent-gold-glow);
          color: var(--accent-gold);
          font-weight: 700;
          font-size: 0.85rem;
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(251, 191, 36, 0.3);
        }

        .word-count-slider {
          accent-color: var(--accent-gold);
          width: 100%;
          cursor: pointer;
        }

        .slider-ticks {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }

        .form-actions-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1rem;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .direct-email-note {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .success-state {
          text-align: center;
          padding: 3rem 1rem;
        }

        .success-icon {
          color: var(--accent-emerald);
          margin-bottom: 1rem;
        }

        .success-state h3 {
          font-size: 1.6rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .success-state p {
          color: var(--text-secondary);
          max-width: 480px;
          margin: 0 auto;
        }

        @media (max-width: 640px) {
          .form-grid-2 {
            grid-template-columns: 1fr;
          }
          .contact-modal {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
