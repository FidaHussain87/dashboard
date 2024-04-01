import React from "react";
import classNames from "classnames";
const BoxIcon = ({
  Icon,
  backgroundColor,
  className
}: {
  Icon: React.ReactNode;
  backgroundColor?: "WHITE" | "GRAY";
  className?: string;
}) => {
  const bgColor = backgroundColor
    ? backgroundColor === "WHITE"
      ? "bg-white"
      : "bg-[#222222]"
    : "bg-transparent";
  return (
    <div
      className={classNames(
        "CENTER w-[25px] h-[25px] rounded-sm",
        bgColor,
        className
      )}
    >
      {Icon}
    </div>
  );
};

export default BoxIcon;
