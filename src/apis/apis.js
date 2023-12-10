import express from "express";
import apisController from "../controller/apisController";

const router = express.Router()

const initApis = (app) => {
    router.get('/', apisController.getUser)
    router.post('/add', apisController.addUser)
    router.get('/:id', apisController.getUserById)
    router.post('/update', apisController.updateUser)
    router.post('/delete/:id', apisController.deleteUser)
    return app.use("/api/v1/", router)
}

export default initApis;