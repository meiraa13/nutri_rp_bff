import { foodRepository } from "../../data-source"
import Food from "../../entities/food.entity"

async function readAllFoodsService() {
    const foods:Food[] = await foodRepository.find({})

    return foods
}

export { readAllFoodsService }