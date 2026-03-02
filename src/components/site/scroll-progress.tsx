"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { getRouteIndex, siteRoutes } from "@/lib/site-routes";

export function ScrollProgress() {
  const pathname = usePathname();

  const { progress } = useMemo(() => {
    const index = getRouteIndex(pathname);
    if (index < 0) {
      return { progress: 0 };
    }

    const total = siteRoutes.length;
    const percent = ((index + 1) / total) * 100;
    return { progress: percent };
  }, [pathname]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60]">
      <div className="h-1 w-full bg-slate-200/60">
        <div
          className="h-full bg-gradient-to-r from-primary to-emerald-500 transition-[width] duration-500 ease-out"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
          aria-label="Scroll progress"
        />
      </div>
    </div>
  );
}
