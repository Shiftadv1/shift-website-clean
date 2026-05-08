import Image from "next/image"
import { cn } from "@/lib/utils"

interface ShiftLogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  showTagline?: boolean
}

export function ShiftLogo({
  className,
  size = "md",
  showTagline = false,
}: ShiftLogoProps) {

  const sizes = {
    sm: { width: 90, height: 28 },
    md: { width: 120, height: 38 },
    lg: { width: 170, height: 55 },
    xl: { width: 240, height: 75 },
  }

  const config = sizes[size]

  return (
    <div className={cn("flex flex-col", className)}>
      <Image
        src="/images/shift-logo.png"
        alt="SHIFT Logo"
        width={config.width}
        height={config.height}
        priority
      />

      {showTagline && (
        <span className="text-[10px] text-muted-foreground mt-1 tracking-wider">
          Shift to better
        </span>
      )}
    </div>
  )
}
