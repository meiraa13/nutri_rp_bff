import { Request, Response } from "express"
import { convertCsvFile } from "../middlewares/convertCsvFile.middleware"

export async function uploadFileController(req:Request, res:Response) {
    const path:any = req.file?.path
    const data = await convertCsvFile(path)
    console.log(data)
    return res.json("oi")

}