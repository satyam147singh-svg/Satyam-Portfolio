import React, { useState } from 'react'
import { ExternalLink, Layers, Sparkles, X, Eye } from 'lucide-react'
import { GithubIcon } from './SocialIcons'

export default function ProjectsSection({ projects, onOpenAdmin }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeModalProject, setActiveModalProject] = useState(null)

  const projectList = projects && projects.length > 0 ? projects : []

  const categories = ['All', ...Array.from(new Set(projectList.map((p) => p.category).filter(Boolean)))]

  const filteredProjects =
    selectedCategory === 'All'
      ? projectList
      : projectList.filter((p) => p.category === selectedCategory)

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
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <div className="pill-badge" style={{ marginBottom: '12px' }}>
          <Layers size={13} color="#ffffff" />
          <span>STAGE 04 // FEATURED BUILDS</span>
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 3.8vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
          }}
        >
          Featured <span className="gradient-text">Works & Applications</span>
        </h2>
        <p
          style={{
            maxWidth: '580px',
            margin: '8px auto 0 auto',
            color: 'var(--text-muted)',
            fontSize: '0.94rem',
          }}
        >
          Selected commercial websites, 3D interactive web applications, and full-stack systems crafted by Satyam.
        </p>
      </div>

      {/* Category Pills */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '26px',
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

      {/* Projects Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '22px',
          width: '100%',
        }}
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-panel card-shine"
            style={{
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
            }}
            onClick={() => setActiveModalProject(project)}
          >
            {/* Project Image Preview */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '180px',
                overflow: 'hidden',
                backgroundColor: '#0a0a0d',
              }}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(5, 5, 8, 0.85)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '999px',
                  padding: '4px 10px',
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#ffffff',
                }}
              >
                {project.category}
              </div>

              {project.featured && (
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: '#ffffff',
                    color: '#000000',
                    borderRadius: '999px',
                    padding: '3px 8px',
                    fontSize: '0.66rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <Sparkles size={10} /> FEATURED
                </div>
              )}
            </div>

            {/* Project Body */}
            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  marginBottom: '8px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#ffffff',
                  }}
                >
                  {project.title}
                </h3>
                <Eye size={16} color="#71717a" />
              </div>

              <p
                style={{
                  fontSize: '0.84rem',
                  lineHeight: 1.55,
                  color: 'var(--text-muted)',
                  marginBottom: '16px',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  flex: 1,
                }}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                {(project.tags || []).slice(0, 4).map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '6px',
                      padding: '3px 8px',
                      fontSize: '0.7rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#d4d4d8',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  href={project.liveUrl || '#'}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    textDecoration: 'none',
                  }}
                >
                  <ExternalLink size={14} />
                  <span>Live Demo</span>
                </a>

                <a
                  href={project.githubUrl || '#'}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.82rem',
                    color: '#a1a1aa',
                    textDecoration: 'none',
                  }}
                >
                  <GithubIcon size={14} />
                  <span>Source</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DETAILED PROJECT MODAL POPUP */}
      {activeModalProject && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="glass-panel"
            style={{
              maxWidth: '680px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              borderRadius: '24px',
              padding: '30px',
              position: 'relative',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9), 0 0 40px rgba(255,255,255,0.1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveModalProject(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>

            <img
              src={activeModalProject.imageUrl}
              alt={activeModalProject.title}
              style={{
                width: '100%',
                height: '240px',
                objectFit: 'cover',
                borderRadius: '16px',
                marginBottom: '20px',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            />

            <div className="pill-badge" style={{ marginBottom: '12px' }}>
              <span>{activeModalProject.category}</span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.6rem',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '10px',
              }}
            >
              {activeModalProject.title}
            </h3>

            <p
              style={{
                fontSize: '0.94rem',
                lineHeight: 1.65,
                color: 'var(--text-muted)',
                marginBottom: '20px',
              }}
            >
              {activeModalProject.description}
            </p>

            {activeModalProject.metrics && (
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  marginBottom: '20px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: '#ffffff',
                }}
              >
                ⚡ Architecture Highlights: {activeModalProject.metrics}
              </div>
            )}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
              {(activeModalProject.tags || []).map((t, i) => (
                <span
                  key={i}
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '8px',
                    padding: '4px 10px',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#ffffff',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href={activeModalProject.liveUrl || '#'}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ flex: 1 }}
              >
                <ExternalLink size={16} />
                <span>Open Live Application</span>
              </a>

              <a
                href={activeModalProject.githubUrl || '#'}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ flex: 1 }}
              >
                <GithubIcon size={16} />
                <span>View GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
