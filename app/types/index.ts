export interface TimelineElement {
  id?: string | number;
  date: string;
  title: string;
  description?: string;
  icon?: React.ReactNode | (() => React.ReactNode);
  color?: "primary" | "secondary" | "muted" | "accent";
  status?: "completed" | "in-progress" | "pending";
  size?: "sm" | "md" | "lg";
}

export type TimelineColor =
  | "primary"
  | "secondary"
  | "muted"
  | "accent"
  | "destructive";
