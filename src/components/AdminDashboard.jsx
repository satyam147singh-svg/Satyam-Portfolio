import React, { useState, useEffect } from 'react'
import {
  X,
  Lock,
  Plus,
  Trash2,
  Edit2,
  Save,
  CheckCircle2,
  AlertCircle,
  FolderGit2,
  User,
  Zap,
  Briefcase,
  Mail,
  RefreshCw,
  LogOut,
  ExternalLink,
} from 'lucide-react'

export default function AdminDashboard({ isOpen, onClose, onDataUpdated }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [pinInput, setPinInput] = useState('')
  const [authError, setAuthError] = useState('')
  const [activeTab, setActiveTab] = useState('projects')
  const [loading, setLoading] = useState(false)
  const [successNotice, setSuccessNotice] = useState('')
  const [errorNotice, setErrorNotice] = useState('')

  // State for all data
  const [portfolioData, setPortfolioData] = useState({
    profile: {},
    projects: [],
    skills: [],
    services: [],
    messages: [],
  })

  // Edit / Add Project form state
  const [editingProject, setEditingProject] = useState(null)
  const [isAddingProject, setIsAddingProject] = useState(false)
  const [projectForm, setProjectForm] = useState({
    title: '',
    category: 'Web Apps',
    description: '',
    imageUrl: '',
    tags: '',
    liveUrl: '',
    githubUrl: '',
    featured: false,
    metrics: '',
  })

  // Edit Profile form state
  const [profileForm, setProfileForm] = useState({})

  // Skills / Services new forms
  const [newSkill, setNewSkill] = useState({ name: '', category: 'Frontend', level: 90, icon: 'Code2' })
  const [newService, setNewService] = useState({ title: '', description: '', icon: 'Sparkles', tags: '' })

  // Fetch current backend data
  const loadBackendData = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/portfolio')
      const json = await res.json()
      if (json.success && json.data) {
        setPortfolioData(json.data)
        setProfileForm(json.data.profile || {})
      }
    } catch (e) {
      console.error('Error loading portfolio data:', e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      loadBackendData()
    }
  }, [isOpen])

  // Handle PIN Login
  const handleLogin = async (e) => {
    e.preventDefault()
    setAuthError('')
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin: pinInput }),
      })
      const json = await res.json()
      if (res.ok && json.success) {
        setIsAuthenticated(true)
        setPinInput('')
      } else {
        setAuthError(json.message || 'Incorrect Admin PIN')
      }
    } catch (err) {
      // Local fallback for offline mode
      if (pinInput === 'admin123' || pinInput === 'satyam') {
        setIsAuthenticated(true)
        setPinInput('')
      } else {
        setAuthError('Invalid Admin PIN (Default: admin123)')
      }
    }
  }

  const showSuccess = (msg) => {
    setSuccessNotice(msg)
    setTimeout(() => setSuccessNotice(''), 4000)
    if (onDataUpdated) onDataUpdated()
  }

  // --- SAVE PROFILE ---
  const handleSaveProfile = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/portfolio/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileForm),
      })
      const json = await res.json()
      if (json.success) {
        showSuccess('Profile updated successfully!')
        loadBackendData()
      }
    } catch (err) {
      setErrorNotice('Failed to update profile')
    } finally {
      setLoading(false)
    }
  }

  // --- ADD / EDIT PROJECT ---
  const handleOpenAddProject = () => {
    setEditingProject(null)
    setProjectForm({
      title: '',
      category: 'Web Apps',
      description: '',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      tags: 'React, Node.js, Express',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/satyamrajpoot',
      featured: false,
      metrics: 'Modern Architecture',
    })
    setIsAddingProject(true)
  }

  const handleOpenEditProject = (proj) => {
    setEditingProject(proj)
    setProjectForm({
      title: proj.title,
      category: proj.category || 'Web Apps',
      description: proj.description || '',
      imageUrl: proj.imageUrl || '',
      tags: Array.isArray(proj.tags) ? proj.tags.join(', ') : proj.tags || '',
      liveUrl: proj.liveUrl || '',
      githubUrl: proj.githubUrl || '',
      featured: Boolean(proj.featured),
      metrics: proj.metrics || '',
    })
    setIsAddingProject(true)
  }

  const handleSaveProject = async (e) => {
    e.preventDefault()
    setLoading(true)
    const payload = {
      ...projectForm,
      tags: projectForm.tags.split(',').map((t) => t.trim()).filter(Boolean),
    }

    try {
      let res
      if (editingProject) {
        res = await fetch(`/api/portfolio/projects/${editingProject.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      } else {
        res = await fetch('/api/portfolio/projects', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      }

      const json = await res.json()
      if (res.ok && json.success) {
        showSuccess(editingProject ? 'Project updated!' : 'New project added!')
        setIsAddingProject(false)
        setEditingProject(null)
        loadBackendData()
      }
    } catch (err) {
      setErrorNotice('Error saving project')
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteProject = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return
    setLoading(true)
    try {
      const res = await fetch(`/api/portfolio/projects/${id}`, { method: 'DELETE' })
      const json = await res.json()
      if (json.success) {
        showSuccess('Project deleted')
        loadBackendData()
      }
    } catch (err) {
      setErrorNotice('Error deleting project')
    } finally {
      setLoading(false)
    }
  }

  // --- SKILLS ---
  const handleAddSkill = async (e) => {
    e.preventDefault()
    if (!newSkill.name) return
    try {
      const res = await fetch('/api/portfolio/skills', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSkill),
      })
      const json = await res.json()
      if (json.success) {
        showSuccess('Skill added!')
        setNewSkill({ name: '', category: 'Frontend', level: 90, icon: 'Code2' })
        loadBackendData()
      }
    } catch (err) {
      setErrorNotice('Error adding skill')
    }
  }

  const handleDeleteSkill = async (id) => {
    try {
      await fetch(`/api/portfolio/skills/${id}`, { method: 'DELETE' })
      showSuccess('Skill removed')
      loadBackendData()
    } catch (err) {
      setErrorNotice('Error removing skill')
    }
  }

  // --- SERVICES ---
  const handleAddService = async (e) => {
    e.preventDefault()
    if (!newService.title) return
    try {
      const res = await fetch('/api/portfolio/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...newService,
          tags: newService.tags.split(',').map((t) => t.trim()).filter(Boolean),
        }),
      })
      const json = await res.json()
      if (json.success) {
        showSuccess('Service added!')
        setNewService({ title: '', description: '', icon: 'Sparkles', tags: '' })
        loadBackendData()
      }
    } catch (err) {
      setErrorNotice('Error adding service')
    }
  }

  const handleDeleteService = async (id) => {
    try {
      await fetch(`/api/portfolio/services/${id}`, { method: 'DELETE' })
      showSuccess('Service removed')
      loadBackendData()
    } catch (err) {
      setErrorNotice('Error removing service')
    }
  }

  // --- MESSAGES ---
  const handleDeleteMessage = async (id) => {
    try {
      await fetch(`/api/portfolio/messages/${id}`, { method: 'DELETE' })
      showSuccess('Message deleted')
      loadBackendData()
    } catch (err) {
      setErrorNotice('Error deleting message')
    }
  }

  if (!isOpen) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        backgroundColor: 'rgba(5, 5, 8, 0.95)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '1100px',
          height: '90vh',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          overflow: 'hidden',
          boxShadow: '0 30px 100px rgba(0,0,0,0.9), 0 0 50px rgba(255,255,255,0.08)',
        }}
      >
        {/* Top Navbar */}
        <div
          style={{
            padding: '18px 26px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(10, 10, 14, 0.8)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#000000',
                fontWeight: 800,
                fontSize: '0.82rem',
              }}
            >
              SR
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.98rem', color: '#ffffff' }}>
                SATYAM RAJPOOT — ADMIN DASHBOARD
              </div>
              <div style={{ fontSize: '0.72rem', color: '#71717a', fontFamily: 'var(--font-mono)' }}>
                Full Backend Content & Project Management System
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {isAuthenticated && (
              <button
                onClick={loadBackendData}
                className="btn-secondary"
                style={{ padding: '6px 12px', fontSize: '0.78rem' }}
                title="Reload Data"
              >
                <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
                <span>Sync</span>
              </button>
            )}

            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Notice Alerts */}
        {successNotice && (
          <div
            style={{
              background: 'rgba(16, 185, 129, 0.15)',
              borderBottom: '1px solid rgba(16, 185, 129, 0.3)',
              padding: '10px 24px',
              color: '#34d399',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <CheckCircle2 size={16} />
            <span>{successNotice}</span>
          </div>
        )}

        {/* AUTH SCREEN (if not logged in) */}
        {!isAuthenticated ? (
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
            }}
          >
            <div
              style={{
                maxWidth: '400px',
                width: '100%',
                background: 'rgba(20, 20, 26, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '20px',
                padding: '36px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.07)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                }}
              >
                <Lock size={24} color="#ffffff" />
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                Admin Authentication
              </h3>
              <p style={{ fontSize: '0.84rem', color: '#a1a1aa', marginBottom: '24px' }}>
                Please enter your administrator PIN to modify projects, profile, skills, and manage messages.
              </p>

              {authError && (
                <div
                  style={{
                    background: 'rgba(239, 68, 68, 0.15)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    borderRadius: '10px',
                    padding: '8px 12px',
                    color: '#f87171',
                    fontSize: '0.82rem',
                    marginBottom: '18px',
                  }}
                >
                  {authError}
                </div>
              )}

              <form onSubmit={handleLogin}>
                <input
                  type="password"
                  placeholder="Enter PIN (Default: admin123)"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  autoFocus
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '12px',
                    padding: '14px',
                    color: '#ffffff',
                    fontSize: '1.1rem',
                    textAlign: 'center',
                    letterSpacing: '0.2em',
                    outline: 'none',
                    marginBottom: '18px',
                  }}
                />

                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  <span>Access Dashboard</span>
                </button>
              </form>

              <div
                style={{
                  marginTop: '18px',
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#71717a',
                }}
              >
                Default Master PIN: <code style={{ color: '#ffffff' }}>admin123</code>
              </div>
            </div>
          </div>
        ) : (
          /* MAIN DASHBOARD CONTENT */
          <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
            {/* Sidebar Tabs */}
            <div
              style={{
                width: '230px',
                borderRight: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(12, 12, 16, 0.6)',
                padding: '20px 14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <button
                onClick={() => {
                  setActiveTab('projects')
                  setIsAddingProject(false)
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  background: activeTab === 'projects' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                  color: activeTab === 'projects' ? '#ffffff' : '#a1a1aa',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  textAlign: 'left',
                }}
              >
                <FolderGit2 size={16} />
                <span>Projects ({portfolioData.projects?.length || 0})</span>
              </button>

              <button
                onClick={() => setActiveTab('profile')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  background: activeTab === 'profile' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                  color: activeTab === 'profile' ? '#ffffff' : '#a1a1aa',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  textAlign: 'left',
                }}
              >
                <User size={16} />
                <span>Profile & Bio</span>
              </button>

              <button
                onClick={() => setActiveTab('skills')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  background: activeTab === 'skills' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                  color: activeTab === 'skills' ? '#ffffff' : '#a1a1aa',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  textAlign: 'left',
                }}
              >
                <Zap size={16} />
                <span>Skills ({portfolioData.skills?.length || 0})</span>
              </button>

              <button
                onClick={() => setActiveTab('services')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  background: activeTab === 'services' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                  color: activeTab === 'services' ? '#ffffff' : '#a1a1aa',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  textAlign: 'left',
                }}
              >
                <Briefcase size={16} />
                <span>Services ({portfolioData.services?.length || 0})</span>
              </button>

              <button
                onClick={() => setActiveTab('messages')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  background: activeTab === 'messages' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                  color: activeTab === 'messages' ? '#ffffff' : '#a1a1aa',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  textAlign: 'left',
                }}
              >
                <Mail size={16} />
                <span>Inbox ({portfolioData.messages?.length || 0})</span>
              </button>

              <div style={{ marginTop: 'auto' }}>
                <button
                  onClick={() => setIsAuthenticated(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 16px',
                    borderRadius: '10px',
                    background: 'transparent',
                    color: '#ef4444',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.82rem',
                    width: '100%',
                  }}
                >
                  <LogOut size={16} />
                  <span>Lock Dashboard</span>
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div style={{ flex: 1, padding: '28px', overflowY: 'auto' }}>
              {/* TAB 1: PROJECTS */}
              {activeTab === 'projects' && (
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '22px',
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>Manage Projects</h3>
                      <p style={{ fontSize: '0.84rem', color: '#a1a1aa' }}>
                        Add, edit, or remove your portfolio work. All edits reflect live on the frontend.
                      </p>
                    </div>

                    {!isAddingProject && (
                      <button onClick={handleOpenAddProject} className="btn-primary">
                        <Plus size={16} />
                        <span>Add New Work</span>
                      </button>
                    )}
                  </div>

                  {/* Add / Edit Form */}
                  {isAddingProject ? (
                    <div
                      className="glass-panel"
                      style={{ padding: '24px', borderRadius: '16px', marginBottom: '24px' }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '16px',
                        }}
                      >
                        <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#ffffff' }}>
                          {editingProject ? 'Edit Project' : 'Create New Project'}
                        </h4>
                        <button
                          onClick={() => setIsAddingProject(false)}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#a1a1aa',
                            cursor: 'pointer',
                          }}
                        >
                          <X size={18} />
                        </button>
                      </div>

                      <form onSubmit={handleSaveProject} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
                          <div>
                            <label style={{ display: 'block', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#a1a1aa', marginBottom: '4px' }}>
                              PROJECT TITLE *
                            </label>
                            <input
                              type="text"
                              required
                              value={projectForm.title}
                              onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                              style={{
                                width: '100%',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.12)',
                                borderRadius: '8px',
                                padding: '10px 12px',
                                color: '#ffffff',
                                outline: 'none',
                              }}
                            />
                          </div>

                          <div>
                            <label style={{ display: 'block', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#a1a1aa', marginBottom: '4px' }}>
                              CATEGORY
                            </label>
                            <select
                              value={projectForm.category}
                              onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                              style={{
                                width: '100%',
                                background: '#18181b',
                                border: '1px solid rgba(255,255,255,0.12)',
                                borderRadius: '8px',
                                padding: '10px 12px',
                                color: '#ffffff',
                                outline: 'none',
                              }}
                            >
                              <option value="Web Apps">Web Apps</option>
                              <option value="3D Websites">3D Websites</option>
                              <option value="Full Stack">Full Stack</option>
                              <option value="Mobile UI">Mobile UI</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#a1a1aa', marginBottom: '4px' }}>
                            IMAGE URL *
                          </label>
                          <input
                            type="text"
                            required
                            value={projectForm.imageUrl}
                            onChange={(e) => setProjectForm({ ...projectForm, imageUrl: e.target.value })}
                            placeholder="https://images.unsplash.com/..."
                            style={{
                              width: '100%',
                              background: 'rgba(255,255,255,0.05)',
                              border: '1px solid rgba(255,255,255,0.12)',
                              borderRadius: '8px',
                              padding: '10px 12px',
                              color: '#ffffff',
                              outline: 'none',
                            }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#a1a1aa', marginBottom: '4px' }}>
                            DESCRIPTION
                          </label>
                          <textarea
                            rows={3}
                            value={projectForm.description}
                            onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                            style={{
                              width: '100%',
                              background: 'rgba(255,255,255,0.05)',
                              border: '1px solid rgba(255,255,255,0.12)',
                              borderRadius: '8px',
                              padding: '10px 12px',
                              color: '#ffffff',
                              outline: 'none',
                              resize: 'none',
                            }}
                          />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                          <div>
                            <label style={{ display: 'block', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#a1a1aa', marginBottom: '4px' }}>
                              TECH TAGS (Comma separated)
                            </label>
                            <input
                              type="text"
                              value={projectForm.tags}
                              onChange={(e) => setProjectForm({ ...projectForm, tags: e.target.value })}
                              placeholder="React, Three.js, Node.js"
                              style={{
                                width: '100%',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.12)',
                                borderRadius: '8px',
                                padding: '10px 12px',
                                color: '#ffffff',
                                outline: 'none',
                              }}
                            />
                          </div>

                          <div>
                            <label style={{ display: 'block', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#a1a1aa', marginBottom: '4px' }}>
                              LIVE DEMO URL
                            </label>
                            <input
                              type="text"
                              value={projectForm.liveUrl}
                              onChange={(e) => setProjectForm({ ...projectForm, liveUrl: e.target.value })}
                              style={{
                                width: '100%',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.12)',
                                borderRadius: '8px',
                                padding: '10px 12px',
                                color: '#ffffff',
                                outline: 'none',
                              }}
                            />
                          </div>

                          <div>
                            <label style={{ display: 'block', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#a1a1aa', marginBottom: '4px' }}>
                              GITHUB URL
                            </label>
                            <input
                              type="text"
                              value={projectForm.githubUrl}
                              onChange={(e) => setProjectForm({ ...projectForm, githubUrl: e.target.value })}
                              style={{
                                width: '100%',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.12)',
                                borderRadius: '8px',
                                padding: '10px 12px',
                                color: '#ffffff',
                                outline: 'none',
                              }}
                            />
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '6px' }}>
                          <input
                            type="checkbox"
                            id="featuredCheck"
                            checked={projectForm.featured}
                            onChange={(e) => setProjectForm({ ...projectForm, featured: e.target.checked })}
                            style={{ cursor: 'pointer', width: '16px', height: '16px' }}
                          />
                          <label htmlFor="featuredCheck" style={{ fontSize: '0.86rem', color: '#ffffff', cursor: 'pointer' }}>
                            Mark as Featured Work
                          </label>
                        </div>

                        <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                          <button type="submit" className="btn-primary" disabled={loading}>
                            <Save size={16} />
                            <span>{editingProject ? 'Save Changes' : 'Publish Project'}</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setIsAddingProject(false)}
                            className="btn-secondary"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  ) : null}

                  {/* Existing Projects List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {(portfolioData.projects || []).map((proj) => (
                      <div
                        key={proj.id}
                        className="glass-panel"
                        style={{
                          padding: '16px 20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '16px',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                          <img
                            src={proj.imageUrl}
                            alt={proj.title}
                            style={{
                              width: '60px',
                              height: '45px',
                              borderRadius: '8px',
                              objectFit: 'cover',
                            }}
                          />
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span style={{ fontWeight: 700, color: '#ffffff' }}>{proj.title}</span>
                              <span
                                style={{
                                  fontSize: '0.68rem',
                                  fontFamily: 'var(--font-mono)',
                                  background: 'rgba(255,255,255,0.08)',
                                  padding: '2px 6px',
                                  borderRadius: '4px',
                                  color: '#a1a1aa',
                                }}
                              >
                                {proj.category}
                              </span>
                              {proj.featured && (
                                <span
                                  style={{
                                    fontSize: '0.64rem',
                                    fontWeight: 700,
                                    background: '#ffffff',
                                    color: '#000000',
                                    padding: '1px 6px',
                                    borderRadius: '4px',
                                  }}
                                >
                                  FEATURED
                                </span>
                              )}
                            </div>
                            <div style={{ fontSize: '0.78rem', color: '#71717a' }}>
                              {proj.tags?.slice(0, 3).join(', ')}
                            </div>
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <button
                            onClick={() => handleOpenEditProject(proj)}
                            style={{
                              background: 'rgba(255, 255, 255, 0.08)',
                              border: '1px solid rgba(255, 255, 255, 0.12)',
                              borderRadius: '8px',
                              padding: '8px 12px',
                              color: '#ffffff',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              fontSize: '0.78rem',
                            }}
                          >
                            <Edit2 size={13} />
                            <span>Edit</span>
                          </button>

                          <button
                            onClick={() => handleDeleteProject(proj.id)}
                            style={{
                              background: 'rgba(239, 68, 68, 0.15)',
                              border: '1px solid rgba(239, 68, 68, 0.25)',
                              borderRadius: '8px',
                              padding: '8px 10px',
                              color: '#f87171',
                              cursor: 'pointer',
                            }}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 2: PROFILE */}
              {activeTab === 'profile' && (
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
                    Profile & Branding Content
                  </h3>
                  <p style={{ fontSize: '0.84rem', color: '#a1a1aa', marginBottom: '24px' }}>
                    Edit your name, headline, bio, experience counters, and contact details.
                  </p>

                  <form onSubmit={handleSaveProfile} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#a1a1aa', marginBottom: '4px' }}>
                          FULL NAME
                        </label>
                        <input
                          type="text"
                          value={profileForm.name || ''}
                          onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                          style={{
                            width: '100%',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            borderRadius: '8px',
                            padding: '10px 12px',
                            color: '#ffffff',
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#a1a1aa', marginBottom: '4px' }}>
                          PRIMARY TITLE
                        </label>
                        <input
                          type="text"
                          value={profileForm.role || ''}
                          onChange={(e) => setProfileForm({ ...profileForm, role: e.target.value })}
                          style={{
                            width: '100%',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            borderRadius: '8px',
                            padding: '10px 12px',
                            color: '#ffffff',
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#a1a1aa', marginBottom: '4px' }}>
                          SECONDARY SUBTITLE
                        </label>
                        <input
                          type="text"
                          value={profileForm.subRole || ''}
                          onChange={(e) => setProfileForm({ ...profileForm, subRole: e.target.value })}
                          style={{
                            width: '100%',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            borderRadius: '8px',
                            padding: '10px 12px',
                            color: '#ffffff',
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#a1a1aa', marginBottom: '4px' }}>
                        HERO TAGLINE
                      </label>
                      <input
                        type="text"
                        value={profileForm.tagline || ''}
                        onChange={(e) => setProfileForm({ ...profileForm, tagline: e.target.value })}
                        style={{
                          width: '100%',
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.12)',
                          borderRadius: '8px',
                          padding: '10px 12px',
                          color: '#ffffff',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#a1a1aa', marginBottom: '4px' }}>
                        ABOUT BIO
                      </label>
                      <textarea
                        rows={4}
                        value={profileForm.bio || ''}
                        onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
                        style={{
                          width: '100%',
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.12)',
                          borderRadius: '8px',
                          padding: '10px 12px',
                          color: '#ffffff',
                          resize: 'none',
                        }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#a1a1aa', marginBottom: '4px' }}>
                          EMAIL
                        </label>
                        <input
                          type="email"
                          value={profileForm.email || ''}
                          onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                          style={{
                            width: '100%',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            borderRadius: '8px',
                            padding: '10px 12px',
                            color: '#ffffff',
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#a1a1aa', marginBottom: '4px' }}>
                          PHONE / WHATSAPP
                        </label>
                        <input
                          type="text"
                          value={profileForm.phone || ''}
                          onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                          style={{
                            width: '100%',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            borderRadius: '8px',
                            padding: '10px 12px',
                            color: '#ffffff',
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#a1a1aa', marginBottom: '4px' }}>
                          AVAILABILITY STATUS
                        </label>
                        <input
                          type="text"
                          value={profileForm.status || ''}
                          onChange={(e) => setProfileForm({ ...profileForm, status: e.target.value })}
                          style={{
                            width: '100%',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            borderRadius: '8px',
                            padding: '10px 12px',
                            color: '#ffffff',
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ marginTop: '10px' }}>
                      <button type="submit" className="btn-primary" disabled={loading}>
                        <Save size={16} />
                        <span>Update Profile Settings</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* TAB 3: SKILLS */}
              {activeTab === 'skills' && (
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
                    Skills Manager
                  </h3>
                  <p style={{ fontSize: '0.84rem', color: '#a1a1aa', marginBottom: '22px' }}>
                    Add skills with proficiency levels.
                  </p>

                  {/* Add skill strip */}
                  <form
                    onSubmit={handleAddSkill}
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      padding: '16px',
                      borderRadius: '12px',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '12px',
                      alignItems: 'center',
                      marginBottom: '24px',
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Skill Name (e.g. Next.js)"
                      required
                      value={newSkill.name}
                      onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                      style={{
                        flex: 1,
                        minWidth: '160px',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '8px',
                        padding: '10px 12px',
                        color: '#ffffff',
                      }}
                    />

                    <select
                      value={newSkill.category}
                      onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
                      style={{
                        background: '#18181b',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '8px',
                        padding: '10px 12px',
                        color: '#ffffff',
                      }}
                    >
                      <option value="Frontend">Frontend</option>
                      <option value="Backend">Backend</option>
                      <option value="Creative & 3D">Creative & 3D</option>
                      <option value="Database">Database</option>
                      <option value="Tools">Tools</option>
                    </select>

                    <input
                      type="number"
                      min="10"
                      max="100"
                      value={newSkill.level}
                      onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value })}
                      placeholder="Level %"
                      style={{
                        width: '80px',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '8px',
                        padding: '10px 12px',
                        color: '#ffffff',
                      }}
                    />

                    <button type="submit" className="btn-primary" style={{ padding: '10px 18px' }}>
                      <Plus size={16} />
                      <span>Add</span>
                    </button>
                  </form>

                  {/* Skills List */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px' }}>
                    {(portfolioData.skills || []).map((sk) => (
                      <div
                        key={sk.id}
                        className="glass-panel"
                        style={{
                          padding: '12px 16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#ffffff' }}>{sk.name}</div>
                          <div style={{ fontSize: '0.72rem', color: '#71717a' }}>
                            {sk.category} • {sk.level}%
                          </div>
                        </div>
                        <button
                          onClick={() => handleDeleteSkill(sk.id)}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#f87171',
                            cursor: 'pointer',
                          }}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: SERVICES */}
              {activeTab === 'services' && (
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
                    Services & Offerings
                  </h3>
                  <p style={{ fontSize: '0.84rem', color: '#a1a1aa', marginBottom: '22px' }}>
                    Manage the services you offer to clients.
                  </p>

                  <form
                    onSubmit={handleAddService}
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      padding: '18px',
                      borderRadius: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      marginBottom: '24px',
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Service Title (e.g. AI-Powered Web Apps)"
                      required
                      value={newService.title}
                      onChange={(e) => setNewService({ ...newService, title: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '8px',
                        padding: '10px 12px',
                        color: '#ffffff',
                      }}
                    />

                    <textarea
                      placeholder="Service Description..."
                      rows={2}
                      value={newService.description}
                      onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '8px',
                        padding: '10px 12px',
                        color: '#ffffff',
                        resize: 'none',
                      }}
                    />

                    <input
                      type="text"
                      placeholder="Tags (e.g. React, Next.js, OpenAI)"
                      value={newService.tags}
                      onChange={(e) => setNewService({ ...newService, tags: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '8px',
                        padding: '10px 12px',
                        color: '#ffffff',
                      }}
                    />

                    <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                      <Plus size={16} />
                      <span>Add Service</span>
                    </button>
                  </form>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {(portfolioData.services || []).map((srv) => (
                      <div
                        key={srv.id}
                        className="glass-panel"
                        style={{
                          padding: '16px 20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '16px',
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>{srv.title}</div>
                          <div style={{ fontSize: '0.82rem', color: '#a1a1aa' }}>{srv.description}</div>
                        </div>
                        <button
                          onClick={() => handleDeleteService(srv.id)}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#f87171',
                            cursor: 'pointer',
                          }}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: MESSAGES / INBOX */}
              {activeTab === 'messages' && (
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
                    Contact Inquiries ({portfolioData.messages?.length || 0})
                  </h3>
                  <p style={{ fontSize: '0.84rem', color: '#a1a1aa', marginBottom: '22px' }}>
                    Direct messages sent by visitors through your portfolio contact form.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {(!portfolioData.messages || portfolioData.messages.length === 0) && (
                      <div
                        style={{
                          textAlign: 'center',
                          padding: '40px',
                          color: '#71717a',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        No messages received yet.
                      </div>
                    )}

                    {(portfolioData.messages || []).map((msg) => (
                      <div
                        key={msg.id}
                        className="glass-panel"
                        style={{
                          padding: '20px 24px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '10px',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <div>
                            <span style={{ fontWeight: 700, color: '#ffffff', fontSize: '1rem' }}>{msg.name}</span>
                            <span style={{ margin: '0 8px', color: '#52525b' }}>•</span>
                            <a
                              href={`mailto:${msg.email}`}
                              style={{ color: '#a1a1aa', fontSize: '0.86rem', textDecoration: 'none' }}
                            >
                              {msg.email}
                            </a>
                          </div>

                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#71717a' }}>
                              {msg.date}
                            </span>
                            <button
                              onClick={() => handleDeleteMessage(msg.id)}
                              style={{
                                background: 'transparent',
                                border: 'none',
                                color: '#f87171',
                                cursor: 'pointer',
                              }}
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </div>

                        <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#ffffff' }}>
                          Subject: {msg.subject}
                        </div>

                        <p
                          style={{
                            fontSize: '0.88rem',
                            lineHeight: 1.6,
                            color: '#d4d4d8',
                            background: 'rgba(255,255,255,0.02)',
                            padding: '12px',
                            borderRadius: '8px',
                          }}
                        >
                          {msg.message}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
