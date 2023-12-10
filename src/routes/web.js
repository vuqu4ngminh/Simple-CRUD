import express from "express";
import homeController from "../controller/homeController";

const router = express.Router()

const initWebRoutes = (app) => {
    router.get('/', homeController.getUser)
    router.get('/add', homeController.addPage)
    router.post('/add', homeController.addUser)
    router.get('/update/:id', homeController.updatePage)
    router.post('/update', homeController.updateUser)
    router.post('/delete/:id', homeController.deleteUser)
    router.get('*', homeController.notFound)
    return app.use("/", router)
}

export default initWebRoutes;