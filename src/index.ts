import express, { Request, Response } from 'express';
import serverless from 'serverless-http';
import userRoutes from './routes/user';

const app = express();
app.use(express.json());

// Routes
app.use('/users', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Simple Prisma + TypeScript API');
});

// Export for Netlify Functions
export const handler = serverless(app);