import express, { Request, Response, NextFunction } from "express";
import multer from "multer";
import path from "path";

const router = express.Router();

// Set up multer for file uploads
const upload = multer({
  dest: process.env.UPLOAD_DIR || "uploads/",
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB limit
});

// POST: Process audio file
router.post("/generate-podcast", upload.single("audio"), (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.file) {
      throw new Error("No audio file uploaded.");
    }

    const filePath = path.join(__dirname, req.file.path);
    console.log(`Processing audio file: ${filePath}`);

    res.json({ message: "Audio processed successfully", filePath });
  } catch (error) {
    next(error);
  }
});

// POST: Process transcript
router.post("/generate-from-transcript", (req: Request, res: Response, next: NextFunction) => {
  try {
    const { transcript } = req.body;

    if (!transcript) {
      throw new Error("No transcript provided.");
    }

    console.log(`Processing transcript: ${transcript}`);

    res.json({ message: "Transcript processed successfully", transcript });
  } catch (error) {
    next(error);
  }
});

export default router;
