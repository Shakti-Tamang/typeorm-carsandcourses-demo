import { IsEmail, IsNotEmpty, IsStrongPassword, Length, MinLength } from 'class-validator';
import { Role } from 'src/enums/roles.enum';

export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    @IsStrongPassword()
    password: string;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @Length(10)
    contact:string

    @IsNotEmpty()
    role: Role;
}