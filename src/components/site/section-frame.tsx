"use client";

import { useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ArrowDown, ArrowUp } from "lucide-react";

import { siteRoutes } from "@/lib/site-routes";
import { cn } from "@/lib/utils";

type SectionFrameProps = {
  children: React.ReactNode;
  sectionClassName?: string;
  prevButtonWrapperClassName?: string;
  hidePrevButton?: boolean;
  hideNextButton?: boolean;
};

export function SectionFrame({
  children,
  sectionClassName,
  prevButtonWrapperClassName,
  hidePrevButton = false,
  hideNextButton = false
}: SectionFrameProps) {
  const pathname = usePathname();

  const routeIndex = useMemo(() => siteRoutes.findIndex((route) => route.href === pathname), [pathname]);
  const prevRoute = routeIndex > 0 ? siteRoutes[routeIndex - 1] : null;
  const nextRoute = routeIndex >= 0 && routeIndex < siteRoutes.length - 1 ? siteRoutes[routeIndex + 1] : null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".page-enter",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.75, ease: "power2.out", stagger: 0.12 }
      );
    });

    return () => ctx.revert();
  }, [pathname]);

  return (
    <section className={cn("relative flex min-h-screen items-center pb-10 pt-24 md:pb-14", sectionClassName)}>
      <div className="container grid w-full gap-8 pb-24 md:pb-32">{children}</div>

      {prevRoute && !hidePrevButton ? (
        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 top-24 flex justify-center",
            prevButtonWrapperClassName
          )}
        >
          <Link
            href={prevRoute.href}
            className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-sm transition hover:bg-white"
          >
            <ArrowUp className="h-3.5 w-3.5 animate-bounce" />
            Scroll to {prevRoute.label}
          </Link>
        </div>
      ) : null}

      {nextRoute && !hideNextButton ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
          <Link
            href={nextRoute.href}
            className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-sm transition hover:bg-white"
          >
            Scroll to {nextRoute.label}
            <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
          </Link>
        </div>
      ) : null}
    </section>
  );
}
