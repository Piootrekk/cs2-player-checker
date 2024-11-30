import { z } from "zod";

const steamCustomLinkSchema = z
  .string()
  .regex(/^(https:\/\/steamcommunity\.com\/id\/[a-zA-Z0-9-_]+)$/, {
    message: "Input must be a valid Steam Custom URL.",
  });

const steamProfileLinkSchema = z
  .string()
  .regex(/^(https:\/\/steamcommunity\.com\/profiles\/\d{17})$/, {
    message: "Input must be a valid Steam Profile URL.",
  });

const justIdNumbers = z
  .string()
  .min(17)
  .max(17)
  .refine(
    (value) => {
      return !isNaN(Number(value));
    },
    { message: "Input must be a valid Steam ID." }
  );

const steamLinkSchema = steamCustomLinkSchema
  .or(steamProfileLinkSchema)
  .or(justIdNumbers);

export default steamLinkSchema;
