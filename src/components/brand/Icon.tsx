import React from "react";
import { iconPaths, type IconName } from "./icons";

export interface IconProps {
  /** Icon name without the mbw- prefix, e.g. "moon" or "running-on-empty". */
  name: IconName;
  /** Width and height in px. The icons are drawn on a 24px grid. */
  size?: number;
  /** Stroke color. Defaults to currentColor, so the icon follows the text color. Brand default is Rooted Evergreen. */
  color?: string;
  /** Accessible label. Leave empty for decorative icons. */
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Icon({ name, size = 24, color = "currentColor", title, className, style }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: iconPaths[name] }}
    />
  );
}
