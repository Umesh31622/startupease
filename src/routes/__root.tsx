import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet, createRootRouteWithContext, useRouter,
  HeadContent, Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { StickyCTA } from "@/components/site/StickyCTA";
import { EnquiryModal } from "@/components/site/EnquiryModal";
import { Toaster } from "@/components/ui/sonner";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-extrabold brand-gradient-text">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-[var(--navy)]">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">This page doesn't exist or has been moved.</p>
        <a href="/" className="mt-6 inline-flex rounded-xl bg-[var(--navy)] text-white px-4 py-2 text-sm font-semibold hover:bg-[var(--teal)] hover:text-[var(--navy)]">Go home</a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-[var(--navy)]">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try refreshing.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }}
            className="rounded-xl bg-[var(--navy)] text-white px-4 py-2 text-sm font-semibold hover:bg-[var(--teal)] hover:text-[var(--navy)]">
            Try again
          </button>
          <a href="/" className="rounded-xl border px-4 py-2 text-sm font-semibold">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "StartupEase — From Registration to Funding" },
      { name: "description", content: "StartupEase helps Indian founders launch, comply, raise and scale. GST, company registration, trademark, fundraising and more." },
      { name: "author", content: "StartupEase" },
      { name: "theme-color", content: "#0a2458" },
      { property: "og:title", content: "StartupEase — From Registration to Funding" },
      { property: "og:description", content: "StartupEase helps Indian founders launch, comply, raise and scale. GST, company registration, trademark, fundraising and more." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "StartupEase" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "StartupEase — From Registration to Funding" },
      { name: "twitter:description", content: "StartupEase helps Indian founders launch, comply, raise and scale. GST, company registration, trademark, fundraising and more." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@1,600;1,700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "StartupEase",
        url: "https://startupease.in",
        email: "info@startupease.in",
        telephone: "+91 7347574707",
        slogan: "From Registration to Funding",
      }),
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="min-h-screen"><Outlet /></main>
      <Footer />
      <StickyCTA />
      <EnquiryModal />
      <Toaster position="top-right" />

    </QueryClientProvider>
  );
}
