import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        vault: {
          "card-hover": "hsl(var(--vault-card-hover))",
          "border-glow": "var(--vault-border-glow)",
          "backdrop": "var(--vault-backdrop)",
          "glass": "var(--vault-glass)",
          "glass-3d": "var(--vault-glass-3d)",
          "particle": "var(--vault-particle)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(-50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "vault-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px hsl(263 85% 65% / 0.3)",
          },
          "50%": {
            boxShadow: "0 0 30px hsl(263 85% 65% / 0.5)",
          },
        },
        "vault-float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-4px)",
          },
        },
        "vault-shimmer": {
          "0%": {
            backgroundPosition: "-200% 0",
          },
          "100%": {
            backgroundPosition: "200% 0",
          },
        },
        "vault-pulse-glow": {
          "0%, 100%": {
            boxShadow: "var(--vault-glow-primary)",
          },
          "50%": {
            boxShadow: "var(--vault-glow-hover)",
          },
        },
        "vault-particle-float": {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px) rotate(0deg)",
          },
          "33%": {
            transform: "translateY(-20px) translateX(10px) rotate(120deg)",
          },
          "66%": {
            transform: "translateY(10px) translateX(-15px) rotate(240deg)",
          },
        },
        "vault-mesh": {
          "0%, 100%": {
            backgroundPosition: "0% 0%, 100% 100%, 50% 0%",
            transform: "scale(1) rotate(0deg)",
            opacity: "0.4"
          },
          "33%": {
            backgroundPosition: "50% 50%, 50% 50%, 100% 50%",
            transform: "scale(1.1) rotate(120deg)",
            opacity: "0.6"
          },
          "66%": {
            backgroundPosition: "100% 100%, 0% 0%, 0% 100%",
            transform: "scale(0.9) rotate(240deg)",
            opacity: "0.3"
          },
        },
        "vault-3d-float": {
          "0%, 100%": { 
            transform: "translateY(0px) rotateX(0deg) rotateY(0deg) scale(1)",
            boxShadow: "var(--vault-shadow-3d)"
          },
          "33%": { 
            transform: "translateY(-10px) rotateX(5deg) rotateY(5deg) scale(1.02)",
            boxShadow: "var(--vault-shadow-3d-hover)"
          },
          "66%": { 
            transform: "translateY(-5px) rotateX(-3deg) rotateY(-3deg) scale(1.01)",
            boxShadow: "var(--vault-shadow-3d)"
          },
        },
        "vault-card-3d": {
          "0%": { 
            transform: "perspective(1000px) rotateY(-15deg) rotateX(5deg) scale(0.95)",
            opacity: "0"
          },
          "100%": { 
            transform: "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)",
            opacity: "1"
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-in-right": "slide-in-right 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "scale-in": "scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        "vault-glow": "vault-glow 2s ease-in-out infinite",
        "vault-float": "vault-float 3s ease-in-out infinite",
        "vault-shimmer": "vault-shimmer 2s ease-in-out infinite",
        "vault-pulse-glow": "vault-pulse-glow 3s ease-in-out infinite",
        "vault-particle-float": "vault-particle-float 6s ease-in-out infinite",
        "vault-mesh": "vault-mesh 20s ease-in-out infinite",
        "vault-3d-float": "vault-3d-float 6s ease-in-out infinite",
        "vault-card-3d": "vault-card-3d 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
      backgroundImage: {
        "vault-gradient": "var(--vault-gradient)",
        "vault-gradient-subtle": "var(--vault-gradient-subtle)",
        "vault-mesh": "var(--vault-mesh)",
      },
      boxShadow: {
        "vault": "var(--vault-shadow)",
        "vault-hover": "var(--vault-shadow-hover)",
        "vault-3d": "var(--vault-shadow-3d)",
        "vault-3d-hover": "var(--vault-shadow-3d-hover)",
        "vault-glow": "var(--vault-glow-primary)",
        "vault-glow-hover": "var(--vault-glow-hover)",
      },
      backdropBlur: {
        vault: "20px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
