import React, { useState } from 'react'
import {
  Code2,
  FileCode,
  Layers,
  Server,
  Cpu,
  Palette,
  Database,
  Sparkles,
  GitBranch,
  Zap,
  Box,
  Terminal,
} from 'lucide-react'

// Icon mapping helper
const ICON_MAP = {
  Code2: Code2,
  FileCode: FileCode,
  Layers: Layers,
  Server: Server,
  Cpu: Cpu,
  Palette: Palette,
  Database: Database,
  Sparkles: Sparkles,
  GitBranch: GitBranch,
  Zap: Zap,
  Box: Box,
  Terminal: Terminal,
}

export default function SkillsSection({ skills }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const skillList = skills && skills.length > 0 ? skills : []

  // Extract distinct categories
  const categories = ['All', ...Array.from(new Set(skillList.map((s) => s.category).filter(Boolean)))]

  const filteredSkills =
    selectedCategory === 'All'
      ? skillList
      : skillList.filter((s) => s.category === selectedCategory)

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
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <div className="pill-badge" style={{ marginBottom: '12px' }}>
          <Zap size={13} color="#ffffff" />
          <span>STAGE 03 // TECHNICAL ARSENAL</span>
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 3.8vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
          }}
        >
          Skills & <span className="gradient-text">Superpowers</span>
        </h2>
        <p
          style={{
            maxWidth: '560px',
            margin: '8px auto 0 auto',
            color: 'var(--text-muted)',
            fontSize: '0.94rem',
          }}
        >
          Specialized in high-performance frontend engineering, 3D WebGL graphics, and scalable backend services.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '32px',
        }}
      >
        {categories.map((cat) => {
          const isActive = selectedCategory === cat
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.04)',
                color: isActive ? '#09090b' : '#a1a1aa',
                border: '1px solid',
                borderColor: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.09)',
                borderRadius: '999px',
                padding: '6px 16px',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              {cat}
            </button>
          )
        })}
      </div>

      {/* Skills Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '16px',
          maxHeight: '440px',
          overflowY: 'auto',
          paddingRight: '6px',
        }}
      >
        {filteredSkills.map((skill) => {
          const IconComp = ICON_MAP[skill.icon] || Code2
          const level = skill.level || 85

          return (
            <div
              key={skill.id}
              className="glass-panel"
              style={{
                padding: '18px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconComp size={18} color="#ffffff" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#ffffff' }}>{skill.name}</div>
                    <div style={{ fontSize: '0.72rem', color: '#71717a', fontFamily: 'var(--font-mono)' }}>
                      {skill.category}
                    </div>
                  </div>
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: '#ffffff',
                  }}
                >
                  {level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div
                style={{
                  width: '100%',
                  height: '5px',
                  background: 'rgba(255, 255, 255, 0.07)',
                  borderRadius: '999px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${level}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, #ffffff 100%)',
                    boxShadow: '0 0 10px rgba(255,255,255,0.5)',
                    borderRadius: '999px',
                    transition: 'width 0.8s ease',
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
