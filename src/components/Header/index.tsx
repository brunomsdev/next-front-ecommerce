import { IoSearch } from "react-icons/io5";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import { FiLogOut, FiShoppingCart, FiUser } from "react-icons/fi";
import Logo from "../../../public/logo.png";
import Image from "next/image";
import { FaRegBell } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Header() {
  const router = useRouter();

  const { data: session } = useSession();

  async function handleSignOut(){
    await signOut({
      redirect: true,
      callbackUrl: "/login"
    })
  }

  return (
    <header className="sticky top-0 z-50 bg-[#111418/95] backdrop-blur-sm w-full border-b">
      <div className="w-full flex h-16 items-center justify-between">
        <div className="w-[33%]">
          <Image
            src={Logo.src}
            alt="Logo"
            width={200}
            height={30}
            className="ml-4 max-h-12 h-auto object-cover"
          />
        </div>
        <div className="hidden md:flex flex-1 px-8 w-[33%] justify-center">
          <CustomInput
            type="text"
            placeholder="Buscar Produtos"
            icon={<IoSearch />}
          />
        </div>
        <div className="flex items-center space-x-4 w-[33%] justify-end pr-4">
          {session ? (
            <>
              <CustomButton
                variant="ghost"
                width="w-10"
                className="h-10 hover:bg-[#5593f7] hover:text-[#111418]"
              >
                <FiShoppingCart />
              </CustomButton>

              <CustomButton
                variant="ghost"
                width="w-10"
                className="h-10 hover:bg-[#5593f7] hover:text-[#111418]"
              >
                <FaRegBell />
              </CustomButton>

              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  {session?.user?.image ? (
                    <Image
                      src={session?.user?.image}
                      alt="User Image"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <button className="w-10 h-10 rounded-full bg-gradient-to-r from-[#5593f7] to-[#1d47d7] flex items-center justify-center text-white font-semibold">
                      {session?.user?.name?.charAt(0).toUpperCase() || "U"}
                    </button>
                  )}
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  className="min-w-[224px] rounded-lg shadow-xl py-2"
                  sideOffset={8}
                  align="end"
                >
                  <div className="px-4 py-3 border-b border-[#2c313a]">
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-10 h-10 rounded-full bg-gradient-to-r
                        from-[#5593f7] to-[#1d47d7] flex items-center justify-center
                        text-white font-semibold"
                      >
                        {session?.user?.name?.charAt(0)?.toUpperCase() || "U"}
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium text-sm">
                          {session?.user?.name}
                        </p>
                        <p className="text-gray-400 text-xs">
                          {session?.user?.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  <DropdownMenuGroup className="py-1">
                    <DropdownMenuItem asChild>
                      <Link
                        href={"/profile"}
                        className="flex items-center px-4 py-2 text-sm text-gray-300
                        hover:bg-[#2c313a] hover:text-white transition-colors cursor-pointer"
                      >
                        <FiUser className="mr-3 w-4 h-4" />
                        Meu Perfil
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    onSelect={handleSignOut}
                    className="flex items-center px-5 py-2 text-sm text-red-400
                    hover:bg-[#2c313a] hover:text-red-300 transition-colors cursor-pointer"
                  >
                    <FiLogOut className="mr-3 w-4 h-4" />
                    Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <CustomButton
              className="h-[35px]"
              width="w-[120px]"
              onClick={() => router.push("/login")}
            >
              ENTRAR
            </CustomButton>
          )}
        </div>
      </div>
    </header>
  );
}
