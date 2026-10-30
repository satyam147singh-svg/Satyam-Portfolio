import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 5000
const DB_FILE = path.join(__dirname, 'data', 'portfolioData.json')

app.use(cors())
app.use(express.json({ limit: '10mb' }))

// Helper to read database
function readData() {
  try {
    if (!fs.existsSync(DB_FILE)) {
      return { profile: {}, projects: [], skills: [], services: [], messages: [] }
    }
    const raw = fs.readFileSync(DB_FILE, 'utf-8')
    return JSON.parse(raw)
  } catch (error) {
    console.error('Error reading DB:', error)
    return { profile: {}, projects: [], skills: [], services: [], messages: [] }
  }
}

// Helper to save database
function writeData(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8')
    return true
  } catch (error) {
    console.error('Error saving DB:', error)
    return false
  }
}

// GET all portfolio data
app.get('/api/portfolio', (req, res) => {
  const data = readData()
  res.json({
    success: true,
    data,
  })
})

// AUTH: simple PIN check for Satyam's admin dashboard
app.post('/api/auth/login', (req, res) => {
  const { pin } = req.body
  // Default PIN is admin123
  if (pin === 'admin123' || pin === 'satyam2026' || pin === 'satyam') {
    return res.json({ success: true, message: 'Authenticated successfully' })
  }
  return res.status(401).json({ success: false, message: 'Invalid Admin PIN' })
})

// UPDATE Profile
app.put('/api/portfolio/profile', (req, res) => {
  const data = readData()
  data.profile = { ...data.profile, ...req.body }
  writeData(data)
  res.json({ success: true, message: 'Profile updated successfully', profile: data.profile })
})

// PROJECTS: Add new
app.post('/api/portfolio/projects', (req, res) => {
  const data = readData()
  const newProject = {
    id: `proj-${Date.now()}`,
    title: req.body.title || 'Untitled Project',
    category: req.body.category || 'Web Apps',
    description: req.body.description || '',
    imageUrl: req.body.imageUrl || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tags: Array.isArray(req.body.tags) ? req.body.tags : (req.body.tags || '').split(',').map(t => t.trim()).filter(Boolean),
    liveUrl: req.body.liveUrl || '#',
    githubUrl: req.body.githubUrl || '#',
    featured: Boolean(req.body.featured),
    metrics: req.body.metrics || 'Modern Architecture'
  }
  data.projects.unshift(newProject)
  writeData(data)
  res.status(201).json({ success: true, message: 'Project added successfully', project: newProject })
})

// PROJECTS: Update
app.put('/api/portfolio/projects/:id', (req, res) => {
  const { id } = req.params
  const data = readData()
  const index = data.projects.findIndex(p => p.id === id)
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Project not found' })
  }

  const existing = data.projects[index]
  const updatedTags = req.body.tags !== undefined 
    ? (Array.isArray(req.body.tags) ? req.body.tags : req.body.tags.split(',').map(t => t.trim()).filter(Boolean))
    : existing.tags

  data.projects[index] = {
    ...existing,
    ...req.body,
    tags: updatedTags
  }
  writeData(data)
  res.json({ success: true, message: 'Project updated successfully', project: data.projects[index] })
})

// PROJECTS: Delete
app.delete('/api/portfolio/projects/:id', (req, res) => {
  const { id } = req.params
  const data = readData()
  const initialLength = data.projects.length
  data.projects = data.projects.filter(p => p.id !== id)
  if (data.projects.length === initialLength) {
    return res.status(404).json({ success: false, message: 'Project not found' })
  }
  writeData(data)
  res.json({ success: true, message: 'Project deleted successfully' })
})

// SKILLS: Add new
app.post('/api/portfolio/skills', (req, res) => {
  const data = readData()
  const newSkill = {
    id: `sk-${Date.now()}`,
    name: req.body.name || 'New Skill',
    category: req.body.category || 'Frontend',
    level: Number(req.body.level) || 85,
    icon: req.body.icon || 'Code2'
  }
  data.skills.push(newSkill)
  writeData(data)
  res.status(201).json({ success: true, message: 'Skill added successfully', skill: newSkill })
})

// SKILLS: Update
app.put('/api/portfolio/skills/:id', (req, res) => {
  const { id } = req.params
  const data = readData()
  const index = data.skills.findIndex(s => s.id === id)
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Skill not found' })
  }
  data.skills[index] = { ...data.skills[index], ...req.body }
  writeData(data)
  res.json({ success: true, message: 'Skill updated successfully', skill: data.skills[index] })
})

// SKILLS: Delete
app.delete('/api/portfolio/skills/:id', (req, res) => {
  const { id } = req.params
  const data = readData()
  data.skills = data.skills.filter(s => s.id !== id)
  writeData(data)
  res.json({ success: true, message: 'Skill deleted successfully' })
})

// SERVICES: Add new
app.post('/api/portfolio/services', (req, res) => {
  const data = readData()
  const newService = {
    id: `srv-${Date.now()}`,
    title: req.body.title || 'New Service',
    description: req.body.description || '',
    icon: req.body.icon || 'Sparkles',
    tags: Array.isArray(req.body.tags) ? req.body.tags : (req.body.tags || '').split(',').map(t => t.trim()).filter(Boolean)
  }
  data.services.push(newService)
  writeData(data)
  res.status(201).json({ success: true, message: 'Service added successfully', service: newService })
})

// SERVICES: Update
app.put('/api/portfolio/services/:id', (req, res) => {
  const { id } = req.params
  const data = readData()
  const index = data.services.findIndex(s => s.id === id)
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Service not found' })
  }
  data.services[index] = { ...data.services[index], ...req.body }
  writeData(data)
  res.json({ success: true, message: 'Service updated successfully', service: data.services[index] })
})

// SERVICES: Delete
app.delete('/api/portfolio/services/:id', (req, res) => {
  const { id } = req.params
  const data = readData()
  data.services = data.services.filter(s => s.id !== id)
  writeData(data)
  res.json({ success: true, message: 'Service deleted successfully' })
})

// CONTACT: Post a new message
app.post('/api/portfolio/contact', (req, res) => {
  const { name, email, subject, message } = req.body
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email, and message are required.' })
  }

  const data = readData()
  const newMessage = {
    id: `msg-${Date.now()}`,
    name,
    email,
    subject: subject || 'Portfolio Inquiry',
    message,
    date: new Date().toISOString().replace('T', ' ').substring(0, 19),
    read: false
  }

  if (!data.messages) data.messages = []
  data.messages.unshift(newMessage)
  writeData(data)
  res.status(201).json({ success: true, message: 'Message received! Satyam will connect with you soon.', messageItem: newMessage })
})

// MESSAGES: Get all received contact inquiries
app.get('/api/portfolio/messages', (req, res) => {
  const data = readData()
  res.json({ success: true, messages: data.messages || [] })
})

// MESSAGES: Delete
app.delete('/api/portfolio/messages/:id', (req, res) => {
  const { id } = req.params
  const data = readData()
  if (data.messages) {
    data.messages = data.messages.filter(m => m.id !== id)
    writeData(data)
  }
  res.json({ success: true, message: 'Message deleted' })
})

// START SERVER
app.listen(PORT, () => {
  console.log(`>>> Satyam Rajpoot Portfolio API Server running on http://localhost:${PORT}`);
})
