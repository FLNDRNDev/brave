"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <>
      <Sonner
        theme={theme as ToasterProps["theme"]}
        className="toaster group"
        // ORIGINAL: style={{ "--normal-bg": "var(--popover)", "--normal-text": "var(--popover-foreground)", "--normal-border": "var(--border)" } as React.CSSProperties }
        // ADDED: Custom color variables for info, warning, success, and danger toasts
        // REASON: Use your custom color scheme instead of default Sonner colors
        style={
          {
            "--normal-bg": "oklch(var(--popover))",
            "--normal-text": "oklch(var(--popover-foreground))",
            "--normal-border": "oklch(var(--border))",
            "--success-bg": "oklch(var(--success-light))",
            "--success-text": "oklch(var(--success-dark))",
            "--success-border": "oklch(var(--success))",
            "--error-bg": "oklch(var(--danger-light))",
            "--error-text": "oklch(var(--danger-dark))",
            "--error-border": "oklch(var(--danger))",
            "--warning-bg": "oklch(var(--warning-light))",
            "--warning-text": "oklch(var(--warning-dark))",
            "--warning-border": "oklch(var(--warning))",
            "--info-bg": "oklch(var(--info-light))",
            "--info-text": "oklch(var(--info-dark))",
            "--info-border": "oklch(var(--info))",
          } as React.CSSProperties
        }
        // ADDED: Auto-close after 2 seconds and enable close button
        // REASON: Provide better UX with automatic dismissal and manual close option
        duration={2000}
        closeButton={true}
        {...props}
      />
      {/* ADDED: Custom CSS for close button styling */}
      {/* REASON: Position close button in top-right and make it more prominent */}
      <style jsx global>{`
        .toaster [data-sonner-toast] {
          position: relative;
        }
        
        .toaster [data-sonner-toast] [data-close-button] {
          position: absolute !important;
          top: 8px !important;
          right: 8px !important;
          background: oklch(var(--danger)) !important;
          color: white !important;
          border: none !important;
          border-radius: 50% !important;
          width: 20px !important;
          height: 20px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          cursor: pointer !important;
          font-size: 12px !important;
          font-weight: bold !important;
          transition: all 0.2s ease !important;
          opacity: 0.8 !important;
        }
        
        .toaster [data-sonner-toast] [data-close-button]:hover {
          background: oklch(var(--danger-dark)) !important;
          opacity: 1 !important;
          transform: scale(1.1) !important;
        }
        
        .toaster [data-sonner-toast] [data-close-button]:active {
          transform: scale(0.95) !important;
        }
      `}</style>
    </>
  )
}

export { Toaster }
