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
      ? "Khánh Đoan — Full-stack Marketer & Chuyên gia Performance Ads"
      : "Khánh Đoan — Full-stack Marketer & Performance Ads Specialist";

    const description = language === "vi"
      ? "Portfolio của Khánh Đoan — full-stack marketer với 3 năm kinh nghiệm, chuyên sâu Performance Ads và quản lý hơn 600 triệu đồng ngân sách quảng cáo mỗi tháng."
      : "Portfolio of Khánh Đoan, a full-stack marketer with 3 years of experience specializing in Performance Ads and managing more than USD 23,000 in monthly media spend.";
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [language]);

  return { language, setLanguage };
}
