A simple social media web application with CRUD functionalithy for ficticious client Groupomania.

This is a full-stack project with me doing both front and back end.

Technologies: React.js, Sass, Node.js, Express, MySQL.

This is my final project for web dev school.

### Instrunction to run project locally
## Setting up Environment
1. Clone this repo locally
2. Navigate to /backend folder on the command line
3. Run command "npm install" (don't include quotation marks)
## Setting up MySQL database
4. Create a MySQL database on port 3306
5. Add MySQL credentials to a new backend/.env file. You will need the following variables: (DB_HOST={Your database hostname}, DB_USER={Your database username}, DB_PASSWORD={Your database password}, DB_PORT={Your database port}, DB_DATABASE={Your database name}, DB_DIALECT=mysql)
6. For your convenience I have included a self-cointaind dump export of the structure of database in backend/others. You can import this structure into your newly created MySQL database and skip the next few steps.
7. Go to the backend/models folder
8. Open models one of the files in that folder
9. Uncomment the MySQL syncronization block of code close to the end of the file and save it.
10. On the command line, from the backend folder run command "npm start".
11. This will start your backend API and sync the model. You can now kill the server program.
12. Re-comment the block of code in the model file and save it again to prevent it from syncing everytime.
13. Repeat process for every model in the models folder.
## Setting up JWT
14. Go the the backend/.env file again and add a variable JSONWEBTOKEN_KEY={Your random string here}.
## Starting backend App
15. Run the backend API if not yet running (on the command line navigate to /backend and run "npm start").
## Setting up frontend
16. On a new command line window navigate to /frontend directory and run "npm install".
## Starting frontend
17. On a new command line window navigate to /frontend directory and run command "npm start".
18. the front end app will lauch in the browser. 
19. You ara all set!. 