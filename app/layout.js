import "./globals.css";
import PropTypes from "prop-types";

export const metadata = {
  title: "Training Exercise",
  description:
    "Become a member. Browse all our extensive training exercise models",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
