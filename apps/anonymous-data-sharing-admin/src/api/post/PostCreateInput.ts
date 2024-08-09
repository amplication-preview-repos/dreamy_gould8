import { SpamCheckCreateNestedManyWithoutPostsInput } from "./SpamCheckCreateNestedManyWithoutPostsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  content?: string | null;
  spamChecks?: SpamCheckCreateNestedManyWithoutPostsInput;
  user?: UserWhereUniqueInput | null;
};
