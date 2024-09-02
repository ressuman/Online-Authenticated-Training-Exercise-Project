import AuthForm from "@/components/auth/auth-form";
import PropTypes from "prop-types";

export default function Home({ searchParams }) {
  const formMode = searchParams.mode || "login";

  return <AuthForm mode={formMode} />;
}

Home.propTypes = {
  searchParams: PropTypes.shape({
    mode: PropTypes.string,
  }).isRequired,
};
