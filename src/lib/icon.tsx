import * as React from "react";
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  path: string;
  title?: string;
  size?: number | string;
  className?: string;
  fill?: string;
};

export function Icon({
  path,
  title,
  size = 1,
  className,
  fill = "currentColor",
  ...rest
}: IconProps) {
  return (
    <svg
      transform={`scale(${size})`}
      viewBox="0 0 24 24"
      aria-label={title}
      className={className}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d={path} fill={fill} />
    </svg>
  );
}
