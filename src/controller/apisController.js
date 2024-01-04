import axios from "axios";
import userServices from "../services/userServices";
require('dotenv').config();

const getUser = async (req, res) => {
    try {
        const users = await userServices.getUser()
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}
const addUser = async (req, res) => {
    try {
        const { name, phone, email, address, password, role } = req.body
        await userServices.addUser(name, phone, email, address, password, role)
        return res.status(201).json({
            message: "OK"
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
const getUserById = async (req, res) => {
    try {
        const currentUser = await userServices.getUserById(req.params.id)
        return res.status(200).json(currentUser)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
const getUserByEmail = async (req, res) => {
    try {
        const currentUser = await userServices.getUserByEmail(req.body.email)
        return res.status(200).json(currentUser)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
const updateUser = async (req, res) => {
    try {
        const { id, name, phone, email, address, password, role } = req.body
        await userServices.updateUser(id, name, phone, email, address, password, role)
        return res.status(200).json({
            message: "OK"
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        await axios.post(process.env.PRODUCT_API + "delete/" + id)
        await userServices.deleteUser(id)
        return res.status(200).json({
            message: "OK"
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
// login
const getUserByEmailPassword = async (req,res) => {
    try {
        const {email, password} = req.body
        const user = await userServices.getUserByEmailPassword(email,password)
        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
module.exports = {
    getUser,
    addUser,
    updateUser,
    getUserById,
    getUserByEmail,
    getUserByEmailPassword,
    deleteUser
}