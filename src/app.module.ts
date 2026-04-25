import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database/database.module";
import { UsersModule } from "./modules/users/users.module";
import { RoomsModule } from "./modules/rooms/rooms.module";
import { AuthModule } from "./modules/auth/auth.module";
import { WalletsModule } from "./modules/wallets/wallets.module";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    UsersModule,
    RoomsModule,
    AuthModule,
    WalletsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
