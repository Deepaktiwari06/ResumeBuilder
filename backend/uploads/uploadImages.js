import fs from 'fs';
import path from 'path';

import Resume from '../models/resumeModel.js';
import upload from '../middleware/uploadMiddleware.js';
import { error } from 'console';

export const uploadResumeImage = async (req, res) => {
    try {
        // configure multer middleware
        upload.fields([{ name: "thumbnail"}, { name: "profileImage"}])
        (req, res, async (err) => {
            if (err) {
                return res.status(400).json({ message: "Field upload failed", error: err.message });
            }

            const resumeId = req.params.id;
            const resume = await Resume.findOne({ _id: resumeId, userId: req.user._id });

            if(!resume) {
                return res.status(404).json({ message: "Resume not found or unauthorized" });
            }
            // USE PROCESS CWD TO LOCATE UPLOADS FOLDER
            const uploadsFolder = path.join(process.cwd(), 'uploads');
            const baseUrl = `${req.protocol}://${req.get("host")}`;

            const newThumbnail = req.files.thumbnail?.[0];
            const newProfileImage  = req.file.profileImage?.[0];

            if(newThumbnail) {
                if(resume.thumbnailLink) {
                    const oldThumbnail = path.join(uploadsFolder, path.basename(resume.thumbnailLink));
                    if(fs.existsSync(oldThumbnail)) 
                    fs.unlinkSync(oldThumbnail);
                }
                resume.thumbnailLink = `${baseUrl}/uploads/${newThumbnail.filename}`;
            }

            // profilePreview image
            if(newProfileImage) {
                if (resume.profileInfo?.profilePreviewUrl) {
                    const oldProfileImage = path.join(uploadsFolder, path.basename(resume.profileInfo.profilePreviewUrl));
                    if(fs.existsSync(oldProfileImage)) {
                        fs.unlinkSync(oldProfileImage);
                    }
                }
                resume.profileInfo.profilePreviewUrl = `${baseUrl}/uploads/${newProfileImage.filename}`;
            }

            await resume.save();
            res.status(200).json({ message: "Image uploaded successfully", 
                thumbnailLink: resume.thumbnailLink, 
                profilePreviewUrl: resume.profileInfo?.profilePreviewUrl 
            });
        })
    } 
    catch (error) {
        console.error("Error uploading image:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}