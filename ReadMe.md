This is my work on the fullstack cource offered here: https://fullstackopen.com/en

To create a new react project:
npm create vite@latest [DIRECTORY NAME] -- --template react
cd [DIRECTORY NAME]
npm install

to start project:
npm run dev

to create a backend:
mkdir [DIRECTORY NAME]
npm init
npm install
create a .gitignore file
npm install express
npm install --save-dev nodemon
//for logging
npm install morgan
//CORES! for cross-origin hosting
npm install cors

to create a json server:
// use -g to make it global, ADMIN PRIVLEGES NEEDED
npm install json-server

to start a json server:
// --port specifies a port number. 3000 is default
// --watch makes it watch for changes in db.json
json-server --port 3001 --watch db.json

to start a local json server:
// --port specifies a port number. 3000 is default
// --watch makes it watch for changes in db.json
npx json-server --port 3001 --watch db.json
