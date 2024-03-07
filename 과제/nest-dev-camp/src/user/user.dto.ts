import { IsEmail, IsString, MinLength, MaxLength, Matches, IsNotEmpty } from "class-validator";

// email, password, username 검증
export class CreateUserDto {
  @IsEmail()
  @MinLength(5)
  @MaxLength(20)
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(16)
  @Matches(/(?=.*[0-9])(?=.*[a-z])/)
  password: string;

  @IsString()
  @IsNotEmpty()
  username: string;
}

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(16)
  @Matches(/(?=.*[0-9])(?=.*[a-z])/)
  password: string;
}