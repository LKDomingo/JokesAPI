const express = require("express"); // import express so we can use express features

const app = express(); //create our app varible which is an instanc of express
const port = 8000;

//NEED THIS TO HANDLE POST REQUESTS. HAVE THESE TWO LINES BEFORE THE ROUTES!!!
app.use(express.json()); //lets our app convert form info inro json
app.use(express.urlencoded({extended:true})); //lets our app parse form information


// //import mongoose config file
require("./server/config/mongoose.config");

//import routes at the end
require("./server/routes/joke.routes")(app);

// Always have this as the closing line on the server
app.listen( port, () => console.log(`Listening on port: ${port}`) );
