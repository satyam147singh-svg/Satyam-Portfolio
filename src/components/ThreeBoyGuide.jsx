import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Volume2, VolumeX, Sparkles, ChevronRight, MessageSquare, Mic, MicOff } from 'lucide-react'

// Section guide narrations & previews
const SECTION_GUIDANCE = [
  {
    title: 'Satyam Rajpoot — Introduction',
    speech: "👋 Hey there! I'm Satyam's 3D AI companion. Welcome to his creative portfolio! Here you'll see how he crafts award-winning web experiences.",
    nextTitle: 'About Satyam & Journey',
    nextTeaser: 'Scroll down to discover his coding journey, development philosophy, and live code metrics!',
    badge: 'STAGE 01 // WELCOME'
  },
  {
    title: 'About Satyam',
    speech: "✨ Here's Satyam's backstory! 3+ years of intense full-stack engineering, crafting modern digital realities with clean code.",
    nextTitle: 'Tech Stack & Superpowers',
    nextTeaser: 'Next up: Explore his tech stack including React, Three.js, Node.js, and modern databases!',
    badge: 'STAGE 02 // DNA'
  },
  {
    title: 'Technical Arsenal',
    speech: "⚡ Check out his core stack! Interactive mastery ratings across frontend, backend, 3D WebGL, and cloud deployment.",
    nextTitle: 'Featured Projects Showcase',
    nextTeaser: "Hold tight! Next are Satyam's flagship client sites and full-stack web applications with live previews!",
    badge: 'STAGE 03 // ARSENAL'
  },
  {
    title: 'Featured Works & Projects',
    speech: "🚀 Explore his top builds! From 3D luxury commerce to AI dashboards and FinTech platforms. You can filter and view live demos!",
    nextTitle: 'Services & Workflow',
    nextTeaser: 'Coming next: The bespoke services Satyam provides for clients and companies worldwide.',
    badge: 'STAGE 04 // SHOWCASE'
  },
  {
    title: 'Services & Experience',
    speech: "💼 Satyam builds high-performance SPAs, 3D interactive web experiences, scalable REST APIs, and conducts luxury redesigns.",
    nextTitle: "Let's Connect & Collaborate",
    nextTeaser: 'Final section: Send a direct message to Satyam or book a consultation for your next big idea!',
    badge: 'STAGE 05 // SERVICES'
  },
  {
    title: 'Contact & Hire Satyam',
    speech: "📬 You reached the final station! Have a project or role in mind? Drop a message right here, and Satyam will get back to you promptly!",
    nextTitle: 'Back to Introduction',
    nextTeaser: 'Scroll back up or jump straight to the top to replay the journey!',
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
    osc.frequency.exponentialRampToValueAtTime(frequency * 1.5, ctx.currentTime + 0.15)
    
    gain.gain.setValueAtTime(0.08, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35)
    
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + 0.35)
  } catch (e) {
    // Audio context prevented by autoplay policy until interaction
  }
}

export default function ThreeBoyGuide({ currentSection, totalSections, onNavigateNext }) {
  const mountRef = useRef(null)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [voiceEnabled, setVoiceEnabled] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
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

    // Sound chime
    if (soundEnabled) {
      playChime(440 + currentSection * 80)
    }

    // Voice Narration
    if (voiceEnabled && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(guideData.speech)
      utterance.rate = 1.05
      utterance.pitch = 1.1
      window.speechSynthesis.speak(utterance)
    }

    return () => clearInterval(interval)
  }, [currentSection, soundEnabled, voiceEnabled])

  // Mouse move tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Three.js Scene Setup for 3D Boy Avatar
  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const width = container.clientWidth || 300
    const height = container.clientHeight || 340

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.set(0, 0.2, 3.8)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    container.innerHTML = ''
    container.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2)
    scene.add(ambientLight)

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5)
    keyLight.position.set(3, 4, 4)
    scene.add(keyLight)

    const rimLight = new THREE.DirectionalLight(0xd4d4d8, 3.0)
    rimLight.position.set(-3, -2, -2)
    scene.add(rimLight)

    const glowLight = new THREE.PointLight(0xffffff, 1.5, 6)
    glowLight.position.set(0, 1.5, 1.5)
    scene.add(glowLight)

    // 3D BOY AVATAR MODEL (Stylized Cyber Developer)
    const boyGroup = new THREE.Group()
    boyGroupRef.current = boyGroup
    scene.add(boyGroup)

    // --- Head & Face ---
    const headGroup = new THREE.Group()
    headMeshRef.current = headGroup
    boyGroup.add(headGroup)

    // Skin Material: stylized clean porcelain/matte
    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xefd8c8,
      roughness: 0.45,
      metalness: 0.05
    })

    const headGeo = new THREE.SphereGeometry(0.55, 32, 32)
    headGeo.scale(1, 1.15, 0.95)
    const headMesh = new THREE.Mesh(headGeo, skinMat)
    headGroup.add(headMesh)

    // Hair: Stylized modern spiky/curved geometry
    const hairMat = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      roughness: 0.6,
      metalness: 0.2
    })
    const hairCapGeo = new THREE.SphereGeometry(0.58, 24, 24, 0, Math.PI * 2, 0, Math.PI * 0.58)
    const hairCap = new THREE.Mesh(hairCapGeo, hairMat)
    hairCap.position.y = 0.12
    headGroup.add(hairCap)

    // Stylish front hair tufts / bangs
    for (let i = -3; i <= 3; i++) {
      const bangGeo = new THREE.ConeGeometry(0.12, 0.35, 8)
      bangGeo.rotateX(Math.PI * 0.4)
      const bang = new THREE.Mesh(bangGeo, hairMat)
      bang.position.set(i * 0.12, 0.55, 0.48)
      bang.rotation.z = i * -0.1
      headGroup.add(bang)
    }

    // Eyes: anime-inspired cyber developer glasses / glowing visor
    const visorGeo = new THREE.BoxGeometry(0.85, 0.18, 0.15)
    const visorMat = new THREE.MeshStandardMaterial({
      color: 0x050505,
      metalness: 0.9,
      roughness: 0.1,
      emissive: 0xffffff,
      emissiveIntensity: 0.35
    })
    const visor = new THREE.Mesh(visorGeo, visorMat)
    visor.position.set(0, 0.08, 0.52)
    headGroup.add(visor)

    // Visor glowing frame lines
    const lineGeo = new THREE.TorusGeometry(0.48, 0.02, 8, 32, Math.PI * 0.8)
    const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff })
    const visorLine = new THREE.Mesh(lineGeo, lineMat)
    visorLine.position.set(0, 0.08, 0.35)
    headGroup.add(visorLine)

    // Cyber Developer Headphones
    const phoneMat = new THREE.MeshStandardMaterial({
      color: 0x0f0f12,
      metalness: 0.85,
      roughness: 0.2
    })
    const glowRingMat = new THREE.MeshBasicMaterial({ color: 0xffffff })

    // Headband
    const bandGeo = new THREE.TorusGeometry(0.65, 0.06, 16, 32, Math.PI)
    bandGeo.rotateZ(Math.PI)
    const band = new THREE.Mesh(bandGeo, phoneMat)
    band.position.y = 0.15
    headGroup.add(band)

    // Ear cups (Left & Right)
    const earGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.14, 24)
    earGeo.rotateZ(Math.PI / 2)

    const leftEar = new THREE.Mesh(earGeo, phoneMat)
    leftEar.position.set(-0.62, 0.05, 0)
    headGroup.add(leftEar)

    const leftGlow = new THREE.Mesh(new THREE.RingGeometry(0.12, 0.16, 24), glowRingMat)
    leftGlow.rotateY(Math.PI / 2)
    leftGlow.position.set(-0.7, 0.05, 0)
    headGroup.add(leftGlow)

    const rightEar = new THREE.Mesh(earGeo, phoneMat)
    rightEar.position.set(0.62, 0.05, 0)
    headGroup.add(rightEar)

    const rightGlow = new THREE.Mesh(new THREE.RingGeometry(0.12, 0.16, 24), glowRingMat)
    rightGlow.rotateY(-Math.PI / 2)
    rightGlow.position.set(0.7, 0.05, 0)
    headGroup.add(rightGlow)

    // --- Neck & Torso (Sleek Monochrome Cyber Hoodie) ---
    const hoodieMat = new THREE.MeshStandardMaterial({
      color: 0x121217,
      roughness: 0.7,
      metalness: 0.1
    })

    const neckGeo = new THREE.CylinderGeometry(0.25, 0.3, 0.3, 16)
    const neck = new THREE.Mesh(neckGeo, skinMat)
    neck.position.y = -0.6
    boyGroup.add(neck)

    const torsoGeo = new THREE.CylinderGeometry(0.5, 0.65, 1.1, 24)
    const torso = new THREE.Mesh(torsoGeo, hoodieMat)
    torso.position.y = -1.25
    boyGroup.add(torso)

    // Hoodie Collar & Zippers
    const collarGeo = new THREE.TorusGeometry(0.42, 0.1, 12, 24)
    collarGeo.rotateX(Math.PI / 2)
    const collar = new THREE.Mesh(collarGeo, hoodieMat)
    collar.position.y = -0.72
    boyGroup.add(collar)

    // Silver Zipper
    const zipGeo = new THREE.BoxGeometry(0.04, 0.9, 0.05)
    const zipMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.9, roughness: 0.1 })
    const zip = new THREE.Mesh(zipGeo, zipMat)
    zip.position.set(0, -1.25, 0.58)
    boyGroup.add(zip)

    // --- Arms ---
    // Right Arm (Gesture / Wave / Point)
    const rightArmGroup = new THREE.Group()
    rightArmGroup.position.set(0.68, -0.85, 0)
    rightArmRef.current = rightArmGroup
    boyGroup.add(rightArmGroup)

    const armGeo = new THREE.CylinderGeometry(0.14, 0.12, 0.7, 16)
    armGeo.translate(0, -0.35, 0)
    const rightArm = new THREE.Mesh(armGeo, hoodieMat)
    rightArmGroup.add(rightArm)

    const handGeo = new THREE.SphereGeometry(0.14, 16, 16)
    const rightHand = new THREE.Mesh(handGeo, skinMat)
    rightHand.position.set(0, -0.75, 0)
    rightArmGroup.add(rightHand)

    // Left Arm
    const leftArmGroup = new THREE.Group()
    leftArmGroup.position.set(-0.68, -0.85, 0)
    leftArmRef.current = leftArmGroup
    boyGroup.add(leftArmGroup)

    const leftArm = new THREE.Mesh(armGeo, hoodieMat)
    leftArmGroup.add(leftArm)

    const leftHand = new THREE.Mesh(handGeo, skinMat)
    leftHand.position.set(0, -0.75, 0)
    leftArmGroup.add(leftHand)

    // --- Floating Holographic Code Rings & Particle Orbs ---
    const ringsGroup = new THREE.Group()
    ringsGroupRef.current = ringsGroup
    boyGroup.add(ringsGroup)

    const ring1 = new THREE.Mesh(
      new THREE.TorusGeometry(1.3, 0.015, 12, 48),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 })
    )
    ring1.rotation.x = Math.PI * 0.35
    ringsGroup.add(ring1)

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(1.6, 0.012, 12, 48),
      new THREE.MeshBasicMaterial({ color: 0xd4d4d8, transparent: true, opacity: 0.25 })
    )
    ring2.rotation.y = Math.PI * 0.25
    ringsGroup.add(ring2)

    // Floating micro cubes (representing code blocks)
    for (let i = 0; i < 8; i++) {
      const cubeGeo = new THREE.BoxGeometry(0.08, 0.08, 0.08)
      const cubeMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.8,
        roughness: 0.2,
        emissive: 0x444444
      })
      const cube = new THREE.Mesh(cubeGeo, cubeMat)
      const angle = (i / 8) * Math.PI * 2
      cube.position.set(Math.cos(angle) * 1.4, Math.sin(angle) * 0.8 - 0.5, Math.sin(angle * 2) * 0.5)
      ringsGroup.add(cube)
    }

    boyGroup.position.y = 0.25

    // Animation Loop
    let clock = new THREE.Clock()
    let animationFrameId

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      // Idle gentle float
      if (boyGroupRef.current) {
        boyGroupRef.current.position.y = 0.25 + Math.sin(t * 1.8) * 0.08
        boyGroupRef.current.rotation.y = Math.sin(t * 0.6) * 0.08
      }

      // Head smoothly follows cursor
      if (headMeshRef.current) {
        headMeshRef.current.rotation.y = THREE.MathUtils.lerp(
          headMeshRef.current.rotation.y,
          mousePos.current.x * 0.45,
          0.08
        )
        headMeshRef.current.rotation.x = THREE.MathUtils.lerp(
          headMeshRef.current.rotation.x,
          -mousePos.current.y * 0.3,
          0.08
        )
      }

      // Rotate Holographic Rings
      if (ringsGroupRef.current) {
        ringsGroupRef.current.rotation.y = t * 0.4
        ringsGroupRef.current.rotation.z = Math.sin(t * 0.3) * 0.2
      }

      // Arm Gestures depending on active section
      if (rightArmRef.current) {
        if (currentSection === 0) {
          // Waving gesture for Welcome / Hero
          rightArmRef.current.rotation.z = THREE.MathUtils.lerp(
            rightArmRef.current.rotation.z,
            -2.4 + Math.sin(t * 6) * 0.3,
            0.1
          )
          rightArmRef.current.rotation.x = THREE.MathUtils.lerp(rightArmRef.current.rotation.x, 0.4, 0.1)
        } else if (currentSection === 1) {
          // Pointing sideways toward Bio Bento cards
          rightArmRef.current.rotation.z = THREE.MathUtils.lerp(rightArmRef.current.rotation.z, -1.8, 0.1)
          rightArmRef.current.rotation.x = THREE.MathUtils.lerp(
            rightArmRef.current.rotation.x,
            0.8 + Math.sin(t * 2) * 0.15,
            0.1
          )
        } else if (currentSection === 2) {
          // Examining tech skills (both arms raised slightly)
          rightArmRef.current.rotation.z = THREE.MathUtils.lerp(rightArmRef.current.rotation.z, -1.2, 0.1)
          rightArmRef.current.rotation.x = THREE.MathUtils.lerp(
            rightArmRef.current.rotation.x,
            1.2 + Math.cos(t * 2.5) * 0.1,
            0.1
          )
        } else if (currentSection === 3) {
          // Pointing forward to Project Showcase
          rightArmRef.current.rotation.z = THREE.MathUtils.lerp(rightArmRef.current.rotation.z, -0.6, 0.1)
          rightArmRef.current.rotation.x = THREE.MathUtils.lerp(
            rightArmRef.current.rotation.x,
            1.8 + Math.sin(t * 3) * 0.08,
            0.1
          )
        } else if (currentSection === 4) {
          // Thumbs up / friendly service gesture
          rightArmRef.current.rotation.z = THREE.MathUtils.lerp(rightArmRef.current.rotation.z, -1.5, 0.1)
          rightArmRef.current.rotation.x = THREE.MathUtils.lerp(rightArmRef.current.rotation.x, 0.6, 0.1)
        } else {
          // Welcoming open arms for Contact
          rightArmRef.current.rotation.z = THREE.MathUtils.lerp(
            rightArmRef.current.rotation.z,
            -1.6 + Math.sin(t * 2) * 0.1,
            0.1
          )
          rightArmRef.current.rotation.x = THREE.MathUtils.lerp(rightArmRef.current.rotation.x, 0.4, 0.1)
        }
      }

      if (leftArmRef.current) {
        if (currentSection === 5) {
          // Left arm also open for contact
          leftArmRef.current.rotation.z = THREE.MathUtils.lerp(
            leftArmRef.current.rotation.z,
            1.6 + Math.cos(t * 2) * 0.1,
            0.1
          )
          leftArmRef.current.rotation.x = THREE.MathUtils.lerp(leftArmRef.current.rotation.x, 0.4, 0.1)
        } else {
          // Natural resting idle
          leftArmRef.current.rotation.z = THREE.MathUtils.lerp(
            leftArmRef.current.rotation.z,
            0.15 + Math.sin(t * 1.5) * 0.05,
            0.1
          )
          leftArmRef.current.rotation.x = THREE.MathUtils.lerp(leftArmRef.current.rotation.x, 0, 0.1)
        }
      }

      renderer.render(scene, camera)
    }

    animate()

    // Resize handler
    const handleResize = () => {
      if (!container) return
      const w = container.clientWidth || 300
      const h = container.clientHeight || 340
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
    }
  }, [currentSection])

  // Interactive Spin Click
  const handleBoyClick = () => {
    if (boyGroupRef.current) {
      boyGroupRef.current.rotation.y += Math.PI * 2
      playChime(780)
    }
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        pointerEvents: 'none',
      }}
    >
      {/* Speech Bubble / Upcoming Section Announcer */}
      {!isMinimized && (
        <div
          className="speech-bubble"
          style={{
            pointerEvents: 'auto',
            marginBottom: '10px',
            transformOrigin: 'bottom right',
            animation: 'fadeInUp 0.35s ease',
          }}
        >
          {/* Header Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '10px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              paddingBottom: '8px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="pulse-dot" />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.08em',
                  color: '#ffffff',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                }}
              >
                {guideData.badge}
              </span>
            </div>

            {/* Controls: Sound, Voice, Minimize */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                title={soundEnabled ? 'Mute Chimes' : 'Enable Chimes'}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: soundEnabled ? '#ffffff' : '#71717a',
                  cursor: 'pointer',
                  display: 'flex',
                  padding: '2px',
                }}
              >
                {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
              </button>

              <button
                onClick={() => setVoiceEnabled(!voiceEnabled)}
                title={voiceEnabled ? 'Mute AI Voice' : 'Enable AI Voice Narrator'}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: voiceEnabled ? '#ffffff' : '#71717a',
                  cursor: 'pointer',
                  display: 'flex',
                  padding: '2px',
                }}
              >
                {voiceEnabled ? <Mic size={15} /> : <MicOff size={15} />}
              </button>

              <button
                onClick={() => setIsMinimized(true)}
                title="Minimize Guide"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '4px',
                  color: '#a1a1aa',
                  cursor: 'pointer',
                  fontSize: '0.7rem',
                  padding: '2px 6px',
                }}
              >
                _
              </button>
            </div>
          </div>

          {/* Current Speech Content */}
          <p
            style={{
              fontSize: '0.86rem',
              lineHeight: 1.5,
              color: 'var(--text-pure)',
              marginBottom: '12px',
              minHeight: '44px',
            }}
          >
            {displayedText}
          </p>

          {/* NEXT UP TEASER BOX (Announces what is coming as user scrolls) */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '10px 12px',
              marginBottom: '8px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '4px',
              }}
            >
              <span
                style={{
                  fontSize: '0.68rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#a1a1aa',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
              >
                <Sparkles size={12} color="#ffffff" /> NEXT PART AHEAD:
              </span>
              <span
                style={{
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#ffffff',
                  fontWeight: 700,
                }}
              >
                {currentSection + 1 < totalSections ? `${currentSection + 2}/${totalSections}` : 'LOOP 01'}
              </span>
            </div>

            <div
              style={{
                fontWeight: 700,
                fontSize: '0.85rem',
                color: '#ffffff',
                marginBottom: '3px',
              }}
            >
              {guideData.nextTitle}
            </div>

            <div
              style={{
                fontSize: '0.74rem',
                color: '#a1a1aa',
                lineHeight: 1.35,
              }}
            >
              {guideData.nextTeaser}
            </div>
          </div>

          {/* Jump / Advance button */}
          <button
            onClick={onNavigateNext}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              background: 'linear-gradient(90deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              borderRadius: '10px',
              padding: '7px 12px',
              color: '#ffffff',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(90deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 100%)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <span>Explore Next Section</span>
            <ChevronRight size={14} />
          </button>
        </div>
      )}

      {/* 3D Boy Avatar Canvas Container */}
      <div
        style={{
          position: 'relative',
          width: '240px',
          height: '270px',
          pointerEvents: 'auto',
          cursor: 'pointer',
        }}
        onClick={handleBoyClick}
        title="Satyam's 3D AI Guide (Click to interact!)"
      >
        {isMinimized && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsMinimized(false)
            }}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              zIndex: 10,
              background: 'rgba(15,15,20,0.85)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
            }}
          >
            <MessageSquare size={16} />
          </button>
        )}

        <div ref={mountRef} style={{ width: '100%', height: '100%' }} />

        {/* Small floating status pill */}
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '25px',
            background: 'rgba(10, 10, 14, 0.85)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '999px',
            padding: '3px 10px',
            fontSize: '0.66rem',
            fontFamily: 'var(--font-mono)',
            color: '#d4d4d8',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            backdropFilter: 'blur(8px)',
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffffff', boxShadow: '0 0 6px #fff' }} />
          3D GUIDE ACTIVE
        </div>
      </div>
    </div>
  )
}
