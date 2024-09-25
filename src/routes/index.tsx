import { createFileRoute } from "@tanstack/react-router";
import "./index.css" // TODO: migrate remaining global styles to modules 
import styles from "./index.module.css";
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
      <div className={styles["parent"]}>
        <div className={styles["parent__div"]}>
          <h1>Notify</h1>
          <img
            className={styles["bell-icon"]}
            src="bell icon.svg"
            alt="bell icon"
          />
        </div>
        <em className={styles["subheader-em"]}>...never forget appointments or due bills</em>
        <div className={styles["footer"]}>
          {session && (
            <>
              <Link to="/appointments">
                <button type="button">Appointments</button>
              </Link>
              <Link to="/bills">
                <button type="button"> Bills</button>
              </Link>
            </>
          )
          // (<>
          //     <Link to="/auth/sign-up">
          //       <button type="button">Register</button>
          //     </Link>
          //     <Link to="/auth/login">
          //       <button type="button">Login</button>
          //     </Link>
          //   </> ) : 
            }
        </div>
      </div>
    </>
  );
};

export const Route = createFileRoute("/")({
  component: Home,
});
