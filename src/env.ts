import { z } from "zod";

const envVariables = z.object({
  VITE_API_BASE_URL: z.string().optional(),
});

export const env = envVariables.parse(import.meta.env);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
