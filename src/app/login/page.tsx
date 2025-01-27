import { Suspense } from "react";
import LoginForm from "../ui/login-form";

export default function Home() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>);
}
