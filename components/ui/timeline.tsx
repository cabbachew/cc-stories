import * as React from "react";
import { cn } from "@/lib/utils";
import { Check, Clock, Circle } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

const timelineVariants = cva("relative space-y-4", {
  variants: {
    size: {
      sm: "before:ml-3",
      md: "before:ml-5",
      lg: "before:ml-7",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const iconVariants = cva(
  "absolute left-0 flex items-center justify-center rounded-full border bg-background",
  {
    variants: {
      size: {
        sm: "h-6 w-6",
        md: "h-10 w-10",
        lg: "h-14 w-14",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface TimelineProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof timelineVariants> {}

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  date: Date | string | number;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  iconColor?: "primary" | "secondary" | "muted" | "accent";
  status?: "completed" | "in-progress" | "pending";
  loading?: boolean;
  error?: string;
}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ children, className, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          timelineVariants({ size }),
          "before:absolute before:inset-0 before:h-full before:w-0.5 before:bg-border",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Timeline.displayName = "Timeline";

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  (
    {
      className,
      date,
      title,
      description,
      icon,
      iconColor = "primary",
      status = "completed",
      loading,
      error,
      ...props
    },
    ref
  ) => {
    const statusIcon = {
      completed: <Check className="h-4 w-4" />,
      "in-progress": <Clock className="h-4 w-4" />,
      pending: <Circle className="h-4 w-4" />,
    };

    if (loading) {
      return (
        <div className="flex items-center space-x-4 opacity-50 animate-pulse">
          <div className="h-10 w-10 rounded-full bg-muted" />
          <div className="space-y-2">
            <div className="h-4 w-[200px] rounded bg-muted" />
            <div className="h-4 w-[160px] rounded bg-muted" />
          </div>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn("relative pl-12 md:pl-14", className)}
        {...props}
      >
        <div
          className={cn(
            iconVariants({ size: "md" }),
            iconColor === "primary" && "text-primary",
            iconColor === "secondary" && "text-secondary",
            iconColor === "muted" && "text-muted",
            iconColor === "accent" && "text-accent",
            error && "bg-destructive text-destructive-foreground"
          )}
        >
          {error ? <Circle className="h-4 w-4" /> : icon || statusIcon[status]}
        </div>
        <div className="flex flex-col gap-2 pt-1">
          <div className="flex items-center gap-2">
            <TimelineTime date={date} />
            <h4 className="font-semibold">{title}</h4>
          </div>
          {(description || error) && (
            <p className="text-sm text-muted-foreground">
              {error || description}
            </p>
          )}
        </div>
      </div>
    );
  }
);
TimelineItem.displayName = "TimelineItem";

const TimelineTime = ({
  date,
  className,
}: {
  date: Date | string | number;
  className?: string;
}) => {
  const formattedDate =
    typeof date === "string"
      ? new Date(date).toLocaleDateString()
      : new Date(date).toLocaleDateString();

  return (
    <time className={cn("text-sm text-muted-foreground", className)}>
      {formattedDate}
    </time>
  );
};

export { Timeline, TimelineItem };
