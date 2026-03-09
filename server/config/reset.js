import {pool} from './database.js'
import './dotenv.js'
import musicEventData from '../data/music_events.js'

async function createMusicEventsTable() {
   const createTableQuery = `
      DROP TABLE IF EXISTS music_events;

      CREATE TABLE IF NOT EXISTS music_events (
         id SERIAL PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         date DATE NOT NULL,
         time TIME NOT NULL,
         location VARCHAR(255) NOT NULL,
         genre VARCHAR(100) NOT NULL,
         ticket_price DECIMAL(10, 2) NOT NULL
      );
   `;
   
   try {
      const res = await pool.query(createTableQuery);
      console.log('music_events table created successfully');
   } catch (err) {
      console.error('Error creating music_events table:', err);
   }
}

async function seedMusicEventsTable() {
   await createMusicEventsTable();
   musicEventData.forEach((event) => {
      const insertQuery = `
         INSERT INTO music_events (name, date, time, location, genre, ticket_price)
         VALUES ($1, $2, $3, $4, $5, $6);
      `;
      const values = [event.name, event.date, event.time, event.location, event.genre, event.ticket_price];

      pool.query(insertQuery, values, (err, res) => {
         if(err) {
            console.error(`Error inserting event:`, err);
            return
         }

         console.log(`✅ Inserted event ${event.name} successfully`);
      })
   })
}

seedMusicEventsTable();
