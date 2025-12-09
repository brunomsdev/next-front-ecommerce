interface PageWrapperRootProps {
  children: React.ReactNode;
}

export default function PageWrapperRoot({
  children
}: PageWrapperRootProps) {

  return <div className="min-h-screen bg-[#111418]">{children}</div>;
}
