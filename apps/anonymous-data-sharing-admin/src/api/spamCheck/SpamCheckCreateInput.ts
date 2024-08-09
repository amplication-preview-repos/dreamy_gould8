import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type SpamCheckCreateInput = {
  post?: PostWhereUniqueInput | null;
  reason?: string | null;
  spamRating?: number | null;
  status?: "Option1" | null;
};
