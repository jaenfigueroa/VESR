import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <button className="vers-bg-sky-500/100">{props.children}</button>;
}

Button.displayName = "Button";
