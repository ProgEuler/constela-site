import { Geist_Mono, DM_Sans } from "next/font/google"

import "./globals.css"
import { ThemeHotkey } from "@/components/theme-hotkey"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { APP_CONFIG } from "@/config/app-config"
import { Metadata } from "next"
import { Toaster } from "sonner"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: APP_CONFIG.meta.title,
  description: APP_CONFIG.meta.description,
  icons: {
    icon: [{ url: "/logo.webp", type: "image/webp" }],
  },
}

const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("constela-theme");
    var theme = stored || "light";
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    document.documentElement.style.colorScheme = theme;
  } catch (_) {}
})();
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        dmSans.variable
      )}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </head>
      <body>
        <ThemeProvider>
          <ThemeHotkey />
          {children}
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
