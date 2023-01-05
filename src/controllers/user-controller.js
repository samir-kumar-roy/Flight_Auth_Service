// const { response } = require('express');
const UserService = require('../services/user-service');

const userService = new UserService();
const create = async (req, res) => {
    try {
        const response = await userService.create(req.body);
        return res.status(201).json({
            data: response,
            error: {},
            success: true,
            message: "A user created successfully"
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            error: err,
            success: false,
            message: "Not able to create user... from user-controller"
        });
    }
}
module.exports = { create };