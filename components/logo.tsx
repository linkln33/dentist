import Link from "next/link"
import { Circle } from "lucide-react"

interface LogoProps {
  className?: string
  showText?: boolean
}

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
        <Circle className="h-6 w-6 text-white" />
      </div>
      {showText && (
        <div>
          <h1 className="text-xl font-bold text-gray-900">SmileCare Dental</h1>
          <p className="text-sm text-gray-600">Dental Excellence</p>
        </div>
      )}
    </Link>
  )
}
