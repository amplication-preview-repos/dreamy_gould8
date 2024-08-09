import { Module } from "@nestjs/common";
import { SpamCheckModuleBase } from "./base/spamCheck.module.base";
import { SpamCheckService } from "./spamCheck.service";
import { SpamCheckController } from "./spamCheck.controller";
import { SpamCheckResolver } from "./spamCheck.resolver";

@Module({
  imports: [SpamCheckModuleBase],
  controllers: [SpamCheckController],
  providers: [SpamCheckService, SpamCheckResolver],
  exports: [SpamCheckService],
})
export class SpamCheckModule {}
