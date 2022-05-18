import classNames from "classnames";

type BadgeStyle = "primary" | "secondary" | "success" | "warning" | "danger";
type BadgeSize = "normal";

const badgeSize = {
  normal: [
    "items-center",
    "rounded",
    "px-2",
    "py-0.5",
    " text-xs",
    "font-medium",
    "inline-flex",
  ],
};

const badgeStyle = {
  primary: ["bg-blue-100", "text-blue-800"],
  secondary: ["bg-gray-100", "text-gray-800"],
  success: ["bg-green-100", "text-green-800"],
  warning: ["bg-yellow-100", "text-yellow-800"],
  danger: ["bg-red-100", "text-red-800"],
};
interface BadgetProps {
  size: BadgeSize;
  color: BadgeStyle;
}
export function Badge({
  size,
  color,
  children,
}: React.PropsWithChildren<BadgetProps>) {
  return (
    <span className={classNames(badgeSize[size!], badgeStyle[color])}>
      {children}
    </span>
  );
}

Badge.defaultProps = {
  size: "normal",
  color: "primary",
};
