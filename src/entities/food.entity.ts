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

    @Column("varchar")
    consumption_mode:string

    @Column({type:"enum", enum:conclusionResult })
    conclusion:conclusionResult

    @Column("boolean")
    hipoglycemic:boolean

    @Column("boolean")
    highlight:boolean

    @ManyToOne(()=>User)
    user:User


}

export default Food