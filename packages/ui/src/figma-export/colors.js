const colors = {
  accent: {
    DEFAULT: 'hsl(var(--accent))',
    foreground: 'hsl(var(--accent-foreground))',
  },
  background: 'hsl(var(--background))',
  border: 'hsl(var(--border))',
  card: {
    DEFAULT: 'hsl(var(--card))',
    foreground: 'hsl(var(--card-foreground))',
  },
  destructive: {
    DEFAULT: 'hsl(var(--destructive))',
    foreground: 'hsl(var(--destructive-foreground))',
  },
  foreground: {
    DEFAULT: 'hsl(var(--foreground))',
    accent: 'hsl(var(--foreground-accent))',
  },
  info: 'hsl(var(--info))',
  input: 'hsl(var(--input))',
  link: 'hsl(var(--link))',
  muted: {
    DEFAULT: 'hsl(var(--muted))',
    foreground: 'hsl(var(--muted-foreground))',
  },
  overlay: 'hsl(var(--overlay))',
  popover: {
    DEFAULT: 'hsl(var(--popover))',
    foreground: 'hsl(var(--popover-foreground))',
  },
  primary: {
    DEFAULT: 'hsl(var(--primary))',
    foreground: 'hsl(var(--primary-foreground))',
  },
  ring: 'hsl(var(--ring))',
  secondary: {
    DEFAULT: 'hsl(var(--secondary))',
    foreground: 'hsl(var(--secondary-foreground))',
  },
  success: 'hsl(var(--success))',
  states: {
    accent: {
      selected: 'hsl(var(--states-accent-selected))',
    },
    border: {
      hover: 'hsl(var(--states-border-hover))',
    },
    destructive: {
      hover: 'hsl(var(--states-destructive-hover))',
    },
    foreground: {
      hover: 'hsl(var(--states-foreground-hover))',
    },
    link: {
      hover: 'hsl(var(--states-link-hover))',
    },
    primary: {
      hover: 'hsl(var(--states-primary-hover))',
    },
    secondary: {
      hover: 'hsl(var(--states-secondary-hover))',
    },
  },
};

module.exports = { colors };
