import { cn } from "@/lib/utils"

interface ShiftLogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  showTagline?: boolean
}

export function ShiftLogo({ className, size = "md", showTagline = false }: ShiftLogoProps) {
  const sizeConfig = {
    sm: { text: "text-xl", arrow: 14, tagline: "text-[8px]" },
    md: { text: "text-2xl", arrow: 18, tagline: "text-[10px]" },
    lg: { text: "text-4xl", arrow: 28, tagline: "text-xs" },
    xl: { text: "text-6xl", arrow: 44, tagline: "text-sm" }
  }

  const config = sizeConfig[size]

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-center">
        {/* SHIFT text with integrated arrow in S */}
        <span 
          className={cn(
            "font-bold tracking-wider flex items-center",
            config.text
          )}
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
        >
          {/* S with teal arrow accent */}
          <span className="relative inline-flex items-center">
            <span className="text-foreground">S</span>
            {/* Teal arrow integrated into the S */}
            <svg 
              width={config.arrow} 
              height={config.arrow} 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="absolute"
              style={{ 
                left: size === 'sm' ? '2px' : size === 'md' ? '3px' : size === 'lg' ? '5px' : '8px',
                top: size === 'sm' ? '2px' : size === 'md' ? '2px' : size === 'lg' ? '4px' : '6px'
              }}
            >
              {/* Arrow pointing up-right */}
              <path 
                d="M7 17L17 7M17 7H9M17 7V15" 
                stroke="#00B4D8" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-foreground">HIFT</span>
        </span>
      </div>
      
      {showTagline && (
        <span 
          className={cn(
            "text-muted-foreground tracking-widest mt-1",
            config.tagline
          )}
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Shift to better
        </span>
      )}
    </div>
  )
}
