# Webdevelopment_Module11_Module10_Assignment20
# IELTS Speaking Test Platform – Role-Based Access Control (RBAC)

## 📘 Project Description

This project implements **Role-Based Access Control (RBAC)** in the IELTS Speaking Test platform using a Flask backend and a React frontend. The purpose of this assignment is to restrict application features and API access based on user roles — namely `admin` and `test taker`.

The application demonstrates secure authentication using JWT tokens, dynamic route rendering based on roles, and API-level authorization checks.

---

## 🎯 Key Objectives

1. **Backend Role-Based API Access**  
   - Implement JWT-based authentication.
   - Embed user roles (`admin` or `test_taker`) in the JWT payload.
   - Create middleware to restrict access to protected API endpoints based on user roles.

2. **Frontend Role-Based Rendering**
   - Separate dashboards for admin and test takers.
   - Conditionally render components and routes based on the authenticated user's role.
   - Display different navigation menus depending on the role.

3. **Navigation and Permissions**
   - Admins can access features like managing questions and reviewing responses.
   - Test takers can view and attempt IELTS speaking tests.
   - Unauthorized users are redirected or shown appropriate error messages.

4. **Error Handling**
   - Show user-friendly error notifications on unauthorized API access.
   - Prevent navigation to restricted frontend routes.

---

## 📁 Folder Structure

ielts-rbac/
├── backend/
│ ├── app.py # Main Flask app with route handling
│ ├── auth.py # Login and token generation
│ ├── middleware.py # Role-checking decorator
│ ├── users.json # Mock user data
│ └── requirements.txt # Python dependencies
└── frontend/
├── public/
├── src/
│ ├── App.tsx # Route management based on role
│ ├── main.tsx
│ ├── index.css
│ ├── pages/
│ │ ├── Login.tsx
│ │ ├── AdminDashboard.tsx
│ │ └── TestTakerDashboard.tsx
│ └── components/
│ └── Navigation.tsx
└── package.json

yaml
Copy code

---

## 🔧 Backend Setup

### Requirements
- Python 3.7+
- Flask
- PyJWT
- Flask-CORS

### Install Dependencies
```bash
cd backend
pip install -r requirements.txt
Run Backend Server
bash
Copy code
python app.py
💻 Frontend Setup
Requirements
Node.js + npm

Vite + React + TypeScript

Install Dependencies
bash
Copy code
cd frontend
npm install
Run Frontend Dev Server
bash
Copy code
npm run dev
🔐 Credentials for Testing
Username	Password	Role
admin	admin123	admin
user	user123	test_taker

🧪 Features & Testing
✅ Role-Based API Access
JWT includes user role.

Middleware (role_required) checks the role before allowing access to protected routes.

Unauthorized users receive a 403 error response.

✅ Frontend Role-Based Features
Upon successful login, users are redirected to their role-specific dashboard.

Admins can access /admindashboard.

Test takers are directed to /testdashboard.

Navigation bar dynamically updates based on the role.

✅ Error Handling
Invalid login credentials show clear error messages.

Unauthorized API access is blocked and shows a user-friendly alert.

🧪 How to Test
API Tests
Use tools like Postman or frontend calls.

Test /admin-only and /test-taker-only routes with different tokens.

Observe error responses when roles do not match.

Frontend Tests
Login as different users (admin, test_taker).

Verify correct dashboard, navigation menu, and page components are shown.

Try accessing routes not meant for the role and verify redirection or error.

# sample output
![image](https://github.com/user-attachments/assets/8ac44a5c-7f7a-4f1d-b1c0-2d64081c2b5c)
