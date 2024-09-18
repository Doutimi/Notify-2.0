import { apiClient } from "@/lib/api-client";
import { z } from "zod";

export const signUpRequestSchema = z.object({
  email: z.string().email(),
  username: z.string().trim().min(3),
});
export type SignUpRequest = z.infer<typeof signUpRequestSchema>;

export const useSignUp = () => {
  return async (formData: SignUpRequest) => {
    const res = await apiClient.post("/auth/sign-up", formData);
    if (res.status < 200 && res.status >= 300) {
      throw new Error("Invalid response");
    }
  };
};
