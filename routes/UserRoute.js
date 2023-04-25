module.exports = async (app) => {

    const controller = await require('../controllers/UserController')()

    app.get('/user', controller.index)
    app.post('/user/create', controller.create)
};