import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SpamCheckListRelationFilter } from "../spamCheck/SpamCheckListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  spamChecks?: SpamCheckListRelationFilter;
  user?: UserWhereUniqueInput;
};
