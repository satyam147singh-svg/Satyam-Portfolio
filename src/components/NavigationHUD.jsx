import React from 'react'
import { ShieldCheck, ChevronUp, ChevronDown, Mouse, Sparkles } from 'lucide-react'

const SECTION_NAMES = [
  '01 // INTRO',
  '02 // ABOUT',
  '03 // SKILLS',
  '04 // WORKS',
  '05 // SERVICES',
  '06 // CONTACT',
]

export default function NavigationHUD({
  currentSection,
  totalSections,
  onSelectSection,
  onNext,
  onPrev,
  onOpenAdmin,
  isGuideEnabled,
  onToggleGuide,
}) {
  return (
    <>
      {/* Top Navbar */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '70px',
          zIndex: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 36px',
          background: 'linear-gradient(180deg, rgba(5,5,7,0.85) 0%, rgba(5,5,7,0) 100%)',
          backdropFilter: 'blur(12px)',
          pointerEvents: 'auto',
        }}
      >
        {/* Brand Monogram */}
        <div
          onClick={() => onSelectSection(0)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)',
              color: '#050505',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              fontSize: '0.95rem',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
            }}
          >
            SR
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: '0.92rem',
                color: '#ffffff',
                letterSpacing: '0.04em',
              }}
            >
              SATYAM RAJPOOT
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.64rem',
                color: '#a1a1aa',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span className="pulse-dot" style={{ width: '5px', height: '5px' }} />
              CREATIVE WEB DEVELOPER
            </div>
          </div>
        </div>

        {/* Section Navigation Tabs (Hidden on small mobile) */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '999px',
            padding: '4px',
            backdropFilter: 'blur(16px)',
          }}
          className="hud-nav-tabs"
        >
          {SECTION_NAMES.map((name, idx) => {
            const isActive = currentSection === idx
            return (
              <button
                key={idx}
                onClick={() => onSelectSection(idx)}
                style={{
                  background: isActive ? '#ffffff' : 'transparent',
                  color: isActive ? '#050505' : '#a1a1aa',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '6px 14px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.25s var(--ease-out-expo)',
                  boxShadow: isActive ? '0 0 16px rgba(255,255,255,0.3)' : 'none',
                }}
              >
                {name}
              </button>
            )
          })}
        </nav>

        {/* Action Controls: 3D Guide Toggle & Admin Dashboard */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={onToggleGuide}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: isGuideEnabled ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.04)',
              border: '1px solid',
              borderColor: isGuideEnabled ? 'rgba(255, 255, 255, 0.35)' : 'rgba(255, 255, 255, 0.12)',
              borderRadius: '10px',
              padding: '8px 12px',
              color: '#ffffff',
              fontSize: '0.76rem',
              fontWeight: 600,
              cursor: 'pointer',
              backdropFilter: 'blur(12px)',
              transition: 'all 0.25s ease',
            }}
            title={isGuideEnabled ? 'Turn OFF 3D AI Guide' : 'Turn ON 3D AI Guide'}
          >
            <Sparkles size={14} color={isGuideEnabled ? '#ffffff' : '#71717a'} />
            <span>3D Guide: {isGuideEnabled ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={onOpenAdmin}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '10px',
              padding: '8px 14px',
              color: '#ffffff',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
              backdropFilter: 'blur(12px)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
          >
            <ShieldCheck size={15} color="#ffffff" />
            <span>Admin</span>
          </button>
        </div>
      </header>

      {/* Right Vertical Dot Gauge */}
      <div
        style={{
          position: 'fixed',
          right: '28px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 35,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '14px',
          pointerEvents: 'auto',
        }}
      >
        {SECTION_NAMES.map((name, idx) => {
          const isActive = currentSection === idx
          return (
            <button
              key={idx}
              onClick={() => onSelectSection(idx)}
              title={name}
              style={{
                width: isActive ? '10px' : '6px',
                height: isActive ? '24px' : '6px',
                borderRadius: '999px',
                background: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.25)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: isActive ? '0 0 10px #ffffff' : 'none',
              }}
            />
          )
        })}
      </div>

      {/* Bottom Floating Control Bar */}
      <footer
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: '65px',
          zIndex: 35,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 36px',
          background: 'linear-gradient(0deg, rgba(5,5,7,0.85) 0%, rgba(5,5,7,0) 100%)',
          pointerEvents: 'auto',
        }}
      >
        {/* Scroll Helper */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#71717a' }}>
          <Mouse size={16} color="#a1a1aa" />
          <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>
            SCROLL TO ADVANCE // 3D SLIDE VIEWPORT
          </span>
        </div>

        {/* Up / Down Navigation Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginRight: '240px' }}>
          <button
            onClick={onPrev}
            disabled={currentSection === 0}
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: currentSection === 0 ? '#52525b' : '#ffffff',
              cursor: currentSection === 0 ? 'not-allowed' : 'pointer',
            }}
          >
            <ChevronUp size={16} />
          </button>

          <button
            onClick={onNext}
            disabled={currentSection === totalSections - 1}
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: currentSection === totalSections - 1 ? '#52525b' : '#ffffff',
              cursor: currentSection === totalSections - 1 ? 'not-allowed' : 'pointer',
            }}
          >
            <ChevronDown size={16} />
          </button>
        </div>
      </footer>
    </>
  )
}
