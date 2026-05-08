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
  sm: { width: 120, height: 38 },
  md: { width: 170, height: 55 },
  lg: { width: 240, height: 75 },
  xl: { width: 320, height: 100 },
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


    </div>
  )
}
