import { Router, Request, Response } from 'express';
import prisma from '../db.js';

const router = Router();

// GET all pembicara
router.get('/', async (req: Request, res: Response) => {
  try {
    const pembicara = await prisma.pembicara.findMany();
    res.json(pembicara);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pembicara' });
  }
});

// GET single pembicara
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const pembicara = await prisma.pembicara.findUnique({
      where: { id: parseInt(id) },
    });
    if (!pembicara) {
      return res.status(404).json({ error: 'Pembicara not found' });
    }
    res.json(pembicara);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pembicara' });
  }
});

// POST create pembicara
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, role, email, bio } = req.body;
    const pembicara = await prisma.pembicara.create({
      data: { name, role, email, bio },
    });
    res.status(201).json(pembicara);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create pembicara' });
  }
});

// PUT update pembicara
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const { name, role, email, bio } = req.body;
    const pembicara = await prisma.pembicara.update({
      where: { id: parseInt(id) },
      data: { name, role, email, bio },
    });
    res.json(pembicara);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update pembicara' });
  }
});

// DELETE pembicara
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    await prisma.pembicara.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete pembicara' });
  }
});

export default router;