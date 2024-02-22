export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({
  children,
  style,
  ...other
}: ButtonProps): JSX.Element {
  return (
    <button
      style={{
        fontSize: "20px",
        ...style,
      }}
      type="button"
      {...other}
    >
      {children}
    </button>
  );
}

Button.displayName = "Button";
