import { LoginForm } from "@/features/auth/components/LoginForm";

export default function LoginPage() {
  const defaultEmail = "admin@procureflow.com";
  const defaultPassword = process.env.SEED_SUPER_ADMIN_PASSWORD ?? "";

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="flex flex-col items-center gap-6 w-full max-w-sm">
        <h1 className="text-2xl font-semibold">Sign in</h1>
        <LoginForm defaultEmail={defaultEmail} defaultPassword={defaultPassword} />
      </div>
    </main>
  );
}
