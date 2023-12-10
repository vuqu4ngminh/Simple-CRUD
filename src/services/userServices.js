import { User } from "../model/model";

const getUser = async () => {
    try {
        const users = await User.find({})
        return users
    } catch (error) {
        console.log(error);
    }
}
const addUser = async (_name, _age) => {
    try {
        const user = {
            name: _name,
            age: _age
        }
        await User.create(user)
    } catch (error) {
        console.log(error);
    }
}
const getUserById = async (_id) => {
    try {
        const currentUser = await User.findById(_id)
        return currentUser
    } catch (error) {
        console.log(error);
    }
}
const updateUser = async (_id, _name, _age) => {
    try {
        const id = {
            _id: _id
        }
        const newData = {
            name: _name,
            age: _age
        }
        await User.findOneAndUpdate(id, newData)
    } catch (error) {
        console.log(error);
    }
}
const deleteUser = async (_id) => {
    try {
        const id = {
            _id: _id
        }
        await User.deleteOne(id)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getUser,
    addUser,
    updateUser,
    getUserById,
    deleteUser
}