import { Router, Request, Response } from 'express';
import prisma from '../db.js';

const router = Router();

// GET all categories
router.get('/', async (req: Request, res: Response) => {
  try {
    const categories = await prisma.categoryEvent.findMany();
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

// GET single category
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const category = await prisma.categoryEvent.findUnique({
      where: { id: parseInt(id) },
    });
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch category' });
  }
});

// POST create category
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const category = await prisma.categoryEvent.create({
      data: { name, description },
    });
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create category' });
  }
});

// PUT update category
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const { name, description } = req.body;
    const category = await prisma.categoryEvent.update({
      where: { id: parseInt(id) },
      data: { name, description },
    });
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update category' });
  }
});

// DELETE category
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    await prisma.categoryEvent.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete category' });
  }
});

export default router;