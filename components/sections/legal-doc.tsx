"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import type { LegalBlock, LegalDoc, LegalSection } from "@/data/legal"

type Tab = "privacy" | "terms"
type Locale = "en" | "fr"

type LegalDocProps = {
  docs: {
    en: { privacy: LegalDoc; terms: LegalDoc }
    fr: { privacy: LegalDoc; terms: LegalDoc }
  }
}

function MetaLine({ doc }: { doc: LegalDoc }) {
  return (
    <dl className="grid gap-x-6 gap-y-2 rounded-2xl border border-border bg-card p-5 text-sm sm:grid-cols-[max-content_1fr]">
      <Row label="Last updated" value={doc.meta.lastUpdated} />
      <Row label="Controller" value={doc.meta.controller} />
      <Row label="Registration" value={doc.meta.registered} />
      <Row label="Address" value={doc.meta.address} />
      <Row label="Privacy & DPO" value={doc.meta.email} />
      <Row label="EU representative" value={doc.meta.euRep} />
    </dl>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <>
      <dt className="font-medium text-foreground">{label}</dt>
      <dd className="text-muted-foreground">{value}</dd>
    </>
  )
}

function Block({ block }: { block: LegalBlock }) {
  if (block.kind === "p") {
    return <p className="leading-relaxed text-foreground/90">{block.text}</p>
  }
  if (block.kind === "list") {
    return (
      <ul className="space-y-2 pl-1">
        {block.items.map((item, i) => (
          <li
            key={i}
            className="relative pl-6 leading-relaxed text-foreground/90 before:absolute before:left-1 before:top-[0.65em] before:size-1.5 before:rounded-full before:bg-primary/70"
          >
            {item}
          </li>
        ))}
      </ul>
    )
  }
  if (block.kind === "table") {
    return (
      <div className="overflow-x-auto rounded-xl border border-border bg-card/60">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-left">
            <tr>
              {block.columns.map((c, i) => (
                <th
                  key={i}
                  className="px-4 py-2.5 font-medium text-foreground"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, i) => (
              <tr key={i} className="border-t border-border/60">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={cn(
                      "px-4 py-2.5 align-top text-foreground/85",
                      j === 0 && "font-medium text-foreground"
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  return null
}

function SectionBody({ section }: { section: LegalSection }) {
  return (
    <section id={section.id} className="scroll-mt-24">
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
        {section.title}
      </h2>
      <div className="mt-4 space-y-4">
        {section.blocks.map((b, i) => (
          <Block key={i} block={b} />
        ))}
      </div>
    </section>
  )
}

function TableOfContents({ doc }: { doc: LegalDoc }) {
  return (
    <nav
      aria-label="Table of contents"
      className="hidden lg:block lg:w-64 lg:shrink-0"
    >
      <div className="sticky top-24 rounded-2xl border border-border bg-card p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Contents
        </p>
        <ul className="mt-3 space-y-2 text-sm">
          {doc.sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="block text-muted-foreground transition-colors hover:text-foreground"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export function LegalDocView({ docs }: LegalDocProps) {
  const [tab, setTab] = React.useState<Tab>("privacy")
  const [locale, setLocale] = React.useState<Locale>("en")

  const doc = docs[locale][tab]

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-full border border-border bg-input/30 p-1 text-sm">
          <TabButton active={tab === "privacy"} onClick={() => setTab("privacy")}>
            {locale === "en" ? "Privacy Policy" : "Politique de confidentialité"}
          </TabButton>
          <TabButton active={tab === "terms"} onClick={() => setTab("terms")}>
            {locale === "en" ? "Terms of Service" : "CGU"}
          </TabButton>
        </div>
        <div className="inline-flex rounded-full border border-border bg-input/30 p-1 text-sm">
          <LocaleButton active={locale === "en"} onClick={() => setLocale("en")}>
            EN
          </LocaleButton>
          <LocaleButton active={locale === "fr"} onClick={() => setLocale("fr")}>
            FR
          </LocaleButton>
        </div>
      </div>

      <div className="mt-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {doc.meta.title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {locale === "en" ? "Last updated" : "Dernière mise à jour"} :{" "}
          {doc.meta.lastUpdated}
        </p>
      </div>

      <div className="mt-6">
        <MetaLine doc={doc} />
      </div>

      <div className="mt-10 flex gap-10">
        <TableOfContents doc={doc} />
        <div className="min-w-0 flex-1 space-y-12">
          {doc.intro.map((b, i) => (
            <Block key={i} block={b} />
          ))}
          {doc.sections.map((s) => (
            <SectionBody key={s.id} section={s} />
          ))}
        </div>
      </div>
    </div>
  )
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full px-4 py-1.5 transition-colors",
        active
          ? "bg-primary text-primary-foreground shadow-sm"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {children}
    </button>
  )
}

function LocaleButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full px-3 py-1 transition-colors",
        active
          ? "bg-foreground text-background"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {children}
    </button>
  )
}