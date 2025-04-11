import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import {
  BodyFontFamily,
  HeaderFontFamily,
  ButtonFontFamily,
} from "@/config/fonts";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="min-h-screen h-full"
      suppressHydrationWarning
    >
      <body
        className={cn(
          HeaderFontFamily.variable,
          BodyFontFamily.variable,
          ButtonFontFamily.variable,
          "antialiased h-full"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
        <Script
          src="https://cdn.jsdelivr.net/npm/@polar-sh/checkout@0.1/dist/embed.global.js"
          strategy="beforeInteractive"
        ></Script>
        {process.env.ANALYTICS_ID && (
          <Script
            defer
            src={`${process.env.ANALYTICS_URL}/analytics/script.js`}
            data-website-id={process.env.ANALYTICS_ID}
          />
        )}
      </body>
    </html>
  );
}
