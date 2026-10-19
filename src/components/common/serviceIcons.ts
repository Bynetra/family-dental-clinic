import {
  Activity,
  Bone,
  Brain,
  Dumbbell,
  Hand,
  HeartPulse,
  Move,
  PersonStanding,
  type LucideIcon,
} from "lucide-react";

/** Maps each service slug to a professional icon. */
export const serviceIcons: Record<string, LucideIcon> = {
  "back-neck-pain": Activity,
  "sports-injury": Dumbbell,
  "joint-mobility": Bone,
  "post-operative": HeartPulse,
  "stroke-rehab": Brain,
  "posture-movement": PersonStanding,
  "soft-tissue": Hand,
  "exercise-based": Move,
};
