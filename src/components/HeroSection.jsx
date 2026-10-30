import React from 'react'
import { ArrowRight, Code, Sparkles, Terminal, Download, ShieldCheck } from 'lucide-react'

export default function HeroSection({ profile, onExplore, onContact, onOpenAdmin }) {
  const p = profile || {}

  return (
    <div
      style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Status Badges */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '28px',
        }}
      >
        <div className="pill-badge">
          <span className="pulse-dot" />
          <span>{p.status || 'AVAILABLE FOR WORK & PROJECTS'}</span>
        </div>

        <div className="pill-badge" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <Sparkles size={13} color="#ffffff" />
          <span>3D INTERACTIVE ARCHITECTURE</span>
        </div>
      </div>

      {/* Main Massive Heading */}
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.8rem, 6.5vw, 5.8rem)',
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          textTransform: 'uppercase',
          marginBottom: '18px',
        }}
      >
        <span className="gradient-text">{p.name || 'SATYAM RAJPOOT'}</span>
      </h1>

      {/* Role / Subtitle */}
      <div
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)',
          fontWeight: 600,
          color: '#d4d4d8',
          letterSpacing: '-0.01em',
          marginBottom: '20px',
        }}
      >
        <span>{p.role || 'Creative Web Developer'}</span>
        <span style={{ margin: '0 12px', color: '#52525b' }}>•</span>
        <span style={{ color: '#a1a1aa' }}>{p.subRole || 'Full-Stack Crafter'}</span>
      </div>

      {/* Tagline / Bio snippet */}
      <p
        style={{
          maxWidth: '680px',
          fontSize: 'clamp(0.95rem, 1.2vw, 1.15rem)',
          lineHeight: 1.7,
          color: 'var(--text-muted)',
          marginBottom: '38px',
        }}
      >
        {p.tagline ||
          'Crafting next-generation 3D interactive web experiences and robust full-stack applications with obsessive attention to design and performance.'}
      </p>

      {/* CTA Buttons */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '50px',
        }}
      >
        <button onClick={onExplore} className="btn-primary">
          <span>Explore Works</span>
          <ArrowRight size={18} />
        </button>

        <button onClick={onContact} className="btn-secondary">
          <span>Let's Talk</span>
        </button>

        <button
          onClick={onOpenAdmin}
          className="btn-secondary"
          style={{ borderColor: 'rgba(255,255,255,0.2)' }}
          title="Open Admin Dashboard to edit works & content"
        >
          <ShieldCheck size={16} />
          <span>Admin Portal</span>
        </button>
      </div>

      {/* Metric Counters Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '18px',
          width: '100%',
          maxWidth: '820px',
        }}
      >
        <div className="glass-panel" style={{ padding: '20px 24px', textAlign: 'center' }}>
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2rem',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '4px',
            }}
          >
            {p.experienceYears || '3+'}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: '#a1a1aa',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            Years Experience
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '20px 24px', textAlign: 'center' }}>
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2rem',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '4px',
            }}
          >
            {p.completedProjects || '35+'}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: '#a1a1aa',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            Completed Projects
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '20px 24px', textAlign: 'center' }}>
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2rem',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '4px',
            }}
          >
            99.9%
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: '#a1a1aa',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            Client Delight
          </div>
        </div>
      </div>
    </div>
  )
}
