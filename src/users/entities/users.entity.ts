import { Role } from 'src/enums/roles.enum';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, length: 100 })
    email: string;

    @Column()
    password: string;

    @Column({ length: 100 })
    username: string;

    @Column({ length: 20, nullable: true })
    contact: string;
    
    @Column({ type: 'enum', enum: Role, default: Role.User })
    role: Role;
}