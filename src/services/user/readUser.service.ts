import { userRepository } from "../../data-source"
import User from "../../entities/user.entity"
import { allUsersSchema, userResponseSchema } from "../../schemas/user.schemas"

async function readAllUsersService() {
    const users:User[] = await userRepository.find({
        relations:{
            foods:true
        }
    })

    const usersResponse = allUsersSchema.parse(users)

    return usersResponse
}

export { readAllUsersService }