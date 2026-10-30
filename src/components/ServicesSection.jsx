import React from 'react'
import { Monitor, Box, Server, Sparkles, Workflow, ArrowRight } from 'lucide-react'

const ICON_MAP = {
  Monitor: Monitor,
  Box: Box,
  Server: Server,
  Sparkles: Sparkles,
}

export default function ServicesSection({ services, onContact }) {
  const serviceList = services && services.length > 0 ? services : []

  const workflowSteps = [
    { num: '01', title: 'Conceptual Architecture', desc: 'Deep dive into user goals, UX flow, and scalable stack selection.' },
    { num: '02', title: '3D & UI Prototyping', desc: 'Crafting luxury monochrome aesthetic, WebGL shaders & interactions.' },
    { num: '03', title: 'Robust Full-Stack Build', desc: 'Clean React components, optimized Node.js APIs, and database schemas.' },
    { num: '04', title: 'Speed Audit & Launch', desc: 'Lighthouse 95+ score optimization, SEO hardening & global CDN deployment.' },
  ]

  return (
    <div
      className="section-content-wrapper"
      style={{
        maxWidth: '1240px',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '26px' }}>
        <div className="pill-badge" style={{ marginBottom: '12px' }}>
          <Workflow size={13} color="#ffffff" />
          <span>STAGE 05 // SERVICES & ROADMAP</span>
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 3.8vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
          }}
        >
          Solutions & <span className="gradient-text">Services</span>
        </h2>
        <p
          style={{
            maxWidth: '580px',
            margin: '8px auto 0 auto',
            color: 'var(--text-muted)',
            fontSize: '0.94rem',
          }}
        >
          From complex bespoke web apps to immersive 3D spatial sites, Satyam delivers production-ready perfection.
        </p>
      </div>

      {/* Services 4-Card Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '20px',
          marginBottom: '30px',
          width: '100%',
        }}
      >
        {serviceList.map((srv) => {
          const IconComp = ICON_MAP[srv.icon] || Sparkles
          return (
            <div
              key={srv.id}
              className="glass-panel card-shine"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                <IconComp size={22} color="#ffffff" />
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '10px',
                }}
              >
                {srv.title}
              </h3>

              <p
                style={{
                  fontSize: '0.86rem',
                  lineHeight: 1.6,
                  color: 'var(--text-muted)',
                  marginBottom: '18px',
                  flex: 1,
                }}
              >
                {srv.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {(srv.tags || []).map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '6px',
                      padding: '2px 8px',
                      fontSize: '0.68rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#a1a1aa',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* 4-Step Engineering Roadmap Strip */}
      <div
        className="glass-panel"
        style={{
          padding: '18px 24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          alignItems: 'center',
        }}
      >
        {workflowSteps.map((step) => (
          <div key={step.num} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1.2rem',
                fontWeight: 800,
                color: '#ffffff',
                opacity: 0.8,
              }}
            >
              {step.num}
            </span>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.84rem', color: '#ffffff' }}>{step.title}</div>
              <div style={{ fontSize: '0.72rem', color: '#a1a1aa', lineHeight: 1.4 }}>{step.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
