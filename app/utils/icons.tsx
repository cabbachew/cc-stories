import React from "react";
import * as LucideIcons from "lucide-react";
import type { LucideProps } from "lucide-react";

// Define a type for the props we'll accept
interface IconProps extends Omit<LucideProps, "ref"> {
  name: string;
}

// Type to represent a React component that accepts LucideProps
type IconComponent = React.ComponentType<LucideProps>;

/**
 * A component that renders any Lucide icon by name
 * Dynamically renders icons based on the name provided
 */
export function DynamicIcon({ name, ...props }: IconProps) {
  if (!name) {
    console.warn("Icon name is undefined or empty, using Circle as fallback");
    return <LucideIcons.Circle {...props} />;
  }

  // Handle different naming formats (kebab-case, camelCase, spaces, etc.)
  // and convert to PascalCase format that Lucide uses for component names
  const formattedName = name
    .split(/[-_\s]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

  // Get the icon component from Lucide icons
  // Use a safer approach than 'any' for TypeScript
  const icons = LucideIcons as unknown as Record<
    string,
    IconComponent | undefined
  >;
  const IconComponent = icons[formattedName];

  if (IconComponent) {
    return <IconComponent {...props} />;
  }

  // Provide fallback for icons not found
  console.warn(`Icon "${name}" not found, using Circle as fallback`);
  return <LucideIcons.Circle {...props} />;
}
