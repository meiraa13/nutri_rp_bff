import "reflect-metadata"
import "express-async-errors"
import cors from "cors"
import express, { Application } from "express"
import { handleErrors } from "./error"


const app:Application = express()
app.use(express.json())

app.use(cors())


app.use(handleErrors)
export default app