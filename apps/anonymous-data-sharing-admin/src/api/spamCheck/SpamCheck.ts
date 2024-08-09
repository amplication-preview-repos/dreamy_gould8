import { Post } from "../post/Post";

export type SpamCheck = {
  createdAt: Date;
  id: string;
  post?: Post | null;
  reason: string | null;
  spamRating: number | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
