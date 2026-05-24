import express from 'express';
import cors from 'cors';
import categoryRoutes from './routes/categories.js';
import pembicaraRoutes from './routes/pembicara.js';
import eventRoutes from './routes/events.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: ['http://localhost:5175', 'http://localhost:5173'],
  credentials: true,
}));
app.use(express.json());

// Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/pembicara', pembicaraRoutes);
app.use('/api/events', eventRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
  console.log(`   Health check: http://localhost:${PORT}/health`);
});