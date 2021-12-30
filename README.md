# Memelandia
Project using MERNT.

Memelandia is a social media site. Logged and guests may view all the posts and comments, but only logged users can post, edit or delete, like their own or others' posts, comment, and have thieir own space. They can search for a friend, send him a message, and view his space and profile picture.

The REST API is using Expressjs, Nodejs, and Mongoose. For the project is need to use your own DB link and add it in devConfig folder with index.js file, which needs to have a variable with PORT, DB_CONECTION, and SECRET word. Looking like this:

-----------------------------
// server/devConfig/index.js

const config = {
    development: {
        PORT: number,
        DB_CONNECTION: 'mongodb+srv://....',
        SECRET: string
    }, 
    production: {
        PORT: number,
        DB_CONNECTION: 'mongodb+srv://....',
        SECRET: string
    }
};

-----------------------------

The Client part is using Reactjs and Tailwincss. In the client folder you need to add .ENV file with this content:

----------------------------
// client/.ENV

PORT=3000;

----------------------------
After adding the special files you need to open two consoles in the folder of the project. In the first: cd client > npm start. In the second: cd server > npm start. 

Happy hacking!
by Dilyana Nedelcheva





