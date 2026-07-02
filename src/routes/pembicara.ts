import { Router, Request, Response } from "express";
import prisma from "../db.js";

const router = Router();

// GET ALL
router.get("/", async (_req: Request, res: Response) => {
  try {
    const pembicara = await prisma.pembicara.findMany();

    res.json(
      pembicara.map((p) => ({
        id: p.id,
        nama: p.name,
        role: p.role,
        imageUrl: p.email,
        bio: p.bio,
      }))
    );
  } catch {
    res.status(500).json({ error: "Failed to fetch pembicara" });
  }
});

// GET BY ID
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params["id"]);

    const pembicara = await prisma.pembicara.findUnique({
      where: { id },
    });

    if (!pembicara) {
      return res.status(404).json({ error: "Pembicara not found" });
    }

    res.json({
      id: pembicara.id,
      nama: pembicara.name,
      role: pembicara.role,
      imageUrl: pembicara.email,
      bio: pembicara.bio,
    });
  } catch {
    res.status(500).json({ error: "Failed to fetch pembicara" });
  }
});

// POST
router.post("/", async (req: Request, res: Response) => {
  try {
    const { nama, role, imageUrl, bio } = req.body;

    const pembicara = await prisma.pembicara.create({
      data: {
        name: nama,
        role,
        email: imageUrl,
        bio,
      },
    });

    res.status(201).json(pembicara);
  } catch {
    res.status(500).json({ error: "Failed to create pembicara" });
  }
});

// PUT
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params["id"]);
    const { nama, role, imageUrl, bio } = req.body;

    const pembicara = await prisma.pembicara.update({
      where: { id },
      data: {
        name: nama,
        role,
        email: imageUrl,
        bio,
      },
    });

    res.json(pembicara);
  } catch {
    res.status(500).json({ error: "Failed to update pembicara" });
  }
});

// DELETE
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params["id"]);

    await prisma.pembicara.delete({
      where: { id },
    });

    res.status(204).send();
  } catch {
    res.status(500).json({ error: "Failed to delete pembicara" });
  }
});

export default router;