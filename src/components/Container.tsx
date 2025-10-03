export default function Container({ children }: { children: React.ReactNode } , className?: string) {
    return (
        <div className={`max-w-[1080px] w-[90%] mx-auto ${className}`}>
            {children}
        </div>
    )
  }
  