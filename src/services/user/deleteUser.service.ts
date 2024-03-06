import { userRepository } from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../error";

export async function deleteUserService(userId:string):Promise<void> {
    try {
        const userFound: User | null = await userRepository.findOneBy({
            id:userId
        })

        await userRepository.remove(userFound!)
        
    } catch (error) {
        throw new AppError("user not found",404)
    }


}

