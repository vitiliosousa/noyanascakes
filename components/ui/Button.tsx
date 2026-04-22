import React from "react";
import Link from "next/link";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  className?: string;
}

export function Button({ variant = "primary", href, className, children, ...props }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-full font-sans text-sm font-semibold uppercase tracking-[0.05em] transition-all duration-300";
  
  const variants = {
    primary: "bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-sm hover:shadow-md hover:brightness-110",
    secondary: "bg-surface-container-high text-on-surface hover:bg-surface-variant hover:brightness-95",
    tertiary: "bg-transparent text-primary hover:opacity-75"
  };

  const classes = clsx(baseClasses, variants[variant], className, {
    "px-8 py-4": variant !== "tertiary", // Normal padding for non-tertiary
    "px-4 py-2": variant === "tertiary"  // Smaller padding for tertiary text buttons
  });

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
