# uxstudio Challenge Documentation

## 🚀 Overview

A full-stack application that manages contacts and handles file uploads via AWS S3. The backend is implemented using Express.js with TypeScript, and the frontend is developed using Next.js with Typescript.

## 🌐 Live Demos

- **Frontend**: [https://uxstudio-hw-frontend.vercel.app/](https://uxstudio-hw-frontend.vercel.app/)
- **Backend API**: [https://uxstudio-hw-backend.vercel.app/](https://uxstudio-hw-backend.vercel.app/)
- **Storybook**: [https://uxstudio-hw-storybook.vercel.app/](https://uxstudio-hw-storybook.vercel.app/)

## 🛠 Getting Started

### 🔧 Backend Setup
Navigate to the backend directory and run the following commands:
```bash
cd backend
npm install
npm start
```

#### Environment Variables
Setup your environment variables in a `.env` file in your project root:
```env
PORT=1337
AWS_REGION=[your-aws-region]
AWS_ACCESS_KEY_ID=[your-aws-access-key]
AWS_SECRET_ACCESS_KEY=[your-aws-secret-access-key]
```

Server runs at: [http://localhost:1337](http://localhost:1337)

### 🌐 Frontend Setup
Navigate to the frontend directory and execute:
```bash
cd frontend
npm install
npm run start
```

#### Environment Variables
Setup your environment variables in a `.env` file in your project root:
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:1337/api
```
Frontend runs at: [http://localhost:3000](http://localhost:3000)

### 📚 Storybook Setup
Navigate to the frontend directory and launch Storybook:
```bash
cd frontend
npm run storybook
```
Storybook runs at: [http://localhost:6006](http://localhost:6006)

## 🌍 API Endpoints
_Check the OpenAPI documentation in backend/docs_