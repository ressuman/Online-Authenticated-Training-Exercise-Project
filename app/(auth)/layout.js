import { logOut } from "@/actions/auth/auth-actions";
import "../globals.css";
import PropTypes from "prop-types";

export const metadata = {
  title: "Training Catalog",
  description: "Become a member.",
};

export default function AuthRootLayout({ children }) {
  return (
    <>
      <header id="auth-header">
        <p>Welcome Back!</p>
        <form action={logOut}>
          <button>Logout</button>
        </form>
      </header>
      {children}
    </>
  );
}

AuthRootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
