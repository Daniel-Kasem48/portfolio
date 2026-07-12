"use client";

import { useEffect } from "react";
import AOS from "aos";
import posthog from "posthog-js";

export default function ClientBootstrap() {
  useEffect(() => {
    posthog.init("phc_PHGOM1sChg79Rn41sebnqZh6mWjS4g2i6DwEjRhQMBZ", {
      api_host: "https://us.i.posthog.com",
    });

    AOS.init({
      duration: 700,
      once: true,
      offset: 80,
      easing: "ease-in-out",
    });
  }, []);

  return null;
}
