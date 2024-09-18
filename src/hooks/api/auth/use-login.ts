import { apiClient } from "@/lib/api-client";
import { z } from "zod";

export const loginInitRequestSchema = z.object({
  email: z.string().email(),
});
export const loginConfirmRequestSchema = z.object({
  token: z.string(),
});
export const loginConfirmResponseSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});
export type LoginInitRequest = z.infer<typeof loginInitRequestSchema>;
export type LoginConfirmRequest = z.infer<typeof loginConfirmRequestSchema>;
export type LoginConfirmResponse = z.infer<typeof loginConfirmResponseSchema>;

export const useLogin = () => {
  const init = async (formData: LoginInitRequest) => {
    const res = await apiClient.post("/auth/login/init", formData);

    if (res.status < 200 && res.status >= 300) {
      throw new Error("Invalid response");
    }
  };

  const confirm = async (formData: LoginConfirmRequest) => {
    const res = await apiClient.post("/auth/login/confirm", undefined, {
      headers: {
        Authorization: `Bearer ${formData.token}`,
      },
    });
    const parsedRes = loginConfirmResponseSchema.safeParse(res.data);
    if (!parsedRes.success) {
      throw new Error("Invalid response");
    }
    return parsedRes.data;
  };

  return { init, confirm };
};
