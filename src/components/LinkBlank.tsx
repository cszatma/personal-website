import React, { FunctionComponent } from "react";

export interface LinkBlankProps {
  href: string;
  className?: string;
}

export const LinkBlank: FunctionComponent<LinkBlankProps> = ({ href, className, children }) => (
  <a href={href} className={className} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);
