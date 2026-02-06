🌐 Tile Warehouse – React Frontend

This is the React frontend for the Tile Warehouse Management System.
It provides the user interface for managing tiles and communicates with the Spring Boot backend via REST APIs.

🚀 Live Frontend URL (Vercel)

👉 Frontend Application:
https://tiles-warehouse-frontend.vercel.app/

🔗 Backend Integration

The frontend connects to a Spring Boot backend running locally using Docker.

🌐 Backend URL (Local)
http://localhost:8080


⚠️ Important Note

Backend must be running locally

Start backend Docker container before opening the frontend

Frontend will fail to load data if backend is not running

🛠️ Tech Stack

React

JavaScript

HTML5

CSS3

Axios (API Calls)

Vercel (Deployment)

▶️ Run Frontend Locally
🔹 Clone the repository
git clone https://github.com/Thangam1110/tiles-warehouse-frontend.git

🔹 Go to project directory
cd tiles-warehouse-frontend

🔹 Install dependencies
npm install

🔹 Start development server
npm start


Frontend runs at:

http://localhost:3000

⚙️ Environment Configuration

Create a .env file in the project root:

REACT_APP_BACKEND_URL=http://localhost:8080


Make sure the backend Docker container is running on port 8080.

🐳 Backend (Required)

Run backend using Docker:

docker build -t tilewarehouse .
docker run -p 8080:8080 tilewarehouse
