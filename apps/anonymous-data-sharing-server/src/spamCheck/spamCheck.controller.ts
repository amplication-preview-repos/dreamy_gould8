import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SpamCheckService } from "./spamCheck.service";
import { SpamCheckControllerBase } from "./base/spamCheck.controller.base";

@swagger.ApiTags("spamChecks")
@common.Controller("spamChecks")
export class SpamCheckController extends SpamCheckControllerBase {
  constructor(protected readonly service: SpamCheckService) {
    super(service);
  }
}
