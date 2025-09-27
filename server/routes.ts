import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Resume download endpoint
  app.get("/api/download/resume", (req, res) => {
    const format = req.query.format as string || 'pdf';
    
    if (format === 'pdf') {
      const filePath = path.join(process.cwd(), 'public', 'Keren_Zhang_Resume.pdf');
      res.download(filePath, 'Keren_Zhang_Resume.pdf', (err) => {
        if (err) {
          console.error('Error downloading file:', err);
          res.status(404).json({ error: 'Resume file not found' });
        }
      });
    } else {
      res.status(400).json({ error: 'Unsupported format. Only PDF is currently available.' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
