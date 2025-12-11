import { cn } from "@/lib/utils"
import { useState } from "react"
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Image from "next/image";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "../ui/button";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function AdminSidebar(){
  const [open, setOpen] = useState(false)
  const { user } = useAuth()

  function handleSwitchSidebar(){
    setOpen(!open)
  }
  
  return (
    <aside
      className={cn(
        'bg-[#111418] border-r border-[#343942]',
        open ? 'w-64' : 'w-16'
      )}
    >
      <div className="border-b p-3 border-[#343942]">
        <div
          className={cn(
            'flex items-center gap-2 text-white',
            open ? 'justify-between' : 'flex-col'
          )}
        >
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <>
                {user?.image ? (
                  <Image
                    src={user.image}
                    alt="imagem do usuário"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <button
                    className="w-10 h-10 rounded-full bg-gradient-to-r
                                    from-[#5593f7] to-[#1d47d7] flex items-center justify-center
                                    text-white font-semibold"
                  >
                    {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                  </button>
                )}

                {open && (
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-white">
                      {user?.name}
                    </p>
                    <p className="text-xs text-[#848E9C]">{user?.email}</p>
                  </div>
                )}
              </>
            </DropdownMenuTrigger>
          </DropdownMenu>
          <Button 
          variant="ghost" 
          size="icon"
          className={open ? "h-8 w-8" : "h-7 w-7"}
          onClick={handleSwitchSidebar}
          >
            {open ? <LuChevronLeft /> : <LuChevronRight />}
          </Button>
        </div>
      </div>
    </aside>
  );
}