import { IsEmail, IsNotEmpty, IsStrongPassword, Length, MinLength } from 'class-validator';

export class SignupDto {
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
}