"use client";

import { type ReactNode } from "react";

export interface PreviewProps {
  children: ReactNode;
  className?: string;
}

export function Preview({ children, className = "" }: PreviewProps) {
  return <div className={`not-prose my-6 ${className}`}>{children}</div>;
}
