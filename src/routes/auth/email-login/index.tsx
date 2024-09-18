import { createFileRoute } from "@tanstack/react-router";
import Cookies from "js-cookie";
import {
  ACCESS_TOKEN_COOKIE_KEY,
  AUTH_TOKEN_SEARCH_PARAM_KEY,
  REFRESH_TOKEN_COOKIE_KEY,
} from "@/constants/auth";
import { useLogin } from "@/hooks/api/auth/use-login";
import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";

const EmailLogin = () => {
  const navigate = useNavigate();
  const { token } = Route.useSearch();
  const { confirm } = useLogin();

  useEffect(() => {
    if (!token) {
      return;
    }

    const confirmLogin = async () => {
      try {
        const { accessToken, refreshToken } = await confirm({ token });
        Cookies.set(ACCESS_TOKEN_COOKIE_KEY, accessToken, { sameSite: "lax" });
        Cookies.set(REFRESH_TOKEN_COOKIE_KEY, refreshToken, {
          sameSite: "lax",
        });
        navigate({ to: "/appointments" });
      } catch (error) {
        console.error(error);
      }
    };

    confirmLogin();
  }, [token]);

  return null;
};

export const Route = createFileRoute("/auth/email-login/")({
  component: EmailLogin,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      [AUTH_TOKEN_SEARCH_PARAM_KEY]: String(search.token),
    };
  },
});
