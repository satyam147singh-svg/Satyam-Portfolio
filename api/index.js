import express from 'express'
import cors from 'cors'
import initialData from '../server/data/portfolioData.json' assert { type: 'json' }

const app = express()
app.use(cors())
app.use(express.json({ limit: '10mb' }))

// In-memory data store for serverless execution
let memoryData = { ...initialData }

app.get('/api/portfolio', (req, res) => {
  res.json({ success: true, data: memoryData })
})

app.post('/api/auth/login', (req, res) => {
  const { pin } = req.body
  if (pin === 'admin123' || pin === 'satyam2026' || pin === 'satyam') {
    return res.json({ success: true, message: 'Authenticated successfully' })
  }
  return res.status(401).json({ success: false, message: 'Invalid Admin PIN' })
})

app.put('/api/portfolio/profile', (req, res) => {
  memoryData.profile = { ...memoryData.profile, ...req.body }
  res.json({ success: true, message: 'Profile updated successfully', profile: memoryData.profile })
})

app.post('/api/portfolio/projects', (req, res) => {
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
  memoryData.projects.unshift(newProject)
  res.status(201).json({ success: true, message: 'Project added successfully', project: newProject })
})

app.put('/api/portfolio/projects/:id', (req, res) => {
  const { id } = req.params
  const index = memoryData.projects.findIndex(p => p.id === id)
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Project not found' })
  }
  memoryData.projects[index] = { ...memoryData.projects[index], ...req.body }
  res.json({ success: true, message: 'Project updated successfully', project: memoryData.projects[index] })
})

app.delete('/api/portfolio/projects/:id', (req, res) => {
  const { id } = req.params
  memoryData.projects = memoryData.projects.filter(p => p.id !== id)
  res.json({ success: true, message: 'Project deleted successfully' })
})

app.post('/api/portfolio/skills', (req, res) => {
  const newSkill = {
    id: `sk-${Date.now()}`,
    name: req.body.name || 'New Skill',
    category: req.body.category || 'Frontend',
    level: Number(req.body.level) || 85,
    icon: req.body.icon || 'Code2'
  }
  memoryData.skills.push(newSkill)
  res.status(201).json({ success: true, message: 'Skill added successfully', skill: newSkill })
})

app.delete('/api/portfolio/skills/:id', (req, res) => {
  const { id } = req.params
  memoryData.skills = memoryData.skills.filter(s => s.id !== id)
  res.json({ success: true, message: 'Skill deleted successfully' })
})

app.post('/api/portfolio/services', (req, res) => {
  const newService = {
    id: `srv-${Date.now()}`,
    title: req.body.title || 'New Service',
    description: req.body.description || '',
    icon: req.body.icon || 'Sparkles',
    tags: Array.isArray(req.body.tags) ? req.body.tags : (req.body.tags || '').split(',').map(t => t.trim()).filter(Boolean)
  }
  memoryData.services.push(newService)
  res.status(201).json({ success: true, message: 'Service added successfully', service: newService })
})

app.delete('/api/portfolio/services/:id', (req, res) => {
  const { id } = req.params
  memoryData.services = memoryData.services.filter(s => s.id !== id)
  res.json({ success: true, message: 'Service deleted successfully' })
})

app.post('/api/portfolio/contact', (req, res) => {
  const { name, email, subject, message } = req.body
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email, and message are required.' })
  }
  const newMessage = {
    id: `msg-${Date.now()}`,
    name,
    email,
    subject: subject || 'Portfolio Inquiry',
    message,
    date: new Date().toISOString().replace('T', ' ').substring(0, 19),
    read: false
  }
  if (!memoryData.messages) memoryData.messages = []
  memoryData.messages.unshift(newMessage)
  res.status(201).json({ success: true, message: 'Message received! Satyam will connect with you soon.', messageItem: newMessage })
})

app.get('/api/portfolio/messages', (req, res) => {
  res.json({ success: true, messages: memoryData.messages || [] })
})

app.delete('/api/portfolio/messages/:id', (req, res) => {
  const { id } = req.params
  if (memoryData.messages) {
    memoryData.messages = memoryData.messages.filter(m => m.id !== id)
  }
  res.json({ success: true, message: 'Message deleted' })
})

export default app
