import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { createResume, deletResume, getResumeById, getUserResumes, updateresume } from '../controllers/resumeController.js';
import { uploadResumeImage } from '../uploads/uploadImages.js';



const resumeRouter = express.Router();

resumeRouter.post('/', protect, createResume);
resumeRouter.get('/', protect, getUserResumes);
resumeRouter.delete('/:id', protect, deletResume);
resumeRouter.get('/:id', protect, getResumeById);
resumeRouter.put('/:id', protect, updateresume);
resumeRouter.post('/:id/upload-image', protect, uploadResumeImage);

export default resumeRouter;