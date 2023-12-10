import userServices from "../services/userServices";

const getUser = async (req,res) => {
    const users = await userServices.getUser()
    return res.render("getUser.ejs",{data: users})
}
const addPage = (req,res) => {
    return res.render('addUser.ejs')
}
const addUser = async (req,res) => {
    const {name,age} = req.body
    await userServices.addUser(name,age)
    return res.redirect('/')
}
const updatePage = async (req,res) => {
    const currentUser = await userServices.getUserById(req.params.id)
    return res.render('updateUser.ejs',{data: currentUser})
}
const updateUser = async (req,res) => {
    const {id,name,age} = req.body
    await userServices.updateUser(id,name,age)
    return res.redirect('/')
}
const deleteUser = async (req,res) => {
    const id = req.params.id
    await userServices.deleteUser(id)
    return res.redirect('/')
}
const notFound = (req,res) => {
    return res.render('notFound.ejs')
}
module.exports = {
    getUser,
    addUser,
    addPage,
    updateUser,
    updatePage,
    deleteUser,
    notFound
}