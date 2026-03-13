import { IsNotEmpty } from "class-validator";

export class RegistrationDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  surname: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  repeatPassword: string;
}
