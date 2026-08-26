"use client";

import { useEffect, useState } from "react";

import type { Language } from "../data/content";

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("vi");

  useEffect(() => {
    const saved = window.localStorage.getItem("kd-language") as Language | null;
    if (saved !== "vi" && saved !== "en") return;

    const frameId = window.requestAnimationFrame(() => setLanguage(saved));
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("kd-language", language);
    document.documentElement.lang = language;
    document.title = language === "vi"
      ? "Khánh Đoan — Performance Marketing & Account Management"
      : "Khánh Đoan — Performance Marketing & Account Management";

    const description = language === "vi"
      ? "Portfolio Performance Marketing & Account Management của Khánh Đoan — chiến lược paid media, tối ưu funnel, phân tích hiệu suất và điều phối account."
      : "Khánh Đoan’s Performance Marketing & Account Management portfolio — paid media strategy, funnel optimization, performance analysis, and account coordination.";
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [language]);

  return { language, setLanguage };
}
