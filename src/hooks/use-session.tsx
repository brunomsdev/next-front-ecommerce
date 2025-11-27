import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useSession() {
  const router = useRouter();

  const [session, setSession] = useState<{ user: any; token: string } | null>(
    null
  );

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (user && token) {
      setSession({
        user: JSON.parse(user),
        token: token,
      });
    }
  }, []);

  function handleSignOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    router.push("/login");
  }

  return { session, handleSignOut };
}
