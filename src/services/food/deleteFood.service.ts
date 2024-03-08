import { foodRepository } from "../../data-source";
import { AppError } from "../../error";

export async function deleteFoodService(userId:string, foodId:string):Promise<void> {
  
    const food = await foodRepository.findOne({
        where:{
            id:foodId
        },
        relations:{
            user:true
        }
    })

    if(!food){
        throw new AppError("food not found", 404)
    }

    if(food.user.id !== userId){
        throw new AppError("you dont have permission", 403)
    }

    await foodRepository.remove(food)


}

