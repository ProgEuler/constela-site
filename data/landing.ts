import {
  SparklesIcon,
  ConversationIcon,
  UserGroupIcon,
  SecurityIcon,
  Search01Icon,
  LockIcon,
} from "@hugeicons/core-free-icons"
import type { IconSvgElement } from "@hugeicons/react"

export type NavItem = {
  label: string
  href: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Preview", href: "#preview" },
]

export const FOOTER_NAV: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Preview", href: "#preview" },
]

export type Feature = {
  title: string
  description: string
  icon: IconSvgElement
}

export const FEATURES: Feature[] = [
  {
    title: "Match on what really matters",
    description:
      "Our 7-step onboarding captures a rich, multi-dimensional profile — sensory preferences, emotional triggers, lifestyle, and interests — so you meet people who genuinely fit how you live and love.",
    icon: SparklesIcon,
  },
  {
    title: "Real conversations, in real time",
    description:
      "Direct messages with typing indicators, emoji reactions, image sharing, and reply threads. Join community chat rooms to talk about what you care about with people who get it.",
    icon: ConversationIcon,
  },
  {
    title: "Friendship, not just romance",
    description:
      "Switch to Friends mode to meet people who share your wavelength — for shared activities, deep talks, or just understanding. No romance required.",
    icon: UserGroupIcon,
  },
  {
    title: "Verified faces, real people",
    description:
      "Optional 3-angle face verification powered by on-device ML deters catfishing and impersonation — so you know the person behind the profile is real.",
    icon: SecurityIcon,
  },
  {
    title: "Powerful discovery",
    description:
      "Swipe deck for daily Perfect Matches, advanced filters (age, languages, neurotype, lifestyle, emotional profile), and top-5 compatibility scores on Premium.",
    icon: Search01Icon,
  },
  {
    title: "Built with privacy in mind",
    description:
      "Encrypted token storage, on-device biometric processing, full GDPR rights, and zero selling of personal data. Special-category data only with your explicit consent.",
    icon: LockIcon,
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

export type PricingPlan = {
  name: string
  tagline: string
  price: string
  priceSuffix?: string
  highlighted?: boolean
  cta: { label: string; href: string }
  features: string[]
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Free",
    tagline: "Everything you need to start meeting your people.",
    price: "$0",
    priceSuffix: "forever",
    cta: { label: "Get started", href: "#" },
    features: [
      "Full sensory & compatibility profile",
      "Daily Perfect Matches",
      "Direct messages with read receipts",
      "Friends mode or Romance mode",
      "Community chat rooms",
      "On-device face verification",
    ],
  },
  {
    name: "Plus",
    tagline: "More reach, fewer limits, deeper filters.",
    price: "$4.99",
    priceSuffix: "per month",
    highlighted: true,
    cta: { label: "Start free trial", href: "#" },
    features: [
      "Everything in Free",
      "See who liked you",
      "Advanced filters (neurotype, lifestyle, languages)",
      "Unlimited swipes & rewinds",
      "Boost once a month",
      "Read receipts control",
    ],
  },
  {
    name: "Premium",
    tagline: "Maximum compatibility and full control.",
    price: "$9.99",
    priceSuffix: "per month",
    cta: { label: "Start free trial", href: "#" },
    features: [
      "Everything in Plus",
      "Top-5 daily compatibility scores",
      "Priority placement in feeds",
      "Profile visitors list",
      "Incognito mode",
      "Priority human support",
    ],
  },
]
