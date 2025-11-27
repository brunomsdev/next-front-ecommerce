import requestApi from "@/helpers/requestApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface PageWrapperRootProps {
  children: React.ReactNode;
  withAuth?: boolean;
}

export default function PageWrapperRoot({
  children,
  withAuth = false,
}: PageWrapperRootProps) {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (withAuth || (user && token)) {
      if (!token) {
        router.push("/login");
      }

      async function heartBeat() {
        try {
          const response = await requestApi({
            url: "/profile",
            method: "GET",
          });

          localStorage.setItem("user", JSON.stringify(response.data));
        } catch (error) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          console.error(error);
          router.push("/login");
        }
      }

      heartBeat();
    }
  }, []);

  return <div className="min-h-screen bg-[#111418]">{children}</div>;
}
