import type { Metadata } from "next"

import { LegalDocView } from "@/components/sections/legal-doc"
import { SiteHeader } from "@/components/sections/site-header"
import { SiteFooter } from "@/components/sections/site-footer"
import { APP_CONFIG } from "@/config/app-config"
import {
  PRIVACY_EN,
  PRIVACY_FR,
  TERMS_EN,
  TERMS_FR,
} from "@/data/legal"

export const metadata: Metadata = {
  title: `Privacy Policy & Terms of Service — ${APP_CONFIG.name}`,
  description:
    "How Constela collects, uses, and protects your personal data. Includes our privacy policy, terms of service, and your GDPR rights.",
}

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 pb-24 pt-12 sm:pt-16">
        <LegalDocView
          docs={{
            en: { privacy: PRIVACY_EN, terms: TERMS_EN },
            fr: { privacy: PRIVACY_FR, terms: TERMS_FR },
          }}
        />
      </main>
      <SiteFooter />
    </>
  )
}