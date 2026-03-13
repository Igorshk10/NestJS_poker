import { BadRequestException, Body, Controller, Get, Headers, Post, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";
import { RegistrationDto } from "./dto/registration.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  async register(@Body() createUserDto: RegistrationDto) {
    try {
      return await this.authService.register(createUserDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Post("auth")
  async auth(@Body() authDto: AuthDto) {
    try {
      return await this.authService.auth(authDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Post("verify")
  verify(@Body("token") token: string): any {
    try {
      return this.authService.verify(token);
    } catch {
      throw new UnauthorizedException();
    }
  }

  @Post("refresh")
  refresh(@Body("refreshToken") refreshToken: string) {
    return this.authService.refresh(refreshToken);
  }

  @Get("me")
  me(@Headers("authorization") authorization?: string) {
    const authHeader = String(authorization ?? "");
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice("Bearer ".length).trim() : "";
    if (!token) {
      throw new UnauthorizedException("Missing Bearer token");
    }

    return this.authService.me(token);
  }
}
