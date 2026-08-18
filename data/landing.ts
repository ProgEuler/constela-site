import type { LucideIcon } from "lucide-react"
import {
  Sparkles,
  MessagesSquare,
  Users,
  ShieldCheck,
  Search,
  Lock,
} from "lucide-react"

export type NavItem = {
  label: string
  href: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Preview", href: "#preview" },
  { label: "Privacy & policies", href: "/privacy" },
]

export const FOOTER_NAV: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Preview", href: "#preview" },
]

export type Feature = {
  title: string
  description: string
  icon: LucideIcon
}

export const FEATURES: Feature[] = [
  {
    title: "Match on what really matters",
    description:
      "Our 7-step onboarding captures a rich, multi-dimensional profile — sensory preferences, emotional triggers, lifestyle, and interests — so you meet people who genuinely fit how you live and love.",
    icon: Sparkles,
  },
  {
    title: "Real conversations, in real time",
    description:
      "Direct messages with typing indicators, emoji reactions, image sharing, and reply threads. Join community chat rooms to talk about what you care about with people who get it.",
    icon: MessagesSquare,
  },
  {
    title: "Friendship, not just romance",
    description:
      "Switch to Friends mode to meet people who share your wavelength — for shared activities, deep talks, or just understanding. No romance required.",
    icon: Users,
  },
  {
    title: "Verified faces, real people",
    description:
      "Optional 3-angle face verification powered by on-device ML deters catfishing and impersonation — so you know the person behind the profile is real.",
    icon: ShieldCheck,
  },
  {
    title: "Powerful discovery",
    description:
      "Swipe deck for daily Perfect Matches, advanced filters (age, languages, neurotype, lifestyle, emotional profile), and top-5 compatibility scores on Premium.",
    icon: Search,
  },
  {
    title: "Built with privacy in mind",
    description:
      "Encrypted token storage, on-device biometric processing, full GDPR rights, and zero selling of personal data. Special-category data only with your explicit consent.",
    icon: Lock,
  },
]

export type ChangelogEntry = {
  date: string
  title: string
  description: string
}

export const CHANGELOG: ChangelogEntry[] = [
  {
    date: "Aug 2026",
    title: "Sensory profile v2",
    description:
      "Sharper matching on sensory compatibility — sound, light, touch, and social-energy preferences now weigh into your daily Perfect Matches.",
  },
  {
    date: "Jul 2026",
    title: "Friends mode beta",
    description:
      "Switch your profile between romance and friendship from settings — same rich profile, different intent, no awkward mismatches.",
  },
  {
    date: "Jun 2026",
    title: "Verified faces rollout",
    description:
      "Optional 3-angle selfie verification is now live for everyone. Builds are processed on-device; nothing leaves your phone until you approve it.",
  },
]

export type FooterGroup = {
  title: string
  links: NavItem[]
}

export const FOOTER_GROUPS: FooterGroup[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Preview", href: "#preview" },
      { label: "Safety", href: "#safety" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Blog", href: "#" },
      { label: "Discord", href: "#" },
      { label: "Accessibility", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
]
