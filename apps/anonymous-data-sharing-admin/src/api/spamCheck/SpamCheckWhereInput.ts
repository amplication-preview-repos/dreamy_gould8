import { StringFilter } from "../../util/StringFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type SpamCheckWhereInput = {
  id?: StringFilter;
  post?: PostWhereUniqueInput;
  reason?: StringNullableFilter;
  spamRating?: IntNullableFilter;
  status?: "Option1";
};
