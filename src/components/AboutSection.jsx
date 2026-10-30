import React from 'react'
import { Terminal, Cpu, Flame, Code2, CheckCircle2, User, Compass } from 'lucide-react'

export default function AboutSection({ profile }) {
  const p = profile || {}

  return (
    <div
      style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div className="pill-badge" style={{ marginBottom: '14px' }}>
          <User size={13} color="#ffffff" />
          <span>STAGE 02 // ARCHITECT PROFILE</span>
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
          }}
        >
          About <span className="gradient-text">Satyam Rajpoot</span>
        </h2>
        <p
          style={{
            maxWidth: '620px',
            margin: '10px auto 0 auto',
            color: 'var(--text-muted)',
            fontSize: '0.96rem',
            lineHeight: 1.6,
          }}
        >
          Engineering aesthetic digital experiences with clean architecture, sub-second latency, and immersive visual storytelling.
        </p>
      </div>

      {/* Bento Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}
      >
        {/* Card 1: Bio & Philosophy */}
        <div className="glass-panel card-shine" style={{ padding: '32px' }}>
          <div
            style={{
              display: 'inline-flex',
              padding: '10px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              marginBottom: '20px',
            }}
          >
            <Compass size={22} color="#ffffff" />
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.4rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '12px',
            }}
          >
            The Engineering Mindset
          </h3>

          <p
            style={{
              fontSize: '0.92rem',
              lineHeight: 1.7,
              color: 'var(--text-muted)',
              marginBottom: '20px',
            }}
          >
            {p.bio ||
              'Hello! I am Satyam Rajpoot, a passionate Web Developer with 3+ years of experience turning complex ideas into sleek, fluid digital realities. I specialize in modern JavaScript, React, Three.js, and high-performance Node.js backends.'}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.86rem', color: '#d4d4d8' }}>
              <CheckCircle2 size={16} color="#ffffff" />
              <span>Pixel-perfect responsive design across all devices</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.86rem', color: '#d4d4d8' }}>
              <CheckCircle2 size={16} color="#ffffff" />
              <span>Fluid 60FPS WebGL & Three.js canvas animations</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.86rem', color: '#d4d4d8' }}>
              <CheckCircle2 size={16} color="#ffffff" />
              <span>Resilient REST APIs with Node.js & clean modular structure</span>
            </div>
          </div>
        </div>

        {/* Card 2: Interactive DNA Code Terminal */}
        <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
          {/* Terminal Window Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              paddingBottom: '12px',
              marginBottom: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: '#71717a',
                  marginLeft: '8px',
                }}
              >
                satyam@developer:~/dna.json
              </span>
            </div>
            <Terminal size={14} color="#71717a" />
          </div>

          {/* Code Body */}
          <pre
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              lineHeight: 1.6,
              color: '#d4d4d8',
              overflowX: 'auto',
              flex: 1,
            }}
          >
            {`{
  "name": "Satyam Rajpoot",
  "location": "${p.location || 'India'}",
  "expertise": ["React", "Three.js", "Node.js", "Full-Stack"],
  "focus": "High-Performance 3D & Web Applications",
  "education": "Computer Science & Engineering",
  "passions": [
    "Spatial Computing & WebGL",
    "Creative Interactive Shaders",
    "Clean REST API Architectures"
  ],
  "availableForHire": true
}`}
          </pre>

          <div
            style={{
              marginTop: '16px',
              paddingTop: '12px',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: '#a1a1aa',
            }}
          >
            <span>STATUS: READY_FOR_DEPLOYMENT</span>
            <span style={{ color: '#ffffff', fontWeight: 600 }}>BUILD // 2026.1</span>
          </div>
        </div>
      </div>
    </div>
  )
}
