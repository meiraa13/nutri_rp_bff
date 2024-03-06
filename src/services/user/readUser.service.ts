import { userRepository } from "../../data-source"
import User from "../../entities/user.entity"
import { allUsersSchema, userResponseSchema } from "../../schemas/user.schemas"

async function readAllUsersService() {
    const users:User[] = await userRepository.find()

    const usersResponse = allUsersSchema.parse(users)

    return usersResponse
}

export { readAllUsersService }