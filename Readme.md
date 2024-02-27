#chai aur backend series 

This is a video series on backend with javascript

Project Overview => https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj

/*
First create a 
1- package.json file using git init and setup accordingly then 
2- readme file if you want 
3- public folder for storing utilities files
4- can create .gitkeep folder to store and update git from empty folder or file as well
5- .gitignore to ignore files from pushing or sharing data with others (can use .gitignore generator)
6- .env or .env.sample for storing private data like credentials 
7- create folder as build on src folder 
8- download prettier extension on vs code or npm i prettier
9- create file .prettierrc for formatting document as needed like where to add single qoute bracket semicolon and tab WIdth and wwhere to use
10- create .prettierignore => where not to implement prettier features
11- connect db mongodb with 2 methods within index.js or in db folder
12- connected to server with organized folder structure (export app from app.js and import at index.js)
13- added cors origin (allow url request ), cookieparser and some more middlewares
14- created utils files
15- create model schema and add bcrypt package to hash password and jsonweb token
16- # command => crypto.randomBytes(256).toString('base64')
17- accesstoken & refresh token, created 2 model user and video. In video model will discuss aggregation pipelines later on
18- learned how to upload files in nodejs using cloudinary
19- HTTP CRASH COURSE
/*
    HTTP: HYPER TEXT TRANSFER PROTOCOL
    URL => UNIFORM RESOURCE LOCATOR
    URI => UNIFORM RESOURCE INDENTIFIER
    URN => UNIFORM RESOURCE NAME

    WHAT ARE HTTP HEADERS?
    - metadata => key-value sent along with request and response 
    - caching, authentication, manage state

    - REQUEST HEADERS -> FROM CLIENT
    - RESPONSE HEADERS -> from server
    - REPRESENTATION HEADERS -> encoding/ compression
    - PAYLOAD HEADERS -> data

    MOST COMMON HEADERS
    - ACCEPT: application/json
    - USER- AGENT
    - AUTHORIZATION : like Bearer token
    - CONTENT-TYPE
    - COOKIE
    - CACHE - CONTROL

    CORS
    - ACCESS -CONTROL - ALLOW - ORIGIN
    - ACCESS -CONTROL - ALLOW - CREDENTIALS
    - ACCESS -CONTROL - ALLOW - METHOD

    SECURITY
    - CROSS - ORIGIN -EMBEDDER - POLICY
    - CROSS - ORIGIN -OPENER - POLICY 
    - CONTENT - SECURITY - POLICY
    - X - XSS - PROTECTION

    HTTP METHODS => Basic set of operations that can be used to interact with server

    - GET => RETRIEVE A RESOURCE
    - HEAD => no message body (response headers only)
    - OPTIONS => what operations are avaliable
    - TRACE => loopback test (get same data)
    - DELETE => remove a resource
    - PUT => relace a resource
    - POST => interact with resource (mostly add)
    - PATCH => change part of a resource

    HTTP STATUS CODE
    - 1 xx:  INFORMATIONAL
    - 2 xx : Success
    - 3 xx : Redirection
    - 4 xx : client error
    - 5 xx : server error


    100 COntinue
    102 Processing
    200 Ok
    201 Created
    202 Accepted
    307 Temporary redirect
    308 permanent redirect
    400 Bad request
    401 Unauthorized
    402 Payment required
    404 Not found
    500 Internal server error
    504 Gateway time out
*/
20- created Controller files
21- created router files
*/