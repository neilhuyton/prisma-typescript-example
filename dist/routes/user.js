"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
// Create a user
router.post("/", async (req, res) => {
    const { email, name } = req.body;
    try {
        const user = await prisma.user.create({
            data: { email, name },
        });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create user" });
    }
});
// Get all users
router.get("/", async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
});
// Get a user by ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const user = await prisma.user.findUnique({
            where: { id: parseInt(id) },
        });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch user" });
    }
});
exports.default = router;
