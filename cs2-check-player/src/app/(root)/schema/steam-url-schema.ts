import { z } from "zod";

const steamCustomLinkSchema = z
  .string()
  .regex(/^(https:\/\/steamcommunity\.com\/id\/[a-zA-Z0-9-]+)$/, {
    message: "Input must be a valid Steam Custom URL.",
  });

const steamProfileLinkSchema = z
  .string()
  .regex(/^(https:\/\/steamcommunity\.com\/profiles\/\d{17})$/, {
    message: "Input must be a valid Steam Profile URL.",
  });

const steamLinkSchema = steamCustomLinkSchema.or(steamProfileLinkSchema);

export default steamLinkSchema;
