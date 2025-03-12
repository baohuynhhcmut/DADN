const userRoute = require("./user.route")


const Route = (app) => {
    app.use('/user',userRoute)

}

module.exports = Route;
