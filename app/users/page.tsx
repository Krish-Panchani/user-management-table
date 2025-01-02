"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectToFirstPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/users/1"); // Redirect to /users/1
  }, [router]);

  return null; // Render nothing during the redirect
}
