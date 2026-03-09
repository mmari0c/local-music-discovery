import express from 'express';
import './config/dotenv.js'
import musicEventsRouter from './routes/music_events.js'

const app = express();

app.use('/public', express.static('./public'))
app.use('/music-events', musicEventsRouter)

app.get('/', (_req, res) => {
   res.sendFile('./public/index.html', { root: '.' })
})

app.get('/events/:id', (_req, res) => {
   res.sendFile('./public/event.html', { root: '.' })
})

app.get('/404', (_req, res) => {
   res.status(404).sendFile('./public/404.html', { root: '.' })
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
   console.log(`🚀 Server is running on http://localhost:${PORT}`);
})

