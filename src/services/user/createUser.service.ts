import { userRepository } from "../../data-source";
import User from "../../entities/user.entity";
import { TUserRequest, TUserResponse } from "../../interfaces/user.interfaces";
import { userResponseSchema } from "../../schemas/user.schemas";

export async function createUserService(userData:TUserRequest):Promise<TUserResponse>{
    const newUser:User = userRepository.create(userData)
    await userRepository.save(newUser)

    const userResponse:TUserResponse = userResponseSchema.parse(newUser)

    return userResponse

}

