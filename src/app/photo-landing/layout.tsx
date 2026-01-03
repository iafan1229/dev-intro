import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DayLog - Record your day beautifully",
  description: "DayLog - A privacy-focused diary app that lets you easily record precious moments with photos and text",
  keywords: "diary, journal, DayLog, photo diary, privacy, offline diary",
};

export default function PhotoLandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

