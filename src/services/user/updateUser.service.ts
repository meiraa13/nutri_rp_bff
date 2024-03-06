import { userRepository } from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../error";
import { TUserResponse, TUserUpdate } from "../../interfaces/user.interfaces";
import { userResponseSchema } from "../../schemas/user.schemas";

export async function updateUserService(userId:string, userData:TUserUpdate):Promise<TUserResponse> {
    try {
        const userFound: User | null = await userRepository.findOneBy({
            id:userId
        })

        const updatedUser: User = userRepository.create({
            ...userFound,
            ...userData
        })

        await userRepository.save(updatedUser)
        const userResponse:TUserResponse = userResponseSchema.parse(updatedUser)
        return userResponse
        
    } catch (error) {
        throw new AppError("user not found",404)
    }


}
