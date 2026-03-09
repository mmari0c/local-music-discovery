import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import MusicEventsController from '../controllers/music_events.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', MusicEventsController.getMusicEvents)

router.get('/:eventId', (req, res) => {
   res.status(200).sendFile(path.resolve(__dirname, '../public/event.html'))
})

export default router