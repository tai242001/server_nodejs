const { User } = require("../model/model");

const UserController = {
    //add user
    addUser: async (req, res) => {
        try {
            const newUser = new User(req.body);
            const savedUser = await newUser.save();
            res.status(200).json(savedUser);
        } catch (err) {
            res.status(500).json(err.message);
        }
    },

    //get all user
    getallUser: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    //GET AN USER
    getanUser: async (req, res) => {
        try {
            const users = await User.findById(req.params.id);
            res.status(200).json(users);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    //edit user
    // edituser: async
};
module.exports = UserController;