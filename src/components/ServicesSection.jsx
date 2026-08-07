import React from 'react';
import { FileText, Feather, UserCheck, BarChart3, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { writerInfo } from '../data/writerInfo';

export function ServicesSection({ onSelectService }) {
  const getIcon = (name) => {
    switch (name) {
      case 'FileText': return <FileText size={24} />;
      case 'Feather': return <Feather size={24} />;
      case 'UserCheck': return <UserCheck size={24} />;
      case 'BarChart3': return <BarChart3 size={24} />;
      default: return <FileText size={24} />;
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge badge-gold mb-2">
            <span>EDITORIAL SERVICES & COMMISSIONS</span>
          </div>
          <h2 className="section-title">How We Can Collaborate</h2>
          <p className="section-subtitle text-max-600">
            Tailored editorial writing, investigative long-form journalism, and executive thought leadership for premier outlets and tech brands.
          </p>
        </div>

        <div className="services-grid">
          {writerInfo.services.map((service) => (
            <div key={service.id} className="service-card glass-card">
              <div className="service-icon-wrapper">
                {getIcon(service.icon)}
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>

              <div className="service-meta">
                <div className="meta-row">
                  <Clock size={14} className="text-gold" />
                  <span>Turnaround: <strong>{service.turnaround}</strong></span>
                </div>
                <div className="meta-row">
                  <CheckCircle2 size={14} className="text-gold" />
                  <span>Ideal For: <strong>{service.idealFor}</strong></span>
                </div>
              </div>

              <button 
                className="btn btn-outline service-cta-btn"
                onClick={() => onSelectService(service)}
              >
                <span>Request Commission</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-section {
          padding: 6rem 0;
          position: relative;
        }

        .text-center {
          text-align: center;
        }

        .text-max-600 {
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 3.5rem;
        }

        .service-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
        }

        .service-icon-wrapper {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background: var(--accent-gold-glow);
          color: var(--accent-gold);
          border: 1px solid rgba(251, 191, 36, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .service-title {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .service-desc {
          font-size: 0.98rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.75rem;
        }

        .service-meta {
          margin-top: auto;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .meta-row {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .meta-row strong {
          color: var(--text-primary);
        }

        .service-cta-btn {
          width: 100%;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .service-card {
            padding: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
}
