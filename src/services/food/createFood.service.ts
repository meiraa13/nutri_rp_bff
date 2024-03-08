import { foodRepository, userRepository } from "../../data-source";
import Food from "../../entities/food.entity";
import User from "../../entities/user.entity";
import { AppError } from "../../error";
import { TFoodRequest } from "../../interfaces/food.interfaces";
import { foodSchema } from "../../schemas/food.schemas";

export async function createFoodService(foodData:TFoodRequest, userId:string) {
    
        const user: User | null = await userRepository.findOne({
            where:{
                id:userId
            }
        })

        if(!user){
            throw new AppError('user not found', 404)
        }

        const newFood: Food = foodRepository.create({
            ...foodData,
            user
        })
        await foodRepository.save(newFood)

        return foodSchema.parse(newFood)       
    
}