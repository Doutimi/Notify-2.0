import { Input } from "@/components/Input";
import { signUpRequestSchema, useSignUp } from "@/hooks/api/auth/use-sign-up";
import { createFileRoute } from "@tanstack/react-router";
import type { FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";

const SignUp = () => {
  const signUp = useSignUp();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const username = formData.get("username");

    const parsedFormValues = signUpRequestSchema.parse({
      email,
      username,
    });

    console.log(JSON.stringify(parsedFormValues));

    try {
      await signUp(parsedFormValues);
      navigate({ to: "/auth/login" });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-3xl font-medium">Sign Up</h1>
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
        <Input
          name="username"
          title="username"
          htmlFor="username"
          type="text"
          id="username"
          placeholder="sakarachan#232"
          required
        />
        <button type="submit">Submit</button>{" "}
      </div>
    </form>
  );
};

export const Route = createFileRoute("/auth/sign-up/")({
  component: SignUp,
});
