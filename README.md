# 👨‍💻 ReactJS Assignment 2 – Advanced User Profile App

This is a ReactJS frontend assignment project built for testing proficiency with modern React features, component design, and the Ant Design UI framework.

## 🚀 Live Demo

[View Deployed App](https://assignment-2-livid-pi.vercel.app/)


## 📌 Assignment Objectives

This assignment demonstrates:

- Building a responsive user profile UI using **React** and **Ant Design**
- Fetching data from an external REST API
- Creating reusable components (`UserCard`, `EditUserModal`)
- Working with forms and controlled components
- Using **state lifting**, **conditional rendering**, and **event handling**
- Implementing "Like" and "Delete" functionality per user

---

## 🧠 Features Implemented

✅ Fetch user data from `https://jsonplaceholder.typicode.com/users`  
✅ Display user details in responsive Ant Design cards  
✅ Dynamically load avatar images using DiceBear API  
✅ Like/unlike a user (with toggle state)  
✅ Delete a user (removes from list)  
✅ Edit user details via modal with Ant Design Form  
✅ Responsive grid layout using Ant Design's `Row` and `Col`  
✅ Loading spinner while fetching data  
✅ Styled using Ant Design components and custom CSS

---

## 🔧 Tech Stack

- ReactJS (Functional Components + Hooks)
- [Ant Design](https://ant.design) UI Library
- Fetch API for HTTP requests
- DiceBear Avatars API
- Vercel for deployment

---

## 🛠 Installation & Setup

```bash
# Clone the repository
git clone [https://github.com/Shivaprasad-webdev/assignment_2]
cd react-assignment-2

# Install dependencies
npm install

# Run the app locally
npm start
📦 Build & Deploy
bash
Copy code
# Build the React app
npm run build

# Deploy with Vercel (if using Vercel CLI)
vercel
🤖 API Used
User Data
URL: https://jsonplaceholder.typicode.com/users

Avatars
URL: https://api.dicebear.com/9.x/avataaars/svg?seed=<username>&mood=happy
