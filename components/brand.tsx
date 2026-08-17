import { cn } from "@/lib/utils"

type LogoMarkProps = {
  className?: string
  iconClassName?: string
}

export function LogoMark({ className, iconClassName }: LogoMarkProps) {
  return (
    <span
      className={cn(
        "flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground",
        className
      )}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={cn("size-4 fill-current", iconClassName)}
      >
        <path d="M12 2.5l2.2 6.8h7.1l-5.7 4.2 2.2 6.8L12 16.2 6.2 20.3l2.2-6.8L2.7 9.3h7.1L12 2.5z" />
      </svg>
    </span>
  )
}
