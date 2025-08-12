import express, { Request, Response } from "express";
import userRoutes from "./routes/user";

const app = express();
app.use(express.json());

// Routes
app.use("/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Simple Prisma + TypeScript API");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
