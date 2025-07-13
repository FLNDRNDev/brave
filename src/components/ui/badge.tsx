import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-[#1da1f2] text-primary-foreground bg-[#1da1f2]/80 hover:bg-[#1da1f2]/20 transition-colors duration-300",
        secondary:
          "border-[#ed3384] text-primary-foreground  bg-[#ed3384]/80 hover:bg-[#ed3384]/20 transition-colors duration-300",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border-gray-500 text-gray-500 bg-transparent hover:bg-[#1da1f2]/10 hover:text-[#1da1f2] hover:border-[#1da1f2] transition-colors duration-300",
        // Only for the LIVE badge category
        live:
          "border-red-500 bg-red-500 hover:bg-red-500/10 transition-colors duration-300 text-white font-bold [&>svg]:size-4 mr-1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
