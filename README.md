<h1>Node.js RESTful API for Todo App with JWT Authentication</h1>

<p> RESTful API for a Todo App using Node.js and implementing JWT (JSON Web Token) authentication </p>

<p> You can create, read, update, and delete tasks, as well as authenticate and manage their tasks using JWT. </p>

<h2> Feature </h2>

<ul>
    <li> Implement JWT authentication using jsonwebtoken </li>
    <li>Use MongoDB as the database to store task information, including task names, descriptions, and statuses (e.g.,
        completed,pending). </li>
    <li> Users should be able to create, read, update, and delete tasks using appropriate HTTP methods (POST, GET, PUT,
        DELETE). </li>
    <li> Implement authorization to ensure that only authenticated users can perform CRUD operations on their own tasks
    </li>
</ul>

<h2> Implementation </h2>

<ul>
    <li> Clone the Project and Navigate to GurujiAstro-ToDoList-API Folder By <b> cd GurujiAstro-ToDoList-API </b>
        command </li>
    <li> <b>Install </b> the required dependencies. with <b> npm install </b> command</li>
    <li> Run command <b>nodemon index.js</b> </li>

</ul>

<h2>Routes and their responses</h2>
<h3> Base Url: <b>https://localhost:8080/</b> </h3>

<ul>
    <li> <b>/register</b> : You an Reister a user by POST request and parsing name,email,password</li><br><br>
    <div>
        <img src="https://i.ibb.co/mtqW8bL/reg.png" height="300" width="600" />
    </div>
    <li> <b>/login</b> : Normally login(without JWT) </li> <br>

<div>
        <img src="https://i.ibb.co/V3w9xP5/reg.png" height="300" width="600">
    </div>
    <li> <b>/loginjwt</b> : login with JWT </li> <br>
    <div>
        <img src="https://i.ibb.co/zNTxgdp/reg.png" height="300" width="600">
    </div>
    <li> <b>/tasks/createtask</b> : create a task by entering jwt token in authorization key </li> <br>
    <div>
        <img src="https://i.ibb.co/pd0ymkY/reg.png" height="400" width="400">
    </div>
    <li> <b>/tasks/:id/update</b> : Update Task by Passing id of task  </li> <br>
    <div>
        <img src="https://i.ibb.co/DfxmJBF/reg.png" height="400" width="400">
    </div>
    <li> <b>/tasks/:id/delete</b> : Delete Task by Passing id of task  </li> <br>
    <div>
        <img src="https://i.ibb.co/vL3Hkhq/reg.png" height="400" width="600">
    </div>

<li> <b>/tasks/getTask</b> : Show all task of that User </li> <br>

<div>
        <img src="https://i.ibb.co/DQBtDKF/reg.png" height="400" width="600">
    </div>
    <li> <b>/tasks/filter?status=pending</b> or <b>/tasks/filter?status=completed</b> :Additional feature : filterout all pending and completed task  </li> <br>
   <div>
        <img src="https://i.ibb.co/6vbZj3p/reg.png" height="400" width="600">
    </div>
    <li> <b>/tasks/:data/search</b> : Search task By name   </li> <br>

<div>
        <img src="https://i.ibb.co/mrphXc5/reg.png" height="400" width="600">
    </div>

</ul>
