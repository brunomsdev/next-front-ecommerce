import requestApi from "@/helpers/requestApi";
import { useSession } from "next-auth/react";
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
  const { status } = useSession();

  useEffect(() => {
    if(status === "unauthenticated" && withAuth){
      router.push("/login")
    }
  }, [status]);

  return <div className="min-h-screen bg-[#111418]">{children}</div>;
}
