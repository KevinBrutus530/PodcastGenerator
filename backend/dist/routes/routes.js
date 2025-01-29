"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const router = express_1.default.Router();
// Set up multer for file uploads
const upload = (0, multer_1.default)({
    dest: process.env.UPLOAD_DIR || "uploads/",
    limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB limit
});
// POST: Process audio file
router.post("/generate-podcast", upload.single("audio"), (req, res, next) => {
    try {
        if (!req.file) {
            throw new Error("No audio file uploaded.");
        }
        const filePath = path_1.default.join(__dirname, req.file.path);
        console.log(`Processing audio file: ${filePath}`);
        res.json({ message: "Audio processed successfully", filePath });
    }
    catch (error) {
        next(error);
    }
});
// POST: Process transcript
router.post("/generate-from-transcript", (req, res, next) => {
    try {
        const { transcript } = req.body;
        if (!transcript) {
            throw new Error("No transcript provided.");
        }
        console.log(`Processing transcript: ${transcript}`);
        res.json({ message: "Transcript processed successfully", transcript });
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
