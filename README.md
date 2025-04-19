# Quora-like RESTful API – CRUD Implementation with Express.js

This is a simple RESTful API project simulating basic functionality of a Quora-like posting system using Node.js, Express.js, and EJS as the templating engine. It allows users to create, read, update, and delete (CRUD) posts.

## 🚀 Features

- View all posts
- Create a new post
- Edit an existing post
- Delete a post
- View post details
- RESTful routing
- Method Override for PATCH and DELETE support


## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Templating Engine:** EJS
- **UUID:** To generate unique IDs for posts
- **Middleware:** method-override, express.urlencoded
- **Frontend:** HTML + EJS templates + CSS
- 
- ## 📁 Folder Structure

. ├── index.js # Main server file ├── views/ # EJS templates │ ├── index.ejs # All posts page │ ├── new.ejs # Form to create a new post │ ├── edit.ejs # Form to edit an existing post │ └── show.ejs # Single post view ├── public/ # Static files like style.css ├── package.json
└── README.md

---
## 🔄 RESTful Routes

| Method | Route                | Description           |
|--------|----------------------|-----------------------|
| GET    | /posts               | Show all posts        |
| GET    | /posts/new           | Form to create post   |
| POST   | /posts               | Create a new post     |
| GET    | /posts/:id           | Show single post      |
| GET    | /posts/:id/edit      | Form to edit post     |
| PATCH  | /posts/:id           | Update post           |
| DELETE | /posts/:id           | Delete post           |

## 📸 Screenshot

![App Screenshot](https://github.com/Nandini-Khanna/RESTful-API-implementation/blob/main/1.png?raw=true)
![App Screenshot](https://github.com/Nandini-Khanna/RESTful-API-implementation/blob/main/2.png?raw=true)
![App Screenshot](https://github.com/Nandini-Khanna/RESTful-API-implementation/blob/main/3.png?raw=true)
![App Screenshot](https://github.com/Nandini-Khanna/RESTful-API-implementation/blob/main/4.png?raw=true)


## 🧑‍💻 Getting Started

Follow these steps to run the project locally:

 1. Clone the repository

git clone https://github.com/Nandini-Khanna/RESTful-API-implementation.git
cd RESTful-API-implementation
 2. Install dependencies
npm install
 3. Run the application
node index.js
4. Open in browser
[http://localhost:3000/posts](http://localhost:3000/posts)



## 🙌 Acknowledgements

This project is a part of my learning journey while practicing full-stack development and understanding REST APIs in depth.








