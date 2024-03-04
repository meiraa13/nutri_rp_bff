import { getRounds, hashSync } from 'bcryptjs'
import { Entity, PrimaryGeneratedColumn, Column, 
         BeforeInsert, BeforeUpdate, OneToMany 
} from 'typeorm'
import Food from './food.entity'

@Entity('users')
class User {
    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column({type: 'varchar', length: 120})
    name:string

    @Column({type:'varchar', length:45, unique:true})
    email:string

    @Column({type:'varchar', length: 120})
    password:string

    @OneToMany(() => Food, (food) => food.user)
    foods: Food[]

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const isEncrypted: number = getRounds(this.password)

        if(!isEncrypted){
            this.password = hashSync(this.password, 10)
        }
    }
}

export default User