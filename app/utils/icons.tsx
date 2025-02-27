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
  Instagram,
  TrendingUp,
  Globe,
  Gift,
  Heart,
  Target,
  Users,
  LayoutGrid,
  Puzzle,
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
    case "instagram":
      return <Instagram {...props} />;
    case "trending-up":
    case "trendingup":
      return <TrendingUp {...props} />;
    case "globe":
      return <Globe {...props} />;
    case "gift":
      return <Gift {...props} />;
    case "heart":
      return <Heart {...props} />;
    case "target":
      return <Target {...props} />;
    case "users":
      return <Users {...props} />;
    case "layout-grid":
      return <LayoutGrid {...props} />;
    case "puzzle":
      return <Puzzle {...props} />;
    default:
      console.warn(`Icon "${name}" not found, using Circle as fallback`);
      return <Circle {...props} />;
  }
}
