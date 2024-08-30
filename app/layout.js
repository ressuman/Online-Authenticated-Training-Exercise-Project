import "./globals.css";

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
