import * as graphql from "@nestjs/graphql";
import { SpamCheckResolverBase } from "./base/spamCheck.resolver.base";
import { SpamCheck } from "./base/SpamCheck";
import { SpamCheckService } from "./spamCheck.service";

@graphql.Resolver(() => SpamCheck)
export class SpamCheckResolver extends SpamCheckResolverBase {
  constructor(protected readonly service: SpamCheckService) {
    super(service);
  }
}
