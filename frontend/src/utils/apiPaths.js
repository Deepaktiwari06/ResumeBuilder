export const BASE_URL = 'https://resumebuilder-backend-mnz4.onrender.com'

export const API_PATHS = {
   AUTH: {
    REGISTER: '/api/auth/register',
    LOGIN: '/api/auth/login',
    USER_PROFILE: '/api/auth/profile',  
   },
RESUME: {
    CREATE: '/api/resume',
    GET_ALL: '/api/resume',
    GET_BY_ID: (id) => `/api/resume/${id}`,
    UPDATE: (id) => `/api/resume/${id}`,
    DELETE: (id) => `/api/resume/${id}`,
    UPLOAD_IMAGE: (id) => `/api/resume/${id}/upload-image`,
},
image: {
    UPLOAD_IMAGE: '/api/auth/upload-image',
}
}