import { z } from "zod"
import { DeepPartial } from "typeorm"
import { loginSchema } from "../schemas/login.schemas"

export type TLogin = z.infer<typeof loginSchema>