0.1 Resume Builder (MERN Stack)

A full-stack Resume Builder Web Application built using the MERN stack that allows users to create, edit, preview, and download ATS-friendly professional resumes.
The platform supports multiple resume templates, real-time preview, PDF export, and a structured multi-step form flow.

0.1 User Features
0.1 Features

Create and edit resumes using a guided multi-step form
Live resume preview while editing
Choose from multiple professional resume templates
One-page, ATS-friendly resume layouts
Download resume as A4 PDF
Auto-adjust content to fit within page
Resume completion percentage indicator
Save resume and continue later

0.1 Resume Sections
Profile Information
Contact Details
Work Experience
Education
Skills
Projects
Certifications
Languages
Interests

0.1 Tech Stack

Frontend
React (Vite)
Tailwind CSS
React Router
Axios
Lucide Icons
html2canvas
html2pdf.js
React Hot Toast

0.1 Backend

Node.js
Express.js
MongoDB (Mongoose)
JWT Authentication
REST API

0.1 Project Structure
BUILDRESUME/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── EditResume.jsx
│   │   │   ├── RenderResume.jsx
│   │   │   ├── ThemeSelector.jsx
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── StepProgress.jsx
│   │   │   ├── Cards/
│   │   │   ├── Forms/
│   │   │   └── Templates/
│   │   │       ├── TemplateOne.jsx
│   │   │       ├── TemplateTwo.jsx
│   │   │       └── TemplateThree.jsx
│   │   ├── utils/
│   │   │   ├── axiosInstance.js
│   │   │   ├── apiPaths.js
│   │   │   ├── color.js
│   │   │   └── data.js
│   │   ├── assets/
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   │   └── Resume.js
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
└── README.md

0.1 EditResume.jsx
0.1 Frontend Explanation

This is the core resume editor page.
Responsibilities:
Handles resume form flow (step-by-step)
Manages resume state
Fetches resume data from backend
Updates resume details
Controls preview & PDF download
Opens Theme Selector & Preview modals

0.1 Key logic:

resumeData → complete resume object
currentPage → form navigation
downloadPDF() → generates ATS-friendly PDF
updateTheme() → applies selected template

0.1 ThemeSelector.jsx

Used to select and apply resume templates.
Responsibilities:
Displays available templates
Highlights selected template
Sends selected template ID to parent
Updates resume theme without breaking existing data

0.1 RenderResume.jsx

Responsible for rendering the correct resume template.

0.1 Logic:

Receives templateId
Chooses correct template using switch-case
Renders TemplateOne / TemplateTwo / TemplateThree
This component ensures:
Preview
PDF export
Thumbnail generation
all use the same template logic.

0.1 Resume Templates

Each template:
Is one-page
Uses minimal styling
Is ATS-friendly
Avoids heavy icons, tables, or graphics
Automatically adjusts content spacing

0.1 PDF Generation

PDF is generated using:
html2canvas
html2pdf.js
Key points:
Forced A4 size (210mm × 297mm)
Controlled scale to avoid overflow
Content auto-fits within one page
Clean black-and-white output for ATS

0.1 Backend Explanation
0.1 Resume Model (MongoDB)

Stores:

Resume title
Profile info
Contact info
Experience
Education
Skills
Projects
Certifications
Languages
Interests
Template theme
Completion percentage
Thumbnail image link

0.1 Resume APIs
Method	Endpoint	Description
GET	/resume/:id	Get resume by ID
PUT	/resume/:id	Update resume
PUT	/resume/upload/:id	Upload thumbnail
DELETE	/resume/:id	Delete resume

0.1 Thumbnail Upload

Resume preview is converted into an image
Image is uploaded to backend
Used for dashboard preview cards

0.1 Security & Best Practices

JWT-based authentication
Clean REST architecture
Environment variables for secrets
Production-safe PDF rendering
No inline styles leaked after PDF export

0.1 ATS & Recruiter Friendly Design

One-page resume
Semantic HTML
Clean typography
No canvas-based text
No tables or heavy graphics
Keyword-friendly layout

0.1 How to Run Locally

Frontend
cd frontend
npm install
npm run dev

Backend
cd backend
npm install
npm run dev