import { MailIcon } from "@heroicons/react/solid";
import classNames from "classnames";

type InputType =
  | "text"
  | "number"
  | "date"
  | "email"
  | "password"
  | "checkbox"
  | "search"
  | "color";
type InputSize = "checkbox" | "normal";
type IconPosition = "left" | "right";
const inputSize = {
  checkbox: [
    "h-4",
    "w-4",
    "rounded",
    "focus:ring-primary-100",
    "text-primary-100",
    "bg-primary-100",
  ],
  normal: [
    "block",
    "px-2",
    "w-full",
    "h-12",
    "border",
    "sm:text-sm",
    "cursor-default",
    "focus:outline-none",
    "focus:ring-1",
    "focus:ring-primary-100",
    "focus:border-primary-100",
    "blur:border-primary-100",
    "rounded-md",
    "border-2",
  ],
};

const iconPosit = {
  left: [
    "absolute",
    "inset-y-0",
    "left-0",
    "pl-3",
    "flex",
    "items-center",
    "pointer-events-none",
  ],
  right: [
    "absolute",
    "inset-y-0",
    "right-0",
    "pr-3",
    "flex",
    "items-center",
    "pointer-events-none",
  ],
};

interface InputProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "size"
  > {
  type: InputType;
  size: InputSize;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
}

export function Input({
  type,
  size,
  icon,
  iconPosition,
  ...props
}: InputProps) {
  return (
    <div className="mt-1 relative rounded-md shadow-sm">
      {icon && (
        <div className={classNames(iconPosit[iconPosition!])}>
          <span className="text-gray-500">{icon}</span>{" "}
        </div>
      )}
      <input
        type={type}
        className={classNames(
          ` border-gray-300`,
          inputSize[size],
          iconPosition === "left"
            ? "pl-10"
            : iconPosition === "right" && "pr-10"
        )}
        {...props}
      />
    </div>
  );
}

Input.defaultProps = {
  type: "text",
  size: "normal",
};
