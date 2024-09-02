import "../globals.css";

export const metadata = {
  title: "Training Exercise",
  description:
    "Become a member. Browse all our extensive training exercise models",
};

export default function AuthRootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header id="auth-header">
          <p>Welcome Back!</p>
          <form>
            <button>Logout</button>
          </form>
        </header>
        {children}
      </body>
    </html>
  );
}
