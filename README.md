# 🧠 AI Task Management System

An intelligent task management system built with the **MERN stack** that simplifies employee management and task creation using **Gemini AI**. Employees can add their skills, create tasks with AI-generated descriptions and estimated time, and assign them with ease.

---

## 🚀 Tech Stack

- **Frontend**: React.js, Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **AI Integration**: Gemini 1.5 Flash (via Google Generative Language API)  
- **Environment**: Vite, dotenv  

---

## 📦 Features

- 👤 **Employee Management**
  - Add employee name and skills

- 🧠 **AI-Powered Task Management**
  - Enter task title → AI generates a clear task description
  - AI also estimates time to complete the task

- 📝 **Task Assignment**
  - Assign tasks to specific employees
  - View estimated time for each task

- 📊 **Task Overview Dashboard**
  - See all tasks, assigned employees, and estimated durations

---

## 📸 AI Demo Example

> **Input:** `Generate Java Collection`  
> **Output:**  
> - Implement an ArrayList of integers  
> - Create a LinkedList of names  
> - Use HashMap to map keys to values  
> - ...and so on

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-task-management.git
cd ai-task-management

## Backend Setup
cd server
npm install

PORT=5500
MONGO_URI=your_mongodb_connection
GOOGLE_PALM_API_KEY=your_gemini_api_key


## AI Integration Logic
Uses Gemini 1.5 Flash to:

Generate 5–6 one-line task descriptions

Estimate time to complete a task based on its title