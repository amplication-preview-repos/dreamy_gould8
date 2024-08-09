import { SpamCheck } from "../spamCheck/SpamCheck";
import { User } from "../user/User";

export type Post = {
  content: string | null;
  createdAt: Date;
  id: string;
  spamChecks?: Array<SpamCheck>;
  updatedAt: Date;
  user?: User | null;
};
