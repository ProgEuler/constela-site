import { cn } from "@/lib/utils"

type GooglePlayButtonProps = {
  href?: string
  size?: "sm" | "default" | "lg"
  className?: string
}

const SIZE_CLASSES: Record<NonNullable<GooglePlayButtonProps["size"]>, string> =
  {
    sm: "h-9 px-3 text-xs",
    default: "h-11 px-4 text-sm",
    lg: "h-12 px-5 text-[15px]",
  }

export function GooglePlayButton({
  href = "#",
  size = "default",
  className,
}: GooglePlayButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get it on Google Play"
      className={cn(
        "group/play inline-flex shrink-0 items-center gap-3 rounded-xl bg-black px-4 text-white shadow-sm shadow-black/20 transition-all hover:bg-black/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:translate-y-px",
        SIZE_CLASSES[size],
        className
      )}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={cn(
          "shrink-0",
          size === "sm" ? "size-4" : size === "lg" ? "size-6" : "size-5"
        )}
      >
        <path
          fill="#34A853"
          d="M3.6 20.5c-.4-.3-.6-.7-.6-1.3V4.8c0-.6.2-1 .6-1.3l8.5 8.5-8.5 8.5z"
        />
        <path
          fill="#FBBC04"
          d="M16.8 16.7l-3.1-3.1 3.1-3.1 3.7 2.1c1.1.6 1.1 1.7 0 2.3l-3.7 1.8z"
        />
        <path
          fill="#EA4335"
          d="M16.8 7.3l-3.7 1.8L-3.6 4.8c.4-.3.7-.3 1 0l19.4 2.5z"
        />
        <path
          fill="#4285F4"
          d="M3.6 20.5l9.7-9.7 3.1 3.1-11.8 6.7c-.4.2-.7.2-1-.1z"
        />
      </svg>
      <span className="flex flex-col items-start leading-none">
        <span
          className={cn(
            "font-medium tracking-wide opacity-90",
            size === "lg" ? "text-[10px]" : "text-[9px]"
          )}
        >
          GET IT ON
        </span>
        <span
          className={cn(
            "font-semibold tracking-tight",
            size === "lg" ? "text-base" : "text-sm"
          )}
        >
          Google Play
        </span>
      </span>
    </a>
  )
}