import { SpamCheck as TSpamCheck } from "../api/spamCheck/SpamCheck";

export const SPAMCHECK_TITLE_FIELD = "id";

export const SpamCheckTitle = (record: TSpamCheck): string => {
  return record.id?.toString() || String(record.id);
};
