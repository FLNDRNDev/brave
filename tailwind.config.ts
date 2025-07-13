import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "oklch(var(--background))", // #e1e8ed (light) / #14171a (dark)
        foreground: "oklch(var(--foreground))", // #14171a (light) / #e1e8ed (dark)
        
        card: {
          DEFAULT: "oklch(var(--card))", // #ffffff (light) / #484949 (dark)
          foreground: "oklch(var(--card-foreground))", // #14171a (light) / #e1e8ed (dark)
        },
        
        popover: {
          DEFAULT: "oklch(var(--popover))", // #ffffff (light) / #484949 (dark)
          foreground: "oklch(var(--popover-foreground))", // #14171a (light) / #e1e8ed (dark)
        },
        
        primary: {
          DEFAULT: "oklch(var(--primary))", // #1da1f2 (light) / #1da1f2 (dark)
          foreground: "oklch(var(--primary-foreground))", // #ffffff (light) / #212222 (dark)
        },
        
        secondary: {
          DEFAULT: "oklch(var(--secondary))", // #f9fafa (light) / #6f7070 (dark)
          foreground: "oklch(var(--secondary-foreground))", // #14171a (light) / #e1e8ed (dark)
        },
        
        muted: {
          DEFAULT: "oklch(var(--muted))", // #f9fafa (light) / #6f7070 (dark)
          foreground: "oklch(var(--muted-foreground))", // #979898 (light) / #d1d2d2 (dark)
        },
        
        accent: {
          DEFAULT: "oklch(var(--accent))", // #f9fafa (light) / #6f7070 (dark)
          foreground: "oklch(var(--accent-foreground))", // #14171a (light) / #e1e8ed (dark)
        },
        
        destructive: {
          DEFAULT: "oklch(var(--destructive))", // #f16963 (light) / #f16963 (dark)
          foreground: "oklch(var(--destructive-foreground))", // #ffffff (light) / #ffffff (dark)
        },
        
        border: "oklch(var(--border))", // #d1d2d2 (light) / #6f7070 (dark)
        input: "oklch(var(--input))", // #d1d2d2 (light) / #6f7070 (dark)
        ring: "oklch(var(--ring))", // #1da1f2 (light) / #1da1f2 (dark)
        
        // Brand colors
        brave: {
          DEFAULT: "oklch(var(--brave))", // #1da1f2 (light) / #1da1f2 (dark)
          light: "oklch(var(--brave-light))", // #4db5f5 (light) / #4db5f5 (dark)
          dark: "oklch(var(--brave-dark))", // #0d8bd9 (light) / #0d8bd9 (dark)
        },
        
        // CTA colors
        cta: {
          DEFAULT: "oklch(var(--cta))", // #ed3384 (light) / #ed3384 (dark)
          light: "oklch(var(--cta-light))", // #ffd2df (light) / #ffd2df (dark)
          dark: "oklch(var(--cta-dark))", // #712341 (light) / #712341 (dark)
        },
        
        // Info colors
        info: {
          DEFAULT: "oklch(var(--info))", // #33defb (light) / #33defb (dark)
          light: "oklch(var(--info-light))", // #daf7fe (light) / #daf7fe (dark)
          dark: "oklch(var(--info-dark))", // #296975 (light) / #296975 (dark)
        },
        
        // Warning colors
        warning: {
          DEFAULT: "oklch(var(--warning))", // #ebde53 (light) / #ebde53 (dark)
          light: "oklch(var(--warning-light))", // #fef6d5 (light) / #fef6d5 (dark)
          dark: "oklch(var(--warning-dark))", // #6f682e (light) / #6f682e (dark)
        },
        
        // Success colors
        success: {
          DEFAULT: "oklch(var(--success))", // #44eb6c (light) / #44eb6c (dark)
          light: "oklch(var(--success-light))", // #dafcda (light) / #dafcda (dark)
          dark: "oklch(var(--success-dark))", // #2c6f38 (light) / #2c6f38 (dark)
        },
        
        // Danger colors
        danger: {
          DEFAULT: "oklch(var(--danger))", // #f16963 (light) / #f16963 (dark)
          light: "oklch(var(--danger-light))", // #ffdad6 (light) / #ffdad6 (dark)
          dark: "oklch(var(--danger-dark))", // #723633 (light) / #723633 (dark)
        },

        // Gray scale
        gray: {
          lightest: "oklch(var(--gray-lightest))", // #f9fafa
          lighter: "oklch(var(--gray-lighter))", // #e5e6e6
          light: "oklch(var(--gray-light))", // #d1d2d2
          DEFAULT: "oklch(var(--gray))", // #bebfbf
          dark: "oklch(var(--gray-dark))", // #979898
          darker: "oklch(var(--gray-darker))", // #6f7070
          darkest: "oklch(var(--gray-darkest))", // #484949
        },
        white: "oklch(var(--white))", // #ffffff
        dark: "oklch(var(--black))", // #212222
      },

      // ring
      ring: {
        DEFAULT: "oklch(var(--ring))", // #1da1f2 (light) / #1da1f2 (dark)
      },

      // border
      border: {
        DEFAULT: "oklch(var(--border))", // #1da1f2 (light) / #1da1f2 (dark)
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config; 