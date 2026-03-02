"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

import { getRouteIndex, siteRoutes } from "@/lib/site-routes";

const SWIPE_THRESHOLD = 55;
const WHEEL_THRESHOLD = 45;
const NAV_LOCK_MS = 800;
const EDGE_THRESHOLD_PX = 10;

function isInteractiveTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  const tag = target.tagName.toLowerCase();
  return tag === "input" || tag === "textarea" || tag === "select" || tag === "button" || target.isContentEditable;
}

export function RouteScroller() {
  const pathname = usePathname();
  const router = useRouter();
  const isLockedRef = useRef(false);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    const currentIndex = getRouteIndex(pathname);
    if (currentIndex < 0) {
      return;
    }

    const isAtTop = () => window.scrollY <= EDGE_THRESHOLD_PX;
    const isAtBottom = () =>
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - EDGE_THRESHOLD_PX;

    const navigateToIndex = (index: number) => {
      if (index < 0 || index >= siteRoutes.length || isLockedRef.current) {
        return;
      }

      isLockedRef.current = true;
      router.push(siteRoutes[index].href);
      window.setTimeout(() => {
        isLockedRef.current = false;
      }, NAV_LOCK_MS);
    };

    const onWheel = (event: WheelEvent) => {
      if (
        Math.abs(event.deltaY) < WHEEL_THRESHOLD ||
        event.defaultPrevented ||
        event.ctrlKey ||
        event.metaKey ||
        event.altKey ||
        isInteractiveTarget(event.target)
      ) {
        return;
      }

      const direction = event.deltaY > 0 ? 1 : -1;
      const canRoute = direction > 0 ? isAtBottom() : isAtTop();
      if (!canRoute) {
        return;
      }

      const nextIndex = currentIndex + direction;
      if (nextIndex < 0 || nextIndex >= siteRoutes.length) {
        return;
      }

      event.preventDefault();
      navigateToIndex(nextIndex);
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0]?.clientY ?? null;
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (touchStartY.current === null) {
        return;
      }

      const endY = event.changedTouches[0]?.clientY;
      if (typeof endY !== "number") {
        touchStartY.current = null;
        return;
      }

      const delta = touchStartY.current - endY;
      touchStartY.current = null;

      if (Math.abs(delta) < SWIPE_THRESHOLD) {
        return;
      }

      const direction = delta > 0 ? 1 : -1;
      const canRoute = direction > 0 ? isAtBottom() : isAtTop();
      if (!canRoute) {
        return;
      }

      navigateToIndex(currentIndex + direction);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [pathname, router]);

  return null;
}
