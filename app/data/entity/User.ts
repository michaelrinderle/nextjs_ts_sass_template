import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity("user")
export class User {
 
  @ObjectIdColumn()
  user_id!: number;
  
  @Column('text')
  email!: string;

  @Column('text')
  hash!: string;
}