import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";



@Entity({name:'user'})
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id!: number;

  @Column()
  avatar!: string;

  @Column()
  nickname!: string;
    
  @Column()
  job!: string;

  @Column()
  introduce!: string;
    
}