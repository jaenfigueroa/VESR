import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary'
}

const colorClassNames = {
  primary: 'vers-bg-primary',
  secondary: 'vers-bg-secondary'
}

export function Button({children, variant = 'primary'}: ButtonProps) {
  return <button className={colorClassNames[variant]}>{children}</button>;
}

Button.displayName = "Button";
