import classNames from "classnames";
import React from "react";

type ButtonSize = "small" | "regular" | "large";
type TextSize = "lowercase" | "uppercase";

export type ButtonStyle =
  | "primary"
  | "secondary"
  | "danger"
  | "success"
  | "warning"
  | "info"
  | "dash";
type ButtonType = "submit" | "button";
type IconSize = "small" | "regular" | "large";

const buttonSize = {
  small: [
    "font-bold",
    "text-xs",
    "px-4",
    "py-2",
    "rounded-md",
    "shadow",
    "mr-1",
    "mb-1",
  ],
  regular: [
    "font-bold",
    "text-sm",
    "px-6",
    "py-3",
    "rounded-lg",
    "shadow",
    "mr-1",
    "mb-1",
  ],
  large: [
    "font-bold",
    "text-base",
    "px-8",
    "py-3",
    "rounded-xl",
    "shadow",
    "mr-1",
    "mb-1",
  ],
};

const buttonStyle = {
  primary: [
    "bg-primary-100",
    "text-white",
    "hover:bg-primary-100",
    "active:bg-primary-100",
    "disabled:opacity-50",
  ],
  secondary: [
    "bg-gray-500",
    "text-white",
    "hover:bg-gray-600",
    "active:bg-gray-700",
    "disabled:opacity-50",
  ],
  danger: [
    "bg-red-500",
    "text-white",
    "hover:bg-red-600",
    "active:bg-red-700",
    "disabled:opacity-50",
  ],
  success: [
    "bg-green-500",
    "text-white",
    "hover:bg-green-600",
    "active:bg-green-700",
    "disabled:opacity-50",
  ],
  warning: [
    "bg-orange-500",
    "text-white",
    "hover:bg-orange-600",
    "active:bg-orange-700",
    "disabled:opacity-50",
  ],
  info: [
    "bg-blue-500",
    "text-white",
    "hover:bg-blue-600",
    "active:bg-blue-700",
    "disabled:opacity-50",
  ],
  dash: [
    "font-semibold",
    "border border-gray-400",
    "bg-bg-0",
    "text-gray-800",
    "hover:bg-gray-100",
    "active:bg-primary-100",
    "active:text-white",
    "disabled:opacity-50",
    "border-primary-100",
    "border-dashed",
  ],
};

const iconSize = {
  small: "text-xs",
  regular: "text-sm",
  large: "text-base",
};

export interface BouttonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  type: ButtonType;
  size: ButtonSize;
  color?: ButtonStyle;
  leftIcon?: React.ReactNode;
  sizeIcon?: IconSize;
  block?: boolean;
  textSize?: TextSize;
}

export function Button({
  color,
  size,
  type,
  leftIcon,
  sizeIcon,
  block,
  children,
  textSize,
  ...props
}: React.PropsWithChildren<BouttonProps>) {
  return (
    <button
      className={classNames(
        `flex item-center ${block && "w-full"} justify-center`,
        buttonStyle[color!],
        buttonSize[size]
      )}
      type={type}
      {...props}
    >
      {leftIcon && (
        <span className={classNames(iconSize[sizeIcon!], ``)}>{leftIcon}</span>
      )}
      {children && (
        <span className={classNames(`ml-2 font-semibold `, textSize)}>
          {" "}
          {children}
        </span>
      )}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  size: "regular",
  color: "primary",
  block: true,
};
