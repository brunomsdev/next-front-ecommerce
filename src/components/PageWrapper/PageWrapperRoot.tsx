import AdminSidebar from "../AdminSidebar";

interface PageWrapperRootProps {
  children: React.ReactNode
  sidebar?: boolean
}

export default function PageWrapperRoot({
  children, sidebar = false
}: PageWrapperRootProps) {

  return (
  <div className="min-h-screen bg-[#111418] flex">
    {sidebar && <AdminSidebar />}

    <div className="flex-1">
      {children}
    </div>
  </div>
  )
}
