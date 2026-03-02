"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    UnicornStudio?: {
      init?: () => void;
    };
  }
}

type UnicornEmbedProps = {
  projectId: string;
};

export function UnicornEmbed({ projectId }: UnicornEmbedProps) {
  useEffect(() => {
    window.UnicornStudio?.init?.();
  }, []);

  return (
    <>
      <div
        className="absolute left-0 top-[48%] w-screen -translate-y-1/2 md:top-[46%] lg:top-[42%]"
        style={{
          width: "1440px",
          height: "900px"
        }}
      >
        <div data-us-project={projectId} style={{ width: "1440px", height: "900px" }} className="h-full w-full" />
      </div>
      <Script
        id="unicorn-studio-script"
        src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.UnicornStudio?.init?.();
        }}
      />
    </>
  );
}
