import { foodRepository, userRepository } from "../../data-source";
import Food from "../../entities/food.entity";
import User from "../../entities/user.entity";
import { AppError } from "../../error";
import { TFoodCreate, TFoodRequest } from "../../interfaces/food.interfaces";
import { foodSchema } from "../../schemas/food.schemas";

export async function createFoodService(foodData:TFoodRequest, userId:string) {
    if(foodData.side === ""){
        foodData.side = "Não"
    }

    const foodCreate:TFoodCreate = {
        ...foodData,
        conclusion:"baixo"
    }

    if(foodData.result <= 20){
        foodCreate.conclusion = "baixo" 
    }else if(foodData.result >20 && foodData.result <= 39){
        foodCreate.conclusion = "moderado"
    }else {
        foodCreate.conclusion = "alto"
    }

    
    const user: User | null = await userRepository.findOne({
        where:{
                id:userId
        }
    })

    if(!user){
        throw new AppError('user not found', 404)
    }

    const newFood: Food = foodRepository.create({
        ...foodCreate,
        user
    })
    await foodRepository.save(newFood)

    return foodSchema.parse(newFood)       
    
}