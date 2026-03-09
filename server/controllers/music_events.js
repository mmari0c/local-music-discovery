import { pool } from '../config/database.js'

const getMusicEvents = async (req, res) => {
   try {
      const results = await pool.query("SELECT * FROM music_events ORDER BY id ASC")
      res.status(200).json(results.rows)
   } catch (err) {
      res.status(409).json({ error: err.message })
   }
}

export default { getMusicEvents }