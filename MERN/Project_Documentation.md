
# 🛒 MERN Stack Ecommerce Project Documentation

## 📌 Project Overview
Build a complete **Ecommerce Web Application** using the **MERN Stack (MongoDB, Express, React, Node.js)**.  
The project will be split into **three GitHub repositories**:

1. `ecommerce-backend`
2. `ecommerce-admin-panel`
3. `ecommerce-user-panel`

---

## 📁 Repo Setup

### 🔹 `ecommerce-backend`
Handles all API logic, authentication, file uploads, category/product/user CRUD operations.

### 🔹 `ecommerce-admin-panel`
React frontend for Admins to manage categories, brands, and products.

### 🔹 `ecommerce-user-panel`
React frontend for end users to browse and purchase products.

---

## ⚙️ Backend Setup (`ecommerce-backend`)

### 📦 Modules Used:
```
express dotenv mongoose cors nodemon jsonwebtoken bcryptjs multer
```

### ✅ Stages

#### 🔹 Stage 1: User Authentication + File Upload (Multer)
- `POST /register` → Create new user with hashed password
- `POST /login` → Validate credentials and generate JWT
- `GET /getUserInfo` → Return authenticated user info (protected route)

> 🔐 Use middleware to verify token  
> 🖼 Use `multer` for file/image uploads

---

#### 🔹 Stage 2: Category & Product Management

##### 📂 Category Routes
- `POST /createCategory`
- `GET /getAllCategory`
- `GET /getCategoryByID/:id`
- `PUT /updateCategory/:id`
- `DELETE /deleteCategory/:id`

##### 📂 Product Routes
- `POST /createProduct`
- `GET /getAllProduct`
- `GET /getProductByID/:id`
- `PUT /updateProduct/:id`
- `DELETE /deleteProduct/:id`
- `GET /getProductByCategory/:categoryId`
- `GET /getProductByQuery?q=...`

---

## 🧑‍💼 Admin Panel Setup (`ecommerce-admin-panel`)

### 🔧 Modules:
```
react-router-dom, axios, bootstrap, react-bootstrap, react-toastify, react-icons
```

### 🧱 Pages / Components
- **RegisterPage**
- **LoginPage**
- **DashboardPage**
  - Sidebar + Navbar
  - Category CRUD
  - Product CRUD
  - Brand CRUD (if implemented)

> 🔐 Protect routes using authentication context

---

## 🛍️ User Panel Setup (`ecommerce-user-panel`)

### 🔧 Modules:
```
react-router-dom, axios, bootstrap, react-bootstrap, react-icons, react-toastify
```

### 🧱 Pages / Components

- **Navbar**
- **Carousel**
- **Shop by Category**
- **Shop by Brand**
- **All Products**
- **Product Card**
- **Advertise (optional)**
- **Footer**
- **Login / Register**
- **Cart**
- **Dashboard (User Info + Orders)**

### ✨ Features
- Filter Products by:
  - **Name (search bar)**
  - **Price Range (slider/input)**
  - **Category/Brand**
- **Add to Cart**, **View Cart**, **Remove Item**
- **Authentication and Route Protection**
- **Responsive Design**

---

## 🧠 State & Context Management

### 🔹 `authContext`
- Stores user token, login status, and user info
- Used for protected routes

### 🔹 `themeContext`
- Handles light/dark mode toggling

### 🔹 `cartReducer` (useReducer + useContext)
- Manages cart actions:
  - Add Item
  - Remove Item
  - Update Quantity
  - Calculate Total

---

## 🗂️ Suggested Folder Structure

### Backend
```
ecommerce-backend/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── uploads/
├── .env
├── server.js
```

### Frontend (Admin / User)
```
ecommerce-admin-panel/ or ecommerce-user-panel/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── reducers/
│   ├── App.js
│   ├── index.js
│
├── public/
├── package.json
```

---

## ✅ Submission Checklist

- [ ] Backend Repo: `ecommerce-backend`
- [ ] Admin Panel Repo: `ecommerce-admin-panel`
- [ ] User Panel Repo: `ecommerce-user-panel`
- [ ] All major features implemented
- [ ] Repos pushed to GitHub and links submitted
