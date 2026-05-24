import { Router, Request, Response } from 'express';
import prisma from '../db.js';

const router = Router();

// GET all events
router.get('/', async (req: Request, res: Response) => {
  try {
    const events = await prisma.event.findMany({
      include: {
        category: true,
        pembicara: true,
      },
    });
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

// GET single event
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const event = await prisma.event.findUnique({
      where: { id: parseInt(id) },
      include: {
        category: true,
        pembicara: true,
      },
    });
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch event' });
  }
});

// POST create event
router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, description, date, location, categoryId, pembicaraId } = req.body;
    const event = await prisma.event.create({
      data: { title, description, date: new Date(date), location, categoryId, pembicaraId },
      include: {
        category: true,
        pembicara: true,
      },
    });
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create event' });
  }
});

// PUT update event
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const { title, description, date, location, categoryId, pembicaraId } = req.body;
    const event = await prisma.event.update({
      where: { id: parseInt(id) },
      data: { title, description, date: new Date(date), location, categoryId, pembicaraId },
      include: {
        category: true,
        pembicara: true,
      },
    });
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update event' });
  }
});

// DELETE event
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    await prisma.event.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete event' });
  }
});

export default router;