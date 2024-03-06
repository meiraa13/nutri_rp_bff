import { z } from "zod"
import { DeepPartial } from "typeorm"
import { userRequestSchema, userResponseSchema, userSchema, userUpdateSchema } from "../schemas/user.schemas"

type TUser = z.infer<typeof userSchema>
type TUserRequest = z.infer<typeof userRequestSchema>
type TUserResponse = z.infer<typeof userResponseSchema>
type TUserUpdate = DeepPartial<typeof userUpdateSchema>

export { TUser, TUserRequest, TUserResponse, TUserUpdate }