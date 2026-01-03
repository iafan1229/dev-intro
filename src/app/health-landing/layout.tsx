import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "헬스로그 - 나만의 운동 기록 앱",
  description: "헬스로그 - 나만의 운동 기록 앱. 운동 루틴, 세트 기록, 진행 분석을 한 곳에서 관리하세요.",
  keywords: "헬스, 운동, 피트니스, 운동 기록, 루틴, 헬스장",
};

export default function HealthLandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

