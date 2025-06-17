import { IsEmail, IsNotEmpty, Length, MinLength } from 'class-validator';

export class SignupDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @Length(10)
    contact:string
}