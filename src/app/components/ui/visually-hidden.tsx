import React from "react"
import { Slot } from "@radix-ui/react-slot"

interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

/**
 * VisuallyHidden component
 * Hides content visually but keeps it available to screen readers
 */
export const VisuallyHidden = React.forwardRef<
  HTMLDivElement,
  VisuallyHiddenProps
>(({ asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      ref={ref}
      style={{
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: "0",
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        borderWidth: "0",
      }}
      {...props}
    />
  )
})

VisuallyHidden.displayName = "VisuallyHidden"
