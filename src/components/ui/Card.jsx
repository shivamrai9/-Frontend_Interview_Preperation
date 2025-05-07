import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

const baseStyle = "rounded-2xl p-4 shadow-md transition-all";
const variants = {
  default: "bg-white text-black",
  info: "bg-blue-100 text-blue-900",
  warning: "bg-yellow-100 text-yellow-900",
  success: "bg-green-100 text-green-900",
  dark: "bg-gray-800 text-white",
  skeleton: "bg-gray-200 animate-pulse",
};

const Card = ({
  children,
  className,
  variant = "default",
  isClickable = false,
  loading = false,
  ...props
}) => {
  const clickableStyles = isClickable
    ? "hover:scale-[1.01] active:scale-95 cursor-pointer"
    : "";

  return (
    <motion.div
      whileHover={isClickable ? { scale: 1.01 } : false}
      whileTap={isClickable ? { scale: 0.95 } : false}
      className={clsx(
        baseStyle,
        loading ? variants["skeleton"] : variants[variant],
        clickableStyles,
        className
      )}
      {...props}
    >
      {loading ? (
        <div className="space-y-3">
          <div className="w-1/3 h-4 bg-gray-300 rounded"></div>
          <div className="w-full h-3 bg-gray-300 rounded"></div>
          <div className="w-2/3 h-3 bg-gray-300 rounded"></div>
        </div>
      ) : (
        children
      )}
    </motion.div>
  );
};

const CardHeader = ({ children, icon: Icon, className }) => (
  <div
    className={clsx(
      "mb-3 flex items-center gap-2 font-semibold text-lg",
      className
    )}
  >
    {Icon && <Icon className="w-5 h-5" />}
    {children}
  </div>
);

const CardBody = ({ children, className }) => (
  <div className={clsx("text-sm", className)}>{children}</div>
);

const CardFooter = ({ children, className }) => (
  <div
    className={clsx("mt-4 pt-2 border-t border-white/10 text-xs", className)}
  >
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
