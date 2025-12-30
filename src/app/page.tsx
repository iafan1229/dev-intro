"use client";

import Image from "next/image";
import AppStoreButton from "@/components/AppStoreButton";
import AndroidStoreButton from "@/components/AndroidStoreButton";
import dynamic from "next/dynamic";

const GlitterBackground = dynamic(() => import("@/components/Scene3D"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className='min-h-screen bg-white relative'>
      {/* Glitter Background - Full Page */}
      <div className='fixed inset-0 z-0'>
        <GlitterBackground />
      </div>

      {/* Content */}
      <div className='relative z-10'>
        {/* Hero Section */}
        <section className='min-h-screen flex items-center'>
          <div className='container mx-auto px-6 max-w-4xl'>
            <div className='flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12'>
              {/* Profile Image */}
              <div className='flex-shrink-0'>
                <Image
                  src='/img/profile.jpg'
                  alt='이하영 프로필'
                  width={300}
                  height={200}
                  className='rounded-full border-4 border-gray-100'
                  priority
                />
              </div>

              {/* Text Content */}
              <div className='flex-1 text-center md:text-left'>
                <h1 className='text-6xl md:text-8xl font-extrabold mb-8 leading-tight tracking-tighter'>
                  <span className='block text-gray-900'>안녕하세요.</span>
                  <span className='block text-gray-500 mt-2'>
                    프론트엔드 개발자
                  </span>
                  <span className='block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-600 to-gray-400'>
                    이하영입니다.
                  </span>
                </h1>
                <p className='text-lg md:text-2xl text-gray-600 mb-12'>
                  Next.js와 React Native로 웹과 모바일 앱을 개발합니다.
                  <br />
                  개발 및 디자인을 할때에는 항상 유저 친화적인 기능과 UI/UX을
                  먼저 생각합니다.
                </p>
                <div style={{ paddingTop: 20 }}>
                  <div className='flex gap-6 mb-8 justify-center md:justify-start'>
                    {/* GitHub */}
                    <a
                      href='https://github.com/iafan1229'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gray-400 hover:text-gray-900 transition-colors duration-300'
                      aria-label='GitHub'
                    >
                      <svg
                        className='w-8 h-8'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </a>

                    {/* Blog (Naver) */}
                    <a
                      href='https://blog.naver.com/home124'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='transition-opacity duration-300 hover:opacity-70'
                      aria-label='Naver Blog'
                    >
                      <Image
                        src='/blog.png'
                        alt='Naver Blog'
                        width={32}
                        height={32}
                        className='w-8 h-8'
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id='skills' className='border-t border-gray-200'>
          <div className='container mx-auto px-6 max-w-4xl'>
            <div
              className='mb-16 text-center md:text-left'
              style={{ paddingBottom: "40px" }}
            >
              <span className='text-gray-400 font-bold text-lg mb-2 block'>
                01. Skills
              </span>
              <h2 className='text-4xl md:text-5xl font-extrabold tracking-tighter text-gray-900 inline-block relative'>
                기술 스택
                <span className='absolute -bottom-2 left-0 w-full h-1 bg-gray-900 origin-left transform scale-x-100 transition-transform duration-300'></span>
              </h2>
            </div>
            <div className='space-y-8'>
              <div>
                <h3 className='text-2xl font-bold mb-4 text-gray-900 text-center md:text-left'>
                  프론트엔드
                </h3>
                <div className='flex flex-wrap gap-3 justify-center md:justify-start'>
                  <span className='px-4 py-2 text-gray-900 rounded-lg text-lg'>
                    Next.js
                  </span>
                  <span className='px-4 py-2 text-gray-900 rounded-lg text-lg'>
                    React
                  </span>
                  <span className='px-4 py-2 text-gray-900 rounded-lg text-lg'>
                    TypeScript
                  </span>
                  <span className='px-4 py-2 text-gray-900 rounded-lg text-lg'>
                    JavaScript
                  </span>
                </div>
              </div>
              <div style={{ paddingTop: "20px" }}>
                <h3 className='text-2xl font-bold mb-4 text-gray-900 text-center md:text-left'>
                  모바일
                </h3>
                <div className='flex flex-wrap gap-3 justify-center md:justify-start'>
                  <span className='px-4 py-2 text-gray-900 rounded-lg text-lg'>
                    React Native
                  </span>
                  <span className='px-4 py-2 text-gray-900 rounded-lg text-lg'>
                    Expo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id='projects' className='border-t border-gray-200'>
          <div className='container mx-auto px-6'>
            <div
              className='mb-16 text-center md:text-left'
              style={{ paddingBottom: "40px" }}
            >
              <span className='text-gray-400 font-bold text-lg mb-2 block'>
                02. Projects
              </span>
              <h2 className='text-4xl md:text-5xl font-extrabold tracking-tighter text-gray-900 inline-block relative'>
                프로젝트
                <span className='absolute -bottom-2 left-0 w-full h-1 bg-gray-900 origin-left transform scale-x-100 transition-transform duration-300'></span>
              </h2>
            </div>

            <div className='space-y-16'>
              {/* 헬스로그 */}
              <div style={{ paddingBottom: 40 }}>
                <div className='flex flex-col gap-6 mb-6'>
                  <div className='flex flex-col lg:flex-row flex-wrap items-center lg:items-start gap-8 lg:gap-12'>
                    <div className='text-center md:text-left'>
                      <h3 className='text-3xl font-bold mb-3 text-gray-900'>
                        1. 헬스로그
                      </h3>
                      <span className='text-lg text-gray-400'>
                        2025년 12월 출시
                      </span>
                      <p
                        className='text-lg text-gray-600 mb-4 leading-relaxed'
                        style={{ paddingTop: 10 }}
                      >
                        운동 기록을 쉽고 간편하게 관리할 수 있는 피트니스
                        앱입니다.
                        <br />
                        직관적인 UI/UX로 누구나 쉽게 사용할 수 있으며, <br />
                        운동 루틴을 체계적으로 관리할 수 있습니다.
                      </p>
                      <div
                        className='flex flex-wrap gap-2 mb-6 justify-center md:justify-start'
                        style={{ paddingTop: 20 }}
                      >
                        <span className='px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm'>
                          React Native
                        </span>
                        <span className='px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm'>
                          Expo
                        </span>
                        <span className='px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm'>
                          TypeScript
                        </span>
                      </div>
                      <div
                        className='flex flex-wrap gap-4 justify-center md:justify-start'
                        style={{ paddingTop: 20 }}
                      >
                        <AppStoreButton url='https://apps.apple.com/us/app/%ED%97%AC%EC%8A%A4%EB%A1%9C%EA%B7%B8/id6755720337' />
                        <AndroidStoreButton url='https://play.google.com/store/apps/details?id=com.soulfitness.workoutlog' />
                      </div>
                    </div>
                    <div
                      className='flex flex-col gap-10 thin-scrollbar'
                      style={{ overflowX: "auto" }}
                    >
                      {/* 배너 이미지 */}
                      <div>
                        <Image
                          src='/img/banner.png'
                          alt='헬스로그 배너'
                          width={1200}
                          height={400}
                          className='rounded-2xl border border-gray-200 w-full object-cover'
                        />
                      </div>
                      {/* 앱 스크린샷들 */}
                      <div
                        className='flex gap-4 justify-center'
                        style={{ paddingBottom: 20 }}
                      >
                        <Image
                          src='/img/app.png'
                          alt='헬스로그 앱 스크린샷 1'
                          width={160}
                          height={160}
                          className='rounded-2xl border border-gray-200'
                        />
                        <Image
                          src='/img/app-2.png'
                          alt='헬스로그 앱 스크린샷 2'
                          width={160}
                          height={160}
                          className='rounded-2xl border border-gray-200'
                        />
                        <Image
                          src='/img/app-3.png'
                          alt='헬스로그 앱 스크린샷 2'
                          width={160}
                          height={160}
                          className='rounded-2xl border border-gray-200'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 데이로그 */}
              <div style={{ paddingBottom: 40 }}>
                <div className='flex flex-col gap-6 mb-6'>
                  <div className='flex flex-col lg:flex-row flex-wrap items-center lg:items-start gap-8 lg:gap-12'>
                    <div className='text-center md:text-left'>
                      <h3 className='text-3xl font-bold mb-3 text-gray-900'>
                        2. 데이로그
                      </h3>
                      <span className='text-lg text-gray-400'>
                        2025년 12월 출시
                      </span>
                      <p
                        className='text-lg text-gray-600 mb-4 leading-relaxed'
                        style={{ paddingTop: 10 }}
                      >
                        일상을 기록하고 추억을 남길 수 있는 다이어리 앱입니다.
                        <br />
                        간단하고 직관적인 인터페이스로 하루하루를 소중하게
                        기록하며,
                        <br />
                        나만의 이야기를 아름답게 담아낼 수 있습니다.
                      </p>
                      <div
                        className='flex flex-wrap gap-2 mb-6 justify-center md:justify-start'
                        style={{ paddingTop: 20 }}
                      >
                        <span className='px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm'>
                          React Native
                        </span>
                        <span className='px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm'>
                          Expo
                        </span>
                        <span className='px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm'>
                          TypeScript
                        </span>
                      </div>
                      <div
                        className='flex justify-center md:justify-start'
                        style={{ paddingTop: 20 }}
                      >
                        <AppStoreButton url='https://apps.apple.com/us/app/daylog-diary-daily-note/id6756697383' />
                      </div>
                    </div>
                    <div
                      className='flex flex-col gap-10 flex-1 thin-scrollbar'
                      style={{ overflowX: "auto" }}
                    >
                      {/* 배너 이미지 */}
                      <div style={{ maxWidth: "600px" }}>
                        <Image
                          src='/img/daylog/banner.png'
                          alt='데이로그 배너'
                          width={1200}
                          height={400}
                          className='rounded-2xl border border-gray-200 w-full object-cover'
                        />
                      </div>
                      {/* 앱 스크린샷들 */}
                      <div
                        className='flex gap-4 justify-center'
                        style={{ paddingBottom: 20 }}
                      >
                        <Image
                          src='/img/daylog/screenshot-ios1.png'
                          alt='데이로그 앱 스크린샷 1'
                          width={160}
                          height={160}
                          className='rounded-2xl border border-gray-200'
                        />
                        <Image
                          src='/img/daylog/screenshot-ios2.png'
                          alt='데이로그 앱 스크린샷 2'
                          width={160}
                          height={160}
                          className='rounded-2xl border border-gray-200'
                        />
                        <Image
                          src='/img/daylog/screenshot-ios3.png'
                          alt='데이로그 앱 스크린샷 3'
                          width={160}
                          height={160}
                          className='rounded-2xl border border-gray-200'
                        />
                        <Image
                          src='/img/daylog/screenshot-ios4.png'
                          alt='데이로그 앱 스크린샷 4'
                          width={160}
                          height={160}
                          className='rounded-2xl border border-gray-200'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id='experience' className='border-t border-gray-200'>
          <div className='container mx-auto px-6 max-w-4xl'>
            <div
              className='mb-16 text-center md:text-left'
              style={{ paddingBottom: "40px" }}
            >
              <span className='text-gray-400 font-bold text-lg mb-2 block'>
                03. Experience
              </span>
              <h2 className='text-4xl md:text-5xl font-extrabold tracking-tighter text-gray-900 inline-block relative'>
                경력
                <span className='absolute -bottom-2 left-0 w-full h-1 bg-gray-900 origin-left transform scale-x-100 transition-transform duration-300'></span>
              </h2>
            </div>

            <div className='space-y-12 text-center md:text-left'>
              <div>
                <div className='flex flex-col md:flex-row items-center md:items-baseline gap-2 md:gap-4 mb-3'>
                  <h3 className='text-2xl font-bold text-gray-900'>슈가힐</h3>
                  <span className='text-lg text-gray-400'>~2025년 3월까지</span>
                </div>

                <p className='text-lg text-gray-700 leading-relaxed'>
                  직방 자회사 슈가힐에서 프론트엔드 개발자로 웹 및 모바일 개발을
                  담당하며 사용자 중심의 서비스를 만들기 위해 노력했습니다.
                  <br />
                  부동산 관련 다양한 웹/앱 프로젝트에 참여하며 프론트엔드 개발
                  역량을 키웠습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className='border-t border-gray-200 py-12 mt-24'
          style={{ paddingTop: 24, textAlign: "center" }}
        >
          <div className='container mx-auto px-6 max-w-4xl'>
            <p className='text-gray-500'>© 2025 이하영. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
