import React, { useState, useEffect, useRef, useCallback } from 'react'
import NavigationHUD from './components/NavigationHUD'
import ThreeBoyGuide from './components/ThreeBoyGuide'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'
import AdminDashboard from './components/AdminDashboard'

// Comprehensive fallback data if backend is still initializing
const INITIAL_FALLBACK_DATA = {
  profile: {
    name: 'Satyam Rajpoot',
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
      console.log('Backend syncing: using cached/fallback portfolio data')
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

  // Scroll Wheel Handler with Smooth Throttling (Single section fixed scroll mechanism)
  useEffect(() => {
    const handleWheel = (e) => {
      // If modal or admin is open, don't hijack scroll
      if (isAdminOpen) return

      // Throttling prevents multiple slides passing at once
      if (isThrottled.current) return

      if (e.deltaY > 30) {
        // Scroll Down -> Next Section
        isThrottled.current = true
        handleNext()
        setTimeout(() => {
          isThrottled.current = false
        }, 850)
      } else if (e.deltaY < -30) {
        // Scroll Up -> Prev Section
        isThrottled.current = true
        handlePrev()
        setTimeout(() => {
          isThrottled.current = false
        }, 850)
      }
    }

    // Touch handlers for mobile swipe
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchEnd = (e) => {
      if (isAdminOpen) return
      if (isThrottled.current) return

      const deltaY = touchStartY.current - e.changedTouches[0].clientY
      if (deltaY > 50) {
        isThrottled.current = true
        handleNext()
        setTimeout(() => {
          isThrottled.current = false
        }, 850)
      } else if (deltaY < -50) {
        isThrottled.current = true
        handlePrev()
        setTimeout(() => {
          isThrottled.current = false
        }, 850)
      }
    }

    // Keyboard navigation
    const handleKeyDown = (e) => {
      if (isAdminOpen) return
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault()
        handleNext()
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
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
      />

      {/* Pinned Single-Stage Container (Only 1 active section rendered with 3D slider fade) */}
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

      {/* Animated 3D Boy Guide Companion Dock */}
      <ThreeBoyGuide
        currentSection={currentSection}
        totalSections={TOTAL_SECTIONS}
        onNavigateNext={handleNext}
      />

      {/* Backend Content Management Dashboard */}
      <AdminDashboard
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        onDataUpdated={fetchPortfolioData}
      />
    </div>
  )
}
