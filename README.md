# MERN Stack Social Media Application
This project is a simple Social Media application with user posts, post interactions, and user interactions. This project uses the MERN stack along with Redux and Material UI.

:warning: Both the backend and frontend of this application is hosted on http://render.com. There will be some spin up time when the website is loaded on the hosted link due to Render's spin down on free-tier hosted websites.
## Preview

![](https://github.com/kerrydachow/social-media-mern/blob/main/socialio-gif.gif?raw=true)

## Features
- Login / Register
- User posts
- Likes for posts
- Image upload
- Add friends

## Future Plans
This project was created as a social media boiler plate so that I could retouch on the MERN framework. Future plans include:
- Implement a working comment section
- Implement Mutual friend requests
- Implement edit my profile
- Provide user feedback for errors
- Fix known bugs

## Local Setup
1. Clone the repository onto your local system
2. Create a MongoDB database and find the connection string
3. Create a `.env` file in `server/` and add the following:
    - `MONGO_URL`="(_mongo_connection_string_)"
    - `PORT`=3001
    - `JWT_SECRET`="(_any string or a secure hash_)"
4. Install backend dependencies & start backend
   ```
   cd server
   npm install
   node index.js
   ```
5. Install frontend dependencies & start frontend
   ```
   cd client
   npm install
   npm run dev
   ```
6. Open http://localhost:3000 or http://127.0.0.1:3000 to view the application

## Optional Setup
- Add mock data by uncommenting line #19, #66, #67 of `/server/index.js`
- Create a `.env` file in `client/` and add `VITE_API_BASE_URL`="(_hosted_backend_url_)" if you decide to host your backend
