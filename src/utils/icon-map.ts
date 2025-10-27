import { MessageCircle, Instagram, Mail, Github, Zap, LucideIcon } from "lucide-react";

// Peta nama ikon string ke komponen Lucide React
const iconMap: { [key: string]: LucideIcon } = {
  MessageCircle,
  Instagram,
  Mail,
  Github,
  Zap,
};

export function getIconComponent(iconName: string): LucideIcon | null {
  return iconMap[iconName] || null;
}