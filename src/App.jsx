import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Sparkles } from 'lucide-react'
import NavigationHUD from './components/NavigationHUD'
import ThreeBoyGuide from './components/ThreeBoyGuide'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'
import AdminDashboard from './components/AdminDashboard'

// Comprehensive fallback data
const INITIAL_FALLBACK_DATA = {
  profile: {
    name: 'Satyam Rajpoot',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    role: 'Creative Web Developer',
    subRole: 'Full-Stack Architect & 3D Interactive UI Crafter',
    tagline: 'Crafting next-generation 3D interactive web experiences and robust full-stack applications with obsessive attention to design and performance.',
    bio: 'Hello! I am Satyam Rajpoot, a passionate Web Developer with 3+ years of experience turning complex ideas into sleek, fluid digital realities. I specialize in modern JavaScript, React, Three.js, and high-performance Node.js backends.',
    location: 'India',
    experienceYears: '3+',
    completedProjects: '35+',
    satisfiedClients: '28+',
    email: 'satyamrajpoot.dev@gmail.com',
    phone: '+91 98765 43210',
    status: 'Available for High-Impact Roles & Freelance',
    socials: {
      github: 'https://github.com/satyamrajpoot',
      linkedin: 'https://linkedin.com/in/satyamrajpoot',
      twitter: 'https://x.com/satyamrajpoot',
    },
  },
  projects: [
    {
      id: 'proj-1',
      title: 'AuraSphere 3D Commerce',
      category: '3D Websites',
      description: 'An award-winning luxury 3D e-commerce showcase featuring interactive WebGL product customization and 60FPS fluid physics.',
      imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      tags: ['React', 'Three.js', 'WebGL', 'CSS Modules'],
      liveUrl: 'https://aurasphere-demo.vercel.app',
      githubUrl: 'https://github.com/satyamrajpoot/aurasphere-3d',
      featured: true,
      metrics: '60 FPS 3D Engine • 99 Performance Score',
    },
    {
      id: 'proj-2',
      title: 'NexusAI Cloud Analytics',
      category: 'Full Stack',
      description: 'Enterprise-grade SaaS dashboard with real-time AI telemetry, custom workflow builders, and interactive charting.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
      liveUrl: 'https://nexus-ai-cloud.vercel.app',
      githubUrl: 'https://github.com/satyamrajpoot/nexus-ai-cloud',
      featured: true,
      metrics: 'Real-time WebSockets • 10k+ Events/sec',
    },
    {
      id: 'proj-3',
      title: 'VortexPay Digital Banking',
      category: 'Web Apps',
      description: 'Sleek dark-mode digital banking web application with instant cross-border transfers and virtual card issuing.',
      imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
      tags: ['React', 'TypeScript', 'REST API', 'Tailwind'],
      liveUrl: 'https://vortexpay-demo.vercel.app',
      githubUrl: 'https://github.com/satyamrajpoot/vortexpay-fintech',
      featured: true,
      metrics: 'End-to-end Encryption • Sub-100ms APIs',
    },
    {
      id: 'proj-4',
      title: 'CyberFolio Obsidian',
      category: '3D Websites',
      description: 'A high-concept monochrome 3D portfolio template designed for creative directors with spatial audio effects.',
      imageUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
      tags: ['Three.js', 'React', 'GSAP Scroll', 'Audio API'],
      liveUrl: 'https://cyberfolio-obsidian.vercel.app',
      githubUrl: 'https://github.com/satyamrajpoot/cyberfolio-obsidian',
      featured: false,
      metrics: 'Cinematic Shaders • Adaptive Dark Theme',
    },
    {
      id: 'proj-5',
      title: 'Krypton DAO Protocol',
      category: 'Web Apps',
      description: 'Decentralized autonomous organization portal featuring proposal voting, treasury telemetry, and modern glassmorphism.',
      imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
      tags: ['React', 'Ethers.js', 'Web3 UI', 'Node.js'],
      liveUrl: 'https://krypton-dao.vercel.app',
      githubUrl: 'https://github.com/satyamrajpoot/krypton-dao-ui',
      featured: false,
      metrics: 'Smart Contract Verified • Zero Gas Estimates',
    },
    {
      id: 'proj-6',
      title: 'PulseSync Team Workspaces',
      category: 'Full Stack',
      description: 'Collaborative project planner with real-time kanban boards, live multi-cursor presence, and sprint telemetry.',
      imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
      tags: ['React', 'Node.js', 'Socket.io', 'Express', 'SQLite'],
      liveUrl: 'https://pulsesync-work.vercel.app',
      githubUrl: 'https://github.com/satyamrajpoot/pulsesync-app',
      featured: true,
      metrics: 'Live Multiplayer • Offline Sync',
    },
  ],
  skills: [
    { id: 'sk-1', name: 'React.js & Next.js', category: 'Frontend', level: 95, icon: 'Code2' },
    { id: 'sk-2', name: 'JavaScript (ES6+) & TS', category: 'Frontend', level: 94, icon: 'FileCode' },
    { id: 'sk-3', name: 'Three.js & 3D WebGL', category: 'Creative & 3D', level: 88, icon: 'Layers' },
    { id: 'sk-4', name: 'Node.js & Express', category: 'Backend', level: 92, icon: 'Server' },
    { id: 'sk-5', name: 'RESTful APIs & Microservices', category: 'Backend', level: 93, icon: 'Cpu' },
    { id: 'sk-6', name: 'HTML5 & Modern CSS3', category: 'Frontend', level: 98, icon: 'Palette' },
    { id: 'sk-7', name: 'MongoDB & PostgreSQL', category: 'Database', level: 87, icon: 'Database' },
    { id: 'sk-8', name: 'UI/UX & Glassmorphism', category: 'Creative & 3D', level: 90, icon: 'Sparkles' },
    { id: 'sk-9', name: 'Git, GitHub & CI/CD', category: 'Tools', level: 92, icon: 'GitBranch' },
    { id: 'sk-10', name: 'Vite & Performance Tuning', category: 'Tools', level: 95, icon: 'Zap' },
  ],
  services: [
    {
      id: 'srv-1',
      title: 'Custom Web Applications',
      description: 'Architecting modern, lightning-fast Single Page Applications and Progressive Web Apps built with React and clean modular architecture.',
      icon: 'Monitor',
      tags: ['React', 'State Management', 'SPA', 'Clean Code'],
    },
    {
      id: 'srv-2',
      title: '3D & Interactive Web Experiences',
      description: 'Crafting unforgettable immersive 3D websites, particle systems, interactive avatars, and scroll-triggered spatial storytelling using Three.js.',
      icon: 'Box',
      tags: ['Three.js', 'WebGL', 'Scroll Animations', 'Shaders'],
    },
    {
      id: 'srv-3',
      title: 'Full-Stack Backend & REST APIs',
      description: 'Developing robust Node.js/Express backend architectures, authentication systems, reliable REST APIs, and database schemas.',
      icon: 'Server',
      tags: ['Node.js', 'Express', 'MongoDB', 'Security', 'APIs'],
    },
    {
      id: 'srv-4',
      title: 'Performance & Aesthetic Redesign',
      description: 'Transforming legacy websites into high-converting, luxury monochrome digital experiences with 90+ Lighthouse speed scores.',
      icon: 'Sparkles',
      tags: ['UI/UX Redesign', 'Lighthouse 95+', 'SEO', 'Micro-interactions'],
    },
  ],
}

const TOTAL_SECTIONS = 6

export default function App() {
  const [currentSection, setCurrentSection] = useState(0)
  const [portfolioData, setPortfolioData] = useState(INITIAL_FALLBACK_DATA)
  const [isAdminOpen, setIsAdminOpen] = useState(false)
  const isThrottled = useRef(false)
  const touchStartY = useRef(0)

  // 3D Guide Preference & Opt-in State
  const [guideEnabled, setGuideEnabled] = useState(() => {
    return localStorage.getItem('satyam_3d_guide_pref') === 'yes'
  })
  const [showGuidePrompt, setShowGuidePrompt] = useState(() => {
    return localStorage.getItem('satyam_3d_guide_pref') === null
  })

  const handleGuideChoice = (enable) => {
    setGuideEnabled(enable)
    setShowGuidePrompt(false)
    localStorage.setItem('satyam_3d_guide_pref', enable ? 'yes' : 'no')
  }

  const handleToggleGuide = () => {
    const nextVal = !guideEnabled
    setGuideEnabled(nextVal)
    setShowGuidePrompt(false)
    localStorage.setItem('satyam_3d_guide_pref', nextVal ? 'yes' : 'no')
  }

  // Fetch live portfolio data from backend API
  const fetchPortfolioData = useCallback(async () => {
    try {
      const res = await fetch('/api/portfolio')
      if (res.ok) {
        const json = await res.json()
        if (json.success && json.data) {
          setPortfolioData(json.data)
        }
      }
    } catch (err) {
      // Backend offline or running standalone: graceful fallback already active
    }
  }, [])

  useEffect(() => {
    fetchPortfolioData()
  }, [fetchPortfolioData])

  // Navigate to next section
  const handleNext = useCallback(() => {
    setCurrentSection((prev) => (prev < TOTAL_SECTIONS - 1 ? prev + 1 : prev))
  }, [])

  // Navigate to previous section
  const handlePrev = useCallback(() => {
    setCurrentSection((prev) => (prev > 0 ? prev - 1 : prev))
  }, [])

  // When section changes, reset scroll position to top
  useEffect(() => {
    const timer = setTimeout(() => {
      const activeSlide = document.querySelector('.section-slide.active')
      if (activeSlide) {
        activeSlide.scrollTop = 0
      }
    }, 30)
    return () => clearTimeout(timer)
  }, [currentSection])

  // Natural inner-content scroll aware wheel handler
  useEffect(() => {
    const handleWheel = (e) => {
      if (isAdminOpen) return

      // Find current active section slide element
      const activeSlide = document.querySelector('.section-slide.active')
      if (activeSlide) {
        const { scrollTop, scrollHeight, clientHeight } = activeSlide
        const isScrollable = scrollHeight > clientHeight + 8

        if (isScrollable) {
          if (e.deltaY > 0) {
            // Scrolling down: Only advance section if user has scrolled all the way to the bottom!
            const atBottom = scrollTop + clientHeight >= scrollHeight - 8
            if (!atBottom) {
              return // Continue natural scrolling inside this section
            }
          } else if (e.deltaY < 0) {
            // Scrolling up: Only advance to previous section if at the very top!
            const atTop = scrollTop <= 8
            if (!atTop) {
              return // Continue natural scrolling back up inside this section
            }
          }
        }
      }

      if (isThrottled.current) return

      if (e.deltaY > 25) {
        isThrottled.current = true
        handleNext()
        setTimeout(() => {
          isThrottled.current = false
        }, 650)
      } else if (e.deltaY < -25) {
        isThrottled.current = true
        handlePrev()
        setTimeout(() => {
          isThrottled.current = false
        }, 650)
      }
    }

    // Touch handlers for mobile
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchEnd = (e) => {
      if (isAdminOpen) return

      const activeSlide = document.querySelector('.section-slide.active')
      if (activeSlide) {
        const { scrollTop, scrollHeight, clientHeight } = activeSlide
        const isScrollable = scrollHeight > clientHeight + 8
        const deltaY = touchStartY.current - e.changedTouches[0].clientY

        if (isScrollable) {
          if (deltaY > 0 && scrollTop + clientHeight < scrollHeight - 15) {
            return
          }
          if (deltaY < 0 && scrollTop > 15) {
            return
          }
        }
      }

      if (isThrottled.current) return
      const deltaY = touchStartY.current - e.changedTouches[0].clientY
      if (deltaY > 40) {
        isThrottled.current = true
        handleNext()
        setTimeout(() => {
          isThrottled.current = false
        }, 650)
      } else if (deltaY < -40) {
        isThrottled.current = true
        handlePrev()
        setTimeout(() => {
          isThrottled.current = false
        }, 650)
      }
    }

    // Keyboard navigation
    const handleKeyDown = (e) => {
      if (isAdminOpen) return
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        const activeSlide = document.querySelector('.section-slide.active')
        if (activeSlide) {
          const { scrollTop, scrollHeight, clientHeight } = activeSlide
          if (scrollHeight > clientHeight + 8 && scrollTop + clientHeight < scrollHeight - 15) {
            return
          }
        }
        e.preventDefault()
        handleNext()
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        const activeSlide = document.querySelector('.section-slide.active')
        if (activeSlide) {
          const { scrollTop } = activeSlide
          if (scrollTop > 15) {
            return
          }
        }
        e.preventDefault()
        handlePrev()
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleNext, handlePrev, isAdminOpen])

  // Get slide CSS class
  const getSlideClass = (index) => {
    if (index === currentSection) return 'section-slide active'
    if (index < currentSection) return 'section-slide prev'
    return 'section-slide next'
  }

  return (
    <div className="presentation-viewport">
      {/* Background Gradients and Ambient Grid */}
      <div className="ambient-background">
        <div className="ambient-grid" />
      </div>

      {/* Top HUD & Bottom Navigation */}
      <NavigationHUD
        currentSection={currentSection}
        totalSections={TOTAL_SECTIONS}
        onSelectSection={(idx) => setCurrentSection(idx)}
        onNext={handleNext}
        onPrev={handlePrev}
        onOpenAdmin={() => setIsAdminOpen(true)}
        isGuideEnabled={guideEnabled}
        onToggleGuide={handleToggleGuide}
      />

      {/* Pinned Single-Stage Container */}
      <main className="stage-container">
        {/* SECTION 0: HERO */}
        <section className={getSlideClass(0)}>
          <HeroSection
            profile={portfolioData.profile}
            onExplore={() => setCurrentSection(3)}
            onContact={() => setCurrentSection(5)}
            onOpenAdmin={() => setIsAdminOpen(true)}
          />
        </section>

        {/* SECTION 1: ABOUT */}
        <section className={getSlideClass(1)}>
          <AboutSection profile={portfolioData.profile} />
        </section>

        {/* SECTION 2: SKILLS */}
        <section className={getSlideClass(2)}>
          <SkillsSection skills={portfolioData.skills} />
        </section>

        {/* SECTION 3: PROJECTS */}
        <section className={getSlideClass(3)}>
          <ProjectsSection
            projects={portfolioData.projects}
            onOpenAdmin={() => setIsAdminOpen(true)}
          />
        </section>

        {/* SECTION 4: SERVICES */}
        <section className={getSlideClass(4)}>
          <ServicesSection
            services={portfolioData.services}
            onContact={() => setCurrentSection(5)}
          />
        </section>

        {/* SECTION 5: CONTACT */}
        <section className={getSlideClass(5)}>
          <ContactSection profile={portfolioData.profile} />
        </section>
      </main>

      {/* Opt-in 3D Guide Prompt Toast */}
      {showGuidePrompt && (
        <div
          className="glass-panel"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 60,
            maxWidth: '300px',
            padding: '16px 18px',
            borderRadius: '16px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8), 0 0 25px rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.2)',
            animation: 'fadeInUp 0.35s ease',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <Sparkles size={16} color="#ffffff" />
            <span style={{ fontWeight: 700, fontSize: '0.88rem', color: '#ffffff' }}>3D Guide Companion?</span>
          </div>
          <p style={{ fontSize: '0.76rem', color: '#a1a1aa', lineHeight: 1.45, marginBottom: '14px' }}>
            Would you like Satyam's animated 3D character to accompany and narrate your tour?
          </p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => handleGuideChoice(true)}
              className="btn-primary"
              style={{ flex: 1, padding: '7px 10px', fontSize: '0.74rem' }}
            >
              Yes, Show Guide
            </button>
            <button
              onClick={() => handleGuideChoice(false)}
              className="btn-secondary"
              style={{ flex: 1, padding: '7px 10px', fontSize: '0.74rem' }}
            >
              No Thanks
            </button>
          </div>
        </div>
      )}

      {/* Animated 3D Boy Guide Companion Dock (renders only if user enabled it!) */}
      {guideEnabled && (
        <ThreeBoyGuide
          currentSection={currentSection}
          totalSections={TOTAL_SECTIONS}
          onNavigateNext={handleNext}
          onCloseGuide={() => handleGuideChoice(false)}
        />
      )}

      {/* Backend Content Management Dashboard */}
      <AdminDashboard
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        onDataUpdated={fetchPortfolioData}
      />
    </div>
  )
}
