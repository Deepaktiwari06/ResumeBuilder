import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    thumbnailLink: {
      theme: String,
    },
    template: {
      theme: String,
      colorPalette: [String],
    },

    profileInfo: {
      fullName: String,
      profilePreviewUrl: String,
      designation: String,
      summary: String,
    },

    contactInfo: {
      email: String,
      phone: String,
      location: String,
      linkedin: String,
      github: String,
      website: String,
    },

    // Work Experience Section
    workExperience: [
      {
        company: String,
        role: String,
        startDate: String,
        endDate: String,
        designation: String,
      },
    ],

    // Education Section
    education: [
      {
        institution: String,
        degree: String,
        startDate: String,
        endDate: String,
      },
    ],

    skills: [
      {
        name: String,
        progress: Number,
      },
    ],

    projects: [
      {
        title: String,
        description: String,
        github: String,
        liveLink: String,
      },
    ],

    certifications: [
      {
        title: String,
        issuer: String,
        year: String,
      },
    ],

    languages: [
      {
        name: String,
        progress: Number,
      },
    ],

    interests: [String],
  },
  { timestamps: true },
);

export default mongoose.model("Resume", resumeSchema);
