import "reflect-metadata"
import "express-async-errors"
import cors from "cors"
import express, { Application } from "express"
import { handleErrors } from "./error"
import userRoutes from "./routes/user.routes"
import loginRoutes from "./routes/login.routes"
import foodRoutes from "./routes/food.routes"


const app:Application = express()
app.use(express.json())

app.use(cors())

app.use("/users", userRoutes)
app.use("/login", loginRoutes)
app.use("/foods", foodRoutes)


app.use(handleErrors)
export default app