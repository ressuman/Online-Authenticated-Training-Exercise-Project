import AuthForm from "@/components/auth/auth-form";

export default function Home({ searchParams }) {
  const formMode = searchParams.mode || "login";

  return <AuthForm mode={formMode} />;
}
