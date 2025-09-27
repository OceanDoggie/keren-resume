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

  // Research documents download endpoints
  app.get("/api/download/research/bullying-trends-report", (req, res) => {
    const filePath = path.join(process.cwd(), 'attached_assets', 'Bullying trends, best practices, and interventions in Healthcare Higher Education_1759000164249.pdf');
    res.download(filePath, 'Bullying_Trends_Research_Report.pdf', (err) => {
      if (err) {
        console.error('Error downloading research report:', err);
        res.status(404).json({ error: 'Research report not found' });
      }
    });
  });

  app.get("/api/download/research/methodology-report", (req, res) => {
    const filePath = path.join(process.cwd(), 'attached_assets', 'Methodology-Keren_1759000164250.pdf');
    res.download(filePath, 'Research_Methodology_Report.pdf', (err) => {
      if (err) {
        console.error('Error downloading methodology report:', err);
        res.status(404).json({ error: 'Methodology report not found' });
      }
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}