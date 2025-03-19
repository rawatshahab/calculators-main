
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button = ({
  variant = "primary",
  size = "md",
  children,
  className,
  fullWidth = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2",
        {
          // Variants
          "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm focus:ring-primary/20":
            variant === "primary",
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-sm focus:ring-secondary/40":
            variant === "secondary",
          "bg-transparent border border-primary text-primary hover:bg-primary/5 focus:ring-primary/20":
            variant === "outline",
          "bg-transparent text-foreground hover:bg-muted focus:ring-muted":
            variant === "ghost",
          
          // Sizes
          "px-3 py-1.5 text-sm": size === "sm",
          "px-4 py-2": size === "md",
          "px-6 py-3": size === "lg",
          
          // Width
          "w-full": fullWidth,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
