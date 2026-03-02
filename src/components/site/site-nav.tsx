"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteRoutes } from "@/lib/site-routes";

export function SiteNav() {
  const pathname = usePathname();
  const isDarkNav = pathname === "/about" || pathname === "/hero" || pathname === "/coverage";

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="container pt-3">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl bg-white/15 px-2 py-1 shadow-[0_8px_30px_rgba(2,6,23,0.12)] backdrop-blur-xl md:px-2",
            isDarkNav ? "border border-white/55" : "border border-white/35"
          )}
        >
          <Link
            href="/hero"
            className={cn(
              "inline-flex items-center"
            )}
          >
            <Image src="/images/Beau.png" alt="24 Hour Express logo" width={120} height={44} className="h-10 w-auto" priority />
          </Link>
          <div className={cn("hidden items-center gap-4 text-xs font-medium md:flex", isDarkNav ? "text-white/85" : "text-slate-800")}>
            {siteRoutes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "rounded-lg px-2 py-1 transition",
                  pathname === route.href
                    ? isDarkNav
                      ? "bg-orange-200 text-slate-900"
                      : "bg-primary/10 text-primary"
                    : isDarkNav
                      ? "hover:bg-white/15 hover:text-white"
                      : "hover:bg-slate-100 hover:text-slate-900"
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>
          <Button
            asChild
            size="sm"
            className="bg-gradient-to-br from-orange-400 via-orange-300 to-orange-100 text-slate-800 hover:brightness-100"
          >
            <a href="tel:+18013306151" className="inline-flex items-center gap-2">
              <Image src="/icons/telephone.svg" alt="Telephone" width={16} height={16} />
              Call Now
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
