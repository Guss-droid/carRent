import { v4 as uuid } from "uuid";
import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  driverLicense: string;

  @Column()
  isAdmin: boolean;
  
  @Column()
  avatar: string;

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid()
    }
  }
}