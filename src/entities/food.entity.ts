import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./user.entity";

export enum conclusionResult {
    LOW = "baixo",
    MID = "moderado",
    HIGH = "alto"
}

@Entity("foods")
class Food {
    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column("varchar")
    name:string

    @Column("int")
    weight:number

    @Column({type:"varchar", default:""})
    side:string | undefined

    @Column({type:"int", default:0})
    weight_side:number | undefined

    @Column("int")
    result:number

    @Column("varchar")
    conclusion:string

    @Column("boolean")
    hipoglycemic:boolean

    @Column("boolean")
    highlight:boolean

    @ManyToOne(()=>User)
    user:User

}

export default Food