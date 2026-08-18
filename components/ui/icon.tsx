import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"

type IconProps = {
  icon: IconSvgElement
  className?: string
  size?: number | string
  strokeWidth?: number
}

/**
 * Thin wrapper around HugeiconsIcon so usage stays terse:
 *
 *   <Icon icon={SparklesIcon} className="size-5" />
 */
export function Icon({ icon, className, size, strokeWidth }: IconProps) {
  return (
    <HugeiconsIcon
      icon={icon}
      size={size}
      strokeWidth={strokeWidth}
      className={className}
    />
  )
}
