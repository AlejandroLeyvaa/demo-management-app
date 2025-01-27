import SignupForm from "../ui/signup-form";
import { Suspense } from 'react';

export default function Home() {
  return (
    <Suspense>
      <SignupForm />
    </Suspense>
  );
}
