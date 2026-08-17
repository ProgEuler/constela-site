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
        "group/play inline-flex shrink-0 items-center gap-3 whitespace-nowrap rounded-xl bg-black px-4 text-white shadow-sm shadow-black/20 transition-all hover:bg-black/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:translate-y-px",
        SIZE_CLASSES[size],
        className
      )}
    >
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 466 511.98"
  className="h-5 w-5 shrink-0"
  shape-rendering="geometricPrecision"
  aria-hidden="true"
>
 <g>
  <path fill="#EA4335" d="M199.9 237.8l-198.5 232.37c7.22,24.57 30.16,41.81 55.8,41.81 11.16,0 20.93,-2.79 29.3,-8.37l0 0 244.16 -139.46 -130.76 -126.35z"/>
  <path fill="#FBBC04" d="M433.91 205.1l0 0 -104.65 -60 -111.61 110.22 113.01 108.83 104.64 -58.6c18.14,-9.77 30.7,-29.3 30.7,-50.23 -1.4,-20.93 -13.95,-40.46 -32.09,-50.22z"/>
  <path fill="#34A853" d="M199.42 273.45l129.85 -128.35 -241.37 -136.73c-8.37,-5.58 -19.54,-8.37 -30.7,-8.37 -26.5,0 -50.22,18.14 -55.8,41.86 0,0 0,0 0,0l198.02 231.59z"/>
  <path fill="#4285F4" d="M1.39 41.86c-1.39,4.18 -1.39,9.77 -1.39,15.34l0 397.64c0,5.57 0,9.76 1.4,15.34l216.27 -214.86 -216.28 -213.46z"/>
 </g>
</svg>

      <span className="flex flex-col items-start leading-none">
        <span
          className={cn(
            "whitespace-nowrap font-medium tracking-wide opacity-90",
            size === "lg" ? "text-[10px]" : "text-[9px]"
          )}
        >
          GET IT ON
        </span>
        <span
          className={cn(
            "whitespace-nowrap font-semibold tracking-tight",
            size === "lg" ? "text-base" : "text-sm"
          )}
        >
          Google Play
        </span>
      </span>
    </a>
  )
}
