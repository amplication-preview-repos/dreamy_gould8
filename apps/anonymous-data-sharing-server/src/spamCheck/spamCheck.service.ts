import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SpamCheckServiceBase } from "./base/spamCheck.service.base";

@Injectable()
export class SpamCheckService extends SpamCheckServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
