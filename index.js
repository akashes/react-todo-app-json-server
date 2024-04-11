// import json server
const jsonServer = require('json-server')
const  middlewareFn = require('./Middleware/appMiddleware')

// create json server using json server library
//creating an instance of json server  . the instance is where you'll configure your api
//create a server application
const mediaPlayerServer = jsonServer.create()

// set up path for db.json file
const router=jsonServer.router('db.json')

// Retuns middleware used by json server
//these middlewares handle things like CORS(Cross origin resource sharing) and other HTTP-related functions.
const middleware=jsonServer.defaults()

// set up port for server app 
//defines the port on which your json server will listen for incoming requests
//set up port for db.json
//when deploying maybe the port 4000 may not be avilable or part is to dynamically select
//another port number if the port 4000 is not available....
const port = 4000  || process.env.PORT


// use middleware and router in server 
//this means that any incoming HTTP requests to your server will 
//go through these middleware and handles by the router
mediaPlayerServer.use(middlewareFn)

mediaPlayerServer.use(middleware)

mediaPlayerServer.use(router)

// server listening for request from frontEnd
 
mediaPlayerServer.listen(port,()=>{
    console.log(` media player server started at port : ${port} and waiting for request` );}) 