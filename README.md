## Todolist React Project

This is a simple TodoList React application that interacts with a dummy REST API [jsonplaceholder](https://jsonplaceholder.typicode.com/todos) to perform CRUD (Create, Read, Update, Delete) operations on todo items.

**Features:**

- Fetch Todo Items

  - Retrieves and displays todo items from the JSONPlaceholder API.

- Add a Todo Item

      - Allows users to add new todo items.
      - Sends a POST request to https://jsonplaceholder.typicode.com/todos to simulate adding a new item.
      - The added item is stored in the React component's state.

- Update a Todo Item

  - Supports updating existing todo items.
  - Initiates a PUT request to https://jsonplaceholder.typicode.com/todos/:id to simulate updating an item.
  - The updated item reflects changes in the React component's state.

- Delete a Todo Item

  - Enables users to delete todo items.
  - Sends a DELETE request to https://jsonplaceholder.typicode.com/todos/:id to simulate item deletion.
  - The deleted item is removed from the React component's state.

**Table of Contents**

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Running the Application](#running-the-application)

## Getting Started

### Prerequisites

- Node.js (version 14 or later) and npm (or yarn) installed on your system. You can download them from [https://nodejs.org/en/download](https://nodejs.org/en/download)

### Installation

1. Clone the repository:

```bash
git clone []()
```

2. Navigate to the project directory:

```bash
cd todolist-react
```

3. Install dependencies:

```bash
npm install
```

## Project Structure

This project adheres to a well-organized structure for better maintainability:

- src: Houses the core React application code.
- components: Reusable React components for building UI elements.
- pages: Individual application pages with specific functionalities, including 404Page.
- redux: Contains Redux-related files for managing application state:

  - todoReducer.js: Manages to-dos state and functions(getAllTodos, addTodo, editTodo, deleteTodo).

- App.js: The main application entry point, responsible for initializing components, routing, and authentication.
- public: Contains static assets like images, fonts, and favicons used throughout the app.
- package.json: Manages project dependencies, scripts, and metadata.

## Running the Application

1. Start the development server:

```bash
npm start
```

This will launch the development server and open BusyBuy in your default browser, usually at http://localhost:3000 (the port might vary).
