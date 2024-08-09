import { SortOrder } from "../../util/SortOrder";

export type SpamCheckOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  postId?: SortOrder;
  reason?: SortOrder;
  spamRating?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
