# TypeScript Express Invoice API

## 📌 Overview
This project is a **RESTful API built with Express.js and TypeScript** for managing invoices and their statuses.  
It supports **CRUD operations** (Create, Read, Update, Delete) and filtering invoices by status (`paid`, `pending`, `overdue`).  
All data is stored in memory for simplicity, making it ideal for learning backend fundamentals.

---

## 🎯 Objectives
This project demonstrates how to:

- Set up a **TypeScript Express backend**
- Implement **CRUD operations** for invoices:
  - Create a new invoice
  - Retrieve all invoices or a single invoice by ID
  - Update an invoice's status
  - Delete an invoice
- Filter invoices by their status
- Handle invalid input and missing resources with **appropriate HTTP status codes**
- Parse JSON request bodies using Express middleware
- Run a backend API server locally
- Apply **strict TypeScript typing and configuration** in a Node.js project

---

## 🛠️ Technologies Used
- Node.js
- Express.js
- TypeScript
- ts-node / ts-node-dev
- npm

---

## 🛠️ Environment / Requirements

- **Node.js:** v20.5.1  <!-- replace with your local Node version -->
- **Express:** v5.2.1
- **TypeScript:** v5.9.3
- **ts-node:** v10.9.2
- **Nodemon:** v3.1.11
- **@types/express:** v5.0.6
- **@types/node:** v25.0.3

### TypeScript Configuration Highlights
- Module system: `NodeNext`
- Target: `ESNext`
- Strict type checking enabled (`strict: true`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`)
- Source maps and declaration files generated (`sourceMap`, `declaration`, `declarationMap`)
- Ensures robust typing, safer code, and better developer experience

---

## 📂 Project Structure
```
Checkpoint-3/
|
|-- .gitignore
|-- index.ts           # Main TypeScript Express server
|-- package-lock.json
|-- package.json
`-- tsconfig.json      # TypeScript configuration
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone <repository-url>
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run the Development Server
```bash
npm run dev
```

Or compile and run for production:
```bash
npm run build
npm start
```

Server will run on **http://localhost:3000**

---

## 📌 API Endpoints

| Method | Endpoint | Description |
|--------|---------|------------|
| GET | `/api/invoices` | Get all invoices |
| GET | `/api/invoices/:id` | Get a single invoice by ID |
| POST | `/api/invoices` | Create a new invoice |
| PUT | `/api/invoices/:id` | Update invoice status |
| DELETE | `/api/invoices/:id` | Delete an invoice |
| GET | `/api/invoices/status/:status` | Get invoices filtered by status (`paid`, `pending`, `overdue`) |

---

## 📄 Example Invoice Object
```json
{
  "id": 1,
  "client": "Acme Corp",
  "amount": 5000,
  "status": "paid"
}
```

---

## ⚠️ Error Handling
- Returns **404** if invoice not found  
- Returns **400** for invalid invoice data  
- Returns **204** for successful deletion without content  

---

## 📚 Learning Outcome
- Setting up a **TypeScript Express project**  
- Typing Express request and response objects  
- Structuring a RESTful API  
- Implementing CRUD operations and filtering  
- Handling errors and HTTP status codes  
- Using strict TypeScript configuration for safer, more maintainable code  

---

## 🧠 Author
**Daniel Dzivor**
