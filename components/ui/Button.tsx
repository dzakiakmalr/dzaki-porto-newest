import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

interface BaseProps {
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-bold transition-[transform,box-shadow,background-color,color] duration-200 ease-out focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:outline-none";

const variants = {
  primary:
    "bg-brand-500 text-white shadow-clay hover:-translate-y-[1px] hover:shadow-clay-hover active:shadow-pressed active:translate-y-0",
  secondary:
    "text-text-muted font-semibold hover:bg-clay-100 hover:text-text shadow-clay hover:-translate-y-[1px] hover:shadow-clay-hover active:shadow-pressed active:translate-y-0",
};

const sizes = {
  md: "px-4 py-2 text-sm",
  lg: "px-7 py-3 text-sm",
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(props, ref) {
    const { variant = "primary", size = "md", className, children, ...rest } =
      props;

    const classes = `${base} ${variants[variant]} ${sizes[size]} ${className ?? ""}`;

    if ("href" in props && props.href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);