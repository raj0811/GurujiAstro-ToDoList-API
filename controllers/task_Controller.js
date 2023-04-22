const User = require("../models/user");
const Task = require("../models/tasks");

const jwt = require('jsonwebtoken')

module.exports.createtask = async function (req, res) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send("Access denied: No Token Provided");
    }

    try {
        const decode = jwt.verify(token, 'slrNZ8H8CsJUcdqtz4Cd44OOzrM84FtZ');
        console.log(decode._id);

        if (!decode) {
            return res.status(404).send('User not found');
        }
        // Create task here

        const { taskName, taskDescriptions, taskStatus } = req.body;
        const task = new Task({
            taskName,
            taskDescriptions,
            taskStatus,
            user: decode._id
        });
        await task.save();
        return res.send(task);

    } catch (err) {
        console.log(err);
        return res.status(400).send('Invalid token')
    }
}


module.exports.update = async function (req, res) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send("Access denied: No Token Provided");
    }

    try {
        const decode = jwt.verify(token, 'slrNZ8H8CsJUcdqtz4Cd44OOzrM84FtZ');
        const userId = decode.indexOf;
        const user = await User.findOne(userId);

        if (!decode) {
            return res.status(404).send('User not found');
        }


        // Update task here
        const id = req.params.id

        const update = {
            taskName: req.body.taskName,
            taskDescriptions: req.body.taskDescriptions,
            taskStatus: req.body.taskStatus,
        }

        Task.findByIdAndUpdate(id, update, { new: true })
            .then(updatedTask => {
                console.log(updatedTask);
                return res.send(updatedTask)
            })



    } catch (err) {
        console.log(err);
        return res.status(400).send('Invalid token')
    }
}



module.exports.delete = async function (req, res) {
    const token = req.headers.authorization;
    console.log(token);
    if (!token) {
        return res.status(401).send("Access denied: No Token Provided");
    }

    try {
        const decode = jwt.verify(token, 'slrNZ8H8CsJUcdqtz4Cd44OOzrM84FtZ');
        const userId = decode.indexOf;
        const user = await User.findOne(userId);

        if (!decode) {
            return res.status(404).send('User not found');
        }
        // Delete task code

        const taskId = req.params.id;
        const task = await Task.findById(taskId);

        if (!task) {
            return res.status(404).send('Task not found');
        }

        if (task.user.toString() !== decode._id.toString()) {
            return res.status(401).send('Access denied: You are not authorized to delete this task');
        }

        await Task.findByIdAndRemove(taskId);
        return res.send('Deleted');



    } catch (err) {
        console.log(err);
        return res.status(400).send('Invalid token')
    }
}




module.exports.getTask = async (req, res) => {
    const token = req.headers.authorization;
    console.log(token);
    if (!token) {
        return res.status(401).send("Access denied: No Token Provided");
    }

    try {
        const decode = jwt.verify(token, 'slrNZ8H8CsJUcdqtz4Cd44OOzrM84FtZ');
        // console.log(indexOf(decode), "decode");
        const userId = decode.indexOf;
        console.log(userId, "userid");
        const user = await User.findOne(userId);

        if (!user) {
            return res.status(404).send('User not found');
        }


        // Show Users task here

        console.log(user);
        const tasks = await Task.find({ user: decode._id })
            .sort('-createdAt')
            .populate('user');

        return res.send(tasks);


    } catch (err) {
        console.log(err);
        return res.status(400).send('Invalid token')
    }
}


module.exports.pendingTask = async (req, res) => {


    const token = req.headers.authorization;
    console.log(token);
    if (!token) {
        return res.status(401).send("Access denied: No Token Provided");
    }

    try {
        const decode = jwt.verify(token, 'slrNZ8H8CsJUcdqtz4Cd44OOzrM84FtZ');
        const userId = decode.indexOf;
        console.log(userId, "userid");
        const user = await User.findOne(userId);

        if (!user) {
            return res.status(404).send('User not found');
        }


        // Show Pending task here

        const pendingTasks = await Task.find({ user: decode._id, taskStatus: 'pending' })
            .sort('-createdAt')
            .populate('user');

        return res.send(pendingTasks);


    } catch (err) {
        console.log(err);
        return res.status(400).send('Invalid token')
    }


}

module.exports.completedTask = async (req, res) => {


    const token = req.headers.authorization;
    console.log(token);
    if (!token) {
        return res.status(401).send("Access denied: No Token Provided");
    }

    try {
        const decode = jwt.verify(token, 'slrNZ8H8CsJUcdqtz4Cd44OOzrM84FtZ');
        const userId = decode.indexOf;
        console.log(userId, "userid");
        const user = await User.findOne(userId);

        if (!user) {
            return res.status(404).send('User not found');
        }
        // Show Completed task here

        const pendingTasks = await Task.find({ user: decode._id, taskStatus: 'completed' })
            .sort('-createdAt')
            .populate('user');

        return res.send(pendingTasks);


    } catch (err) {
        // console.log(err);
        return res.status(400).send('Invalid token')
    }


}


module.exports.searched = async (req, res) => {
    const search = req.params.data
    console.log(search);

    const token = req.headers.authorization;
    console.log(token);
    if (!token) {
        return res.status(401).send("Access denied: No Token Provided");
    }

    try {
        const decode = jwt.verify(token, 'slrNZ8H8CsJUcdqtz4Cd44OOzrM84FtZ');

        if (!decode) {
            return res.status(404).send('User not found');
        }

        const tasks = await Task.find({ user: decode._id, taskName: { $regex: search, $options: "i" } });
        console.log(tasks.length);
        
        return res.send(tasks);
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }

}