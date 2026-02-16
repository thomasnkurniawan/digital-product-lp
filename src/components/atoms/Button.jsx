import { cn } from "../../utils/cn";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  return (
    <button
      className={cn(
        "btn",
        className,
        variant === "primary" && "btn-primary",
        variant === "secondary" && "btn-secondary",
        variant === "dark" && "btn-dark",
        variant === "outline" && "btn-primary-outline",
        size === "sm" && "btn-sm",
      )}
      {...props}
    >
      {children}
    </button>
  );
}
