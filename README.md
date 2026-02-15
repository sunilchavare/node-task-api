# Node Task API

A simple REST API built with Node.js and Express that supports full CRUD operations for managing tasks.

---

## Features

- Create a task
- Read all tasks
- Update a task
- Delete a task
- Basic input validation
- Structured using routes and controllers

---

## Tech Stack

- Node.js
- Express.js
- dotenv

---

## Installation & Setup

1. Clone the repository

2. Install dependencies

```bash
npm install

Create a .env file in the root directory and add:
PORT=3000

Start the server
node index.js

Server runs at:
http://localhost:3000

API Endpoints
GET /tasks
Returns all tasks.
POST /tasks
Creates a new task.
PUT /tasks/:id
Updates an existing task.
DELETE /tasks/:id
Deletes a task.

Example Request-
Create Task:

POST /tasks
Content-Type: application/json

Request Body:
{
  "title": "Finish backend project"
}
Example Response:
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Finish backend project",
    "completed": false }
}
  

Project Structure:-
src/
  controllers/
    tasksController.js
  routes/
    tasks.js
index.js