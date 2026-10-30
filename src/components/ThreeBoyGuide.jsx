import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Volume2, VolumeX, Sparkles, ChevronRight, X, Mic, MicOff } from 'lucide-react'

// Concise section guide narrations
const SECTION_GUIDANCE = [
  {
    title: 'Satyam Rajpoot — Introduction',
    speech: "👋 Hey! I'm Satyam's 3D AI companion. Welcome to his creative portfolio!",
    nextTitle: 'About Satyam & Journey',
    nextTeaser: 'Scroll down to explore his coding journey, developer DNA, and philosophy.',
    badge: 'STAGE 01 // INTRO'
  },
  {
    title: 'About Satyam',
    speech: "✨ Here's Satyam's backstory! 3+ years of intense full-stack engineering & clean code.",
    nextTitle: 'Tech Stack & Superpowers',
    nextTeaser: 'Next: Explore his core tech stack including React, Three.js & Node.js!',
    badge: 'STAGE 02 // DNA'
  },
  {
    title: 'Technical Arsenal',
    speech: "⚡ Check out his core stack across frontend, backend, 3D WebGL, and databases.",
    nextTitle: 'Featured Projects Showcase',
    nextTeaser: "Hold on! Next are Satyam's flagship client sites and full-stack web applications!",
    badge: 'STAGE 03 // ARSENAL'
  },
  {
    title: 'Featured Works & Projects',
    speech: "🚀 Explore his top builds! 3D commerce, AI SaaS, and FinTech applications.",
    nextTitle: 'Services & Workflow',
    nextTeaser: 'Coming next: Bespoke services and 4-step engineering roadmap.',
    badge: 'STAGE 04 // WORKS'
  },
  {
    title: 'Services & Experience',
    speech: "💼 Satyam builds high-speed SPAs, 3D web experiences, and scalable REST APIs.",
    nextTitle: "Let's Connect & Collaborate",
    nextTeaser: 'Final section: Send a direct message or connect with Satyam!',
    badge: 'STAGE 05 // SERVICES'
  },
  {
    title: 'Contact & Hire Satyam',
    speech: "📬 Have a project in mind? Drop a message right here, Satyam will reply soon!",
    nextTitle: 'Back to Introduction',
    nextTeaser: 'Scroll back up or jump straight to the top to replay the tour!',
    badge: 'STAGE 06 // CONNECT'
  }
]

// Synthesizer Audio for futuristic chimes
function playChime(frequency = 520) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(frequency, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(frequency * 1.4, ctx.currentTime + 0.12)
    
    gain.gain.setValueAtTime(0.06, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25)
    
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + 0.25)
  } catch (e) {
    // Audio context prevented by autoplay policy until interaction
  }
}

export default function ThreeBoyGuide({ currentSection, totalSections, onNavigateNext, onCloseGuide }) {
  const mountRef = useRef(null)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [voiceEnabled, setVoiceEnabled] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const boyGroupRef = useRef(null)
  const headMeshRef = useRef(null)
  const rightArmRef = useRef(null)
  const leftArmRef = useRef(null)
  const ringsGroupRef = useRef(null)
  const mousePos = useRef({ x: 0, y: 0 })

  const guideData = SECTION_GUIDANCE[currentSection] || SECTION_GUIDANCE[0]

  // Typewriter effect for speech
  useEffect(() => {
    let index = 0
    setDisplayedText('')
    const targetText = guideData.speech
    const interval = setInterval(() => {
      index++
      setDisplayedText(targetText.slice(0, index))
      if (index >= targetText.length) {
        clearInterval(interval)
      }
    }, 18)

    if (soundEnabled) {
      playChime(480 + currentSection * 60)
    }

    if (voiceEnabled && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(guideData.speech)
      utterance.rate = 1.05
      utterance.pitch = 1.1
      window.speechSynthesis.speak(utterance)
    }

    return () => clearInterval(interval)
  }, [currentSection, soundEnabled, voiceEnabled])

  // Mouse move tracking (subtle)
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Three.js Scene Setup - Optimized & Compact
  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const width = 135
    const height = 150

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100)
    camera.position.set(0, 0.25, 4.0)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25))
    container.innerHTML = ''
    container.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4)
    scene.add(ambientLight)

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5)
    keyLight.position.set(3, 4, 4)
    scene.add(keyLight)

    const rimLight = new THREE.DirectionalLight(0xd4d4d8, 2.0)
    rimLight.position.set(-3, -2, -2)
    scene.add(rimLight)

    // 3D BOY AVATAR MODEL (Optimized low-poly segments)
    const boyGroup = new THREE.Group()
    boyGroupRef.current = boyGroup
    scene.add(boyGroup)

    // Head
    const headGroup = new THREE.Group()
    headMeshRef.current = headGroup
    boyGroup.add(headGroup)

    const skinMat = new THREE.MeshStandardMaterial({ color: 0xefd8c8, roughness: 0.5 })
    const headGeo = new THREE.SphereGeometry(0.55, 16, 16)
    headGeo.scale(1, 1.15, 0.95)
    const headMesh = new THREE.Mesh(headGeo, skinMat)
    headGroup.add(headMesh)

    // Hair
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.6 })
    const hairCapGeo = new THREE.SphereGeometry(0.58, 14, 14, 0, Math.PI * 2, 0, Math.PI * 0.58)
    const hairCap = new THREE.Mesh(hairCapGeo, hairMat)
    hairCap.position.y = 0.12
    headGroup.add(hairCap)

    // Visor
    const visorGeo = new THREE.BoxGeometry(0.85, 0.18, 0.15)
    const visorMat = new THREE.MeshStandardMaterial({ color: 0x050505, metalness: 0.9, roughness: 0.1, emissive: 0xffffff, emissiveIntensity: 0.35 })
    const visor = new THREE.Mesh(visorGeo, visorMat)
    visor.position.set(0, 0.08, 0.52)
    headGroup.add(visor)

    // Cyber Headphones
    const phoneMat = new THREE.MeshStandardMaterial({ color: 0x0f0f12, metalness: 0.8 })
    const glowRingMat = new THREE.MeshBasicMaterial({ color: 0xffffff })

    const bandGeo = new THREE.TorusGeometry(0.65, 0.05, 8, 16, Math.PI)
    bandGeo.rotateZ(Math.PI)
    const band = new THREE.Mesh(bandGeo, phoneMat)
    band.position.y = 0.15
    headGroup.add(band)

    const earGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.12, 12)
    earGeo.rotateZ(Math.PI / 2)

    const leftEar = new THREE.Mesh(earGeo, phoneMat)
    leftEar.position.set(-0.62, 0.05, 0)
    headGroup.add(leftEar)

    const leftGlow = new THREE.Mesh(new THREE.RingGeometry(0.1, 0.15, 12), glowRingMat)
    leftGlow.rotateY(Math.PI / 2)
    leftGlow.position.set(-0.69, 0.05, 0)
    headGroup.add(leftGlow)

    const rightEar = new THREE.Mesh(earGeo, phoneMat)
    rightEar.position.set(0.62, 0.05, 0)
    headGroup.add(rightEar)

    const rightGlow = new THREE.Mesh(new THREE.RingGeometry(0.1, 0.15, 12), glowRingMat)
    rightGlow.rotateY(-Math.PI / 2)
    rightGlow.position.set(0.69, 0.05, 0)
    headGroup.add(rightGlow)

    // Neck & Torso
    const hoodieMat = new THREE.MeshStandardMaterial({ color: 0x121217, roughness: 0.7 })
    const neckGeo = new THREE.CylinderGeometry(0.25, 0.3, 0.3, 10)
    const neck = new THREE.Mesh(neckGeo, skinMat)
    neck.position.y = -0.6
    boyGroup.add(neck)

    const torsoGeo = new THREE.CylinderGeometry(0.5, 0.65, 1.1, 14)
    const torso = new THREE.Mesh(torsoGeo, hoodieMat)
    torso.position.y = -1.25
    boyGroup.add(torso)

    // Collar
    const collarGeo = new THREE.TorusGeometry(0.42, 0.09, 8, 14)
    collarGeo.rotateX(Math.PI / 2)
    const collar = new THREE.Mesh(collarGeo, hoodieMat)
    collar.position.y = -0.72
    boyGroup.add(collar)

    // Right Arm
    const rightArmGroup = new THREE.Group()
    rightArmGroup.position.set(0.65, -0.85, 0)
    rightArmRef.current = rightArmGroup
    boyGroup.add(rightArmGroup)

    const armGeo = new THREE.CylinderGeometry(0.13, 0.11, 0.65, 10)
    armGeo.translate(0, -0.32, 0)
    const rightArm = new THREE.Mesh(armGeo, hoodieMat)
    rightArmGroup.add(rightArm)

    const handGeo = new THREE.SphereGeometry(0.12, 10, 10)
    const rightHand = new THREE.Mesh(handGeo, skinMat)
    rightHand.position.set(0, -0.7, 0)
    rightArmGroup.add(rightHand)

    // Left Arm
    const leftArmGroup = new THREE.Group()
    leftArmGroup.position.set(-0.65, -0.85, 0)
    leftArmRef.current = leftArmGroup
    boyGroup.add(leftArmGroup)

    const leftArm = new THREE.Mesh(armGeo, hoodieMat)
    leftArmGroup.add(leftArm)

    const leftHand = new THREE.Mesh(handGeo, skinMat)
    leftHand.position.set(0, -0.7, 0)
    leftArmGroup.add(leftHand)

    // Holographic Ring
    const ringsGroup = new THREE.Group()
    ringsGroupRef.current = ringsGroup
    boyGroup.add(ringsGroup)

    const ring1 = new THREE.Mesh(
      new THREE.TorusGeometry(1.3, 0.015, 8, 24),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 })
    )
    ring1.rotation.x = Math.PI * 0.35
    ringsGroup.add(ring1)

    boyGroup.position.y = 0.25

    // Animation Loop
    let clock = new THREE.Clock()
    let animationFrameId

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      // Idle gentle float
      if (boyGroupRef.current) {
        boyGroupRef.current.position.y = 0.25 + Math.sin(t * 1.8) * 0.06
        boyGroupRef.current.rotation.y = Math.sin(t * 0.6) * 0.06
      }

      // Head smoothly follows cursor
      if (headMeshRef.current) {
        headMeshRef.current.rotation.y = THREE.MathUtils.lerp(
          headMeshRef.current.rotation.y,
          mousePos.current.x * 0.35,
          0.08
        )
        headMeshRef.current.rotation.x = THREE.MathUtils.lerp(
          headMeshRef.current.rotation.x,
          -mousePos.current.y * 0.25,
          0.08
        )
      }

      if (ringsGroupRef.current) {
        ringsGroupRef.current.rotation.y = t * 0.35
      }

      // Gesture animation
      if (rightArmRef.current) {
        if (currentSection === 0) {
          rightArmRef.current.rotation.z = THREE.MathUtils.lerp(
            rightArmRef.current.rotation.z,
            -2.4 + Math.sin(t * 5) * 0.25,
            0.1
          )
        } else {
          rightArmRef.current.rotation.z = THREE.MathUtils.lerp(rightArmRef.current.rotation.z, -1.2, 0.1)
        }
      }

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      renderer.dispose()
    }
  }, [currentSection])

  const handleBoyClick = () => {
    if (boyGroupRef.current) {
      boyGroupRef.current.rotation.y += Math.PI * 2
      playChime(750)
    }
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '16px',
        right: '16px',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        pointerEvents: 'none',
      }}
    >
      {/* Compact Speech Bubble */}
      <div
        className="speech-bubble"
        style={{
          pointerEvents: 'auto',
          marginBottom: '6px',
          transformOrigin: 'bottom right',
          animation: 'fadeInUp 0.3s ease',
        }}
      >
        {/* Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '6px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '4px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.66rem',
                letterSpacing: '0.06em',
                color: '#ffffff',
                fontWeight: 700,
              }}
            >
              {guideData.badge}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? 'Mute' : 'Unmute'}
              style={{
                background: 'transparent',
                border: 'none',
                color: soundEnabled ? '#ffffff' : '#71717a',
                cursor: 'pointer',
                display: 'flex',
                padding: '2px',
              }}
            >
              {soundEnabled ? <Volume2 size={13} /> : <VolumeX size={13} />}
            </button>

            <button
              onClick={() => setVoiceEnabled(!voiceEnabled)}
              title={voiceEnabled ? 'Mute Voice' : 'Voice Narrator'}
              style={{
                background: 'transparent',
                border: 'none',
                color: voiceEnabled ? '#ffffff' : '#71717a',
                cursor: 'pointer',
                display: 'flex',
                padding: '2px',
              }}
            >
              {voiceEnabled ? <Mic size={13} /> : <MicOff size={13} />}
            </button>

            <button
              onClick={onCloseGuide}
              title="Close 3D Guide"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: 'none',
                borderRadius: '4px',
                color: '#a1a1aa',
                cursor: 'pointer',
                display: 'flex',
                padding: '2px',
              }}
            >
              <X size={13} />
            </button>
          </div>
        </div>

        {/* Current Speech */}
        <p
          style={{
            fontSize: '0.78rem',
            lineHeight: 1.45,
            color: 'var(--text-pure)',
            marginBottom: '8px',
            minHeight: '34px',
          }}
        >
          {displayedText}
        </p>

        {/* Next Up Box */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '8px',
            padding: '7px 9px',
            marginBottom: '6px',
          }}
        >
          <div
            style={{
              fontSize: '0.62rem',
              fontFamily: 'var(--font-mono)',
              color: '#a1a1aa',
              marginBottom: '2px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <Sparkles size={10} color="#ffffff" /> NEXT:
          </div>
          <div style={{ fontWeight: 700, fontSize: '0.76rem', color: '#ffffff' }}>{guideData.nextTitle}</div>
        </div>

        {/* Advance Button */}
        <button
          onClick={onNavigateNext}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '8px',
            padding: '5px 8px',
            color: '#ffffff',
            fontSize: '0.72rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          <span>Next Section</span>
          <ChevronRight size={12} />
        </button>
      </div>

      {/* Compact 3D Avatar (135x150) */}
      <div
        style={{
          position: 'relative',
          width: '135px',
          height: '150px',
          pointerEvents: 'auto',
          cursor: 'pointer',
        }}
        onClick={handleBoyClick}
        title="Satyam's 3D AI Guide (Click to interact!)"
      >
        <div ref={mountRef} style={{ width: '100%', height: '100%' }} />

        <div
          style={{
            position: 'absolute',
            bottom: '4px',
            right: '12px',
            background: 'rgba(10, 10, 14, 0.85)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '999px',
            padding: '2px 8px',
            fontSize: '0.6rem',
            fontFamily: 'var(--font-mono)',
            color: '#d4d4d8',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#ffffff' }} />
          3D GUIDE
        </div>
      </div>
    </div>
  )
}
