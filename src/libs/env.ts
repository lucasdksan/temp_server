import { z } from "zod";

const envSchema = z.object({
    PORT: z.number(),
    DATABASE_URL: z.string(),
    NODEMAILER_EMAIL: z.string().email(),
    NODEMAILER_PASS: z.string(),

    API_FILES_KEY: z.string(),
    JWT_SECRET: z.string(),

    FTP_SITE: z.union([ z.string(), z.null(), z.undefined() ]),
    FTP_USER: z.union([ z.string().email(), z.null(), z.undefined() ]),
    FTP_PASS: z.union([ z.string(), z.null(), z.undefined() ]),
    SHADOW_DATABASE_URL: z.union([ z.string(), z.null(), z.undefined() ])
});

export const env = envSchema.parse(process.env);