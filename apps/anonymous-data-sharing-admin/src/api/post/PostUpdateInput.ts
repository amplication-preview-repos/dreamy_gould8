import { SpamCheckUpdateManyWithoutPostsInput } from "./SpamCheckUpdateManyWithoutPostsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  content?: string | null;
  spamChecks?: SpamCheckUpdateManyWithoutPostsInput;
  user?: UserWhereUniqueInput | null;
};
