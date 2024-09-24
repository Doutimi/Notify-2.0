import { createFileRoute } from "@tanstack/react-router";
import { Input } from "@/components/Input";
import {
  loginInitRequestSchema,
  useLogin,
} from "@/hooks/api/auth/use-login";
import type { FormEvent } from "react";

const Login = () => {
  const { init: login } = useLogin();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");

    const parsedFormValues = loginInitRequestSchema.parse({
      email,
    });

    console.log(JSON.stringify(parsedFormValues));

    try {
      await login(parsedFormValues);
      // TODO: Toast message saying to check email for login link
      // or display a spinner waiting for the user to be redirected
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-3xl font-medium">Login</h1>
      <div className="flex justify-center max-w-md flex-col mx-auto">
        <Input
          name="email"
          title="Email"
          htmlFor="email"
          type="text"
          id="email"
          placeholder="janedoe@example.com"
          required
        />
        <button type="submit">Submit</button>{" "}
      </div>
    </form>
  );
};

export const Route = createFileRoute("/auth/login/")({
  component: Login,
});
