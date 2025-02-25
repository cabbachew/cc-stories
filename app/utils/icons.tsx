import React from "react";
import {
  Circle,
  Compass,
  Zap,
  Rocket,
  Dice6,
  ShoppingBag,
  Bug,
  Lightbulb,
  Briefcase,
  Gamepad2,
  Palette,
  Presentation,
  Microscope,
  Code,
  BookOpen,
  GraduationCap,
  type LucideProps,
} from "lucide-react";

// Define a type for the props we'll accept
interface IconProps extends Omit<LucideProps, "ref"> {
  name: string;
}

/**
 * A component that renders a Lucide icon by name
 * Supports common icon names used in the application
 */
export function DynamicIcon({ name, ...props }: IconProps) {
  // Convert name to lowercase for case-insensitive matching
  const iconName = name.toLowerCase();

  // Return the appropriate icon based on name
  switch (iconName) {
    case "compass":
      return <Compass {...props} />;
    case "zap":
      return <Zap {...props} />;
    case "rocket":
      return <Rocket {...props} />;
    case "dice-6":
    case "dice6":
      return <Dice6 {...props} />;
    case "shopping-bag":
    case "shoppingbag":
      return <ShoppingBag {...props} />;
    case "bug":
      return <Bug {...props} />;
    case "lightbulb":
      return <Lightbulb {...props} />;
    case "briefcase":
      return <Briefcase {...props} />;
    case "gamepad":
    case "gamepad2":
      return <Gamepad2 {...props} />;
    case "palette":
      return <Palette {...props} />;
    case "presentation":
      return <Presentation {...props} />;
    case "microscope":
      return <Microscope {...props} />;
    case "code":
      return <Code {...props} />;
    case "book":
    case "book-open":
      return <BookOpen {...props} />;
    case "graduation":
    case "graduation-cap":
      return <GraduationCap {...props} />;
    default:
      console.warn(`Icon "${name}" not found, using Circle as fallback`);
      return <Circle {...props} />;
  }
}
