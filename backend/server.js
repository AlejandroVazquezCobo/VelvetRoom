import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDB } from './src/config/db.js';
import personaRoutes from './src/routes/persona.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensaje: 'Velvet Compendium API viva', arcana: 'Fool' });
});

app.use('/api/personas', personaRoutes);

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`[server] escuchando en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('[mongo] fallo al conectar:', err.message);
    process.exit(1);
  });
