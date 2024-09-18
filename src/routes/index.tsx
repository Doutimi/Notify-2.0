import { createFileRoute } from "@tanstack/react-router";
import "./index.css";
import { Link } from "@tanstack/react-router";

const getSession = () => {
  // TODO: Decode JWT token stored in cookie storage and return user data
  const rand = Math.random() * 10;
  if (rand > 5) {
    return {
      user: {
        name: "John Doe",
        email: "johndoe@example.com",
      },
    };
  } else return undefined;
};

const Home = () => {
  const session = getSession();
  return (
    <>
      <div className="w-full h-full relative">
        <h1 className="flex items-center justify-center gap-[4px]">
          <div className="">Notify</div>
          <img src="bell icon.svg" alt="bell icon" />
        </h1>
        <p>
          <em>...never forget appointments or due bills</em>
        </p>
        {session ? (
          <div className="frame">
            <Link to="/auth/sign-up">
              <button type="button">Register</button>
            </Link>
            <Link to="/auth/login">
              <button type="button">Login</button>
            </Link>
          </div>
        ) : (
          <div className="frame">
            <Link to="/appointments">
              <button type="button">Appointments</button>
            </Link>
            <Link to="/bills">
              <button type="button"> Bills</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export const Route = createFileRoute("/")({
  component: Home,
});
