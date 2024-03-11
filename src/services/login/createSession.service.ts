import "dotenv/config"
import { compare } from "bcryptjs";
import { userRepository } from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../error";
import { TLogin } from "../../interfaces/login.interfaces";
import { sign } from "jsonwebtoken";

export async function createSessionService(data:TLogin){
    const user: User | null = await userRepository.findOne({
        where:{
            email:data.email
        }
    })

    if(!user){
        throw new AppError("invalid credentials", 401)
    }
    
    const comparePassword = await compare(data.password, user.password)
    if(!comparePassword){
        throw new AppError("invalid credentials", 401)
    }

    const token = sign(
        { userName: user.name },
        String(process.env.SECRET_KEY),
        { subject:user.id, expiresIn:"3h" }
    )

    return { token }
}