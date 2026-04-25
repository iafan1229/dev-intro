import Image from "next/image";
import AppStoreButton from "@/components/AppStoreButton";
import AndroidStoreButton from "@/components/AndroidStoreButton";
import Scene3D from "@/components/Scene3D";

export default function Home() {
  return (
    <div className='w-full min-h-screen bg-white relative'>
      {/* Glitter Background - Full Page */}
      <div className='fixed inset-0 z-0'>
        <Scene3D />
      </div>
      <div
          className='relative z-10 pt-20'
          style={{ backgroundColor: '#EAF4FF' }}
        >
        {/* Content */}
        <div>
        {/* Projects Section */}
          <section id='projects' className='border-t border-slate-200 py-24'>
            <div className='container mx-auto px-6 max-w-6xl'>
              <div className='mb-16 text-center md:text-left'>
                <span className='inline-block text-xs font-bold tracking-[0.25em] text-blue-600 mb-4'>
                  PORTFOLIO
                </span>
                <h2 className='text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 leading-[1.1]'>
                  포트폴리오
                </h2>
                <p className='mt-4 text-lg text-slate-500 max-w-xl'>
                  아이디어에서 출시까지, 직접 설계하고 개발한 모바일 앱입니다.
                </p>
              </div>

              <div className='space-y-12'>
                {/* 헬스로그 */}
                <div className='rounded-3xl p-12 md:p-20 bg-white hover:shadow-[0_1px_30px_rgba(15,23,42,0.06)] transition-all duration-300'>
                  <div className='flex flex-col'>
                    <div className='flex flex-col lg:flex-row flex-wrap items-center lg:items-start gap-12 lg:gap-20'>
                      <div className='text-center md:text-left flex-shrink-0 lg:max-w-sm'>
                        <span className='inline-block text-xs font-bold tracking-[0.2em] text-blue-600 mb-6'>
                          PROJECT 01 · FITNESS
                        </span>
                        <h3 className='text-4xl font-extrabold text-slate-900 tracking-tight mb-6'>
                          헬스로그
                        </h3>
                        <span className='inline-block text-sm font-medium text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full'>
                          2025년 12월 출시
                        </span>
                        <p className='text-base text-slate-600 leading-relaxed mt-10'>
                          운동 기록을 쉽고 간편하게 관리할 수 있는 피트니스 앱.
                          <br />
                          직관적인 UI/UX로 누구나 쉽게 사용할 수 있으며, <br />
                          운동 루틴을 체계적으로 관리할 수 있습니다.
                          <br />
                          <span className='font-semibold text-slate-900'>
                            출시 4개월 만에 다운로드수 200+ 돌파
                          </span>
                        </p>
                        <div className='mt-12 flex flex-wrap gap-2 justify-center md:justify-start'>
                          <span className='px-3 py-1 bg-slate-900 text-white rounded-full text-xs font-medium'>
                            React Native
                          </span>
                          <span className='px-3 py-1 bg-white text-slate-700 rounded-full text-xs font-medium border border-slate-200'>
                            Expo
                          </span>
                          <span className='px-3 py-1 bg-white text-slate-700 rounded-full text-xs font-medium border border-slate-200'>
                            TypeScript
                          </span>
                          <span className='px-3 py-1 bg-white text-slate-700 rounded-full text-xs font-medium border border-slate-200'>
                            Firebase
                          </span>
                        </div>
                        <div className='mt-10 flex flex-wrap gap-4 justify-center md:justify-start'>
                          <AppStoreButton url='https://apps.apple.com/us/app/%ED%97%AC%EC%8A%A4%EB%A1%9C%EA%B7%B8/id6755720337' />
                          <AndroidStoreButton url='https://play.google.com/store/apps/details?id=com.soulfitness.workoutlog' />
                        </div>
                      </div>
                      <div
                        className='flex flex-col gap-6 flex-1 thin-scrollbar'
                        style={{ overflowX: 'auto' }}
                      >
                        {/* 배너 이미지 */}
                        <div>
                          <Image
                            src='/img/banner.png'
                            alt='헬스로그 배너'
                            width={1200}
                            height={400}
                            className='rounded-xl border border-slate-200 w-full object-cover'
                          />
                        </div>
                        {/* 앱 스크린샷들 */}
                        <div className='flex gap-4 justify-center'>
                          <Image
                            src='/img/app.png'
                            alt='헬스로그 앱 스크린샷 1'
                            width={160}
                            height={160}
                            className='rounded-2xl border border-slate-200 shadow-sm'
                          />
                          <Image
                            src='/img/app-2.png'
                            alt='헬스로그 앱 스크린샷 2'
                            width={160}
                            height={160}
                            className='rounded-2xl border border-slate-200 shadow-sm'
                          />
                          <Image
                            src='/img/app-3.png'
                            alt='헬스로그 앱 스크린샷 3'
                            width={160}
                            height={160}
                            className='rounded-2xl border border-slate-200 shadow-sm'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 데이로그 */}
                <div className='bg-white rounded-3xl p-12 md:p-20 hover:shadow-[0_1px_30px_rgba(15,23,42,0.06)] transition-all duration-300'>
                  <div className='flex flex-col'>
                    <div className='flex flex-col lg:flex-row flex-wrap items-center lg:items-start gap-12 lg:gap-20'>
                      <div className='text-center md:text-left flex-shrink-0 lg:max-w-sm'>
                        <span className='inline-block text-xs font-bold tracking-[0.2em] text-blue-600 mb-6'>
                          PROJECT 02 · DIARY
                        </span>
                        <h3 className='text-4xl font-extrabold text-slate-900 tracking-tight mb-6'>
                          데이로그
                        </h3>
                        <span className='inline-block text-sm font-medium text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full'>
                          2025년 12월 출시
                        </span>
                        <p className='text-base text-slate-600 leading-relaxed mt-10'>
                          일상을 기록하고 추억을 남길 수 있는 다이어리 앱입니다.
                          <br />
                          간단하고 직관적인 인터페이스로 하루하루를 소중하게
                          기록하며,
                          <br />
                          나만의 이야기를 아름답게 담아낼 수 있습니다.
                          <br />
                          <span className='font-semibold text-slate-900'>
                            중국 앱 커뮤니티 Mergeek에 홍보기사로 소개
                          </span>
                        </p>
                        <a
                          href='https://mergeek.com/project_stories/eg5j9nPGxwmKwdDE'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='inline-block mt-4 font-semibold text-blue-600 underline underline-offset-4 transition-colors hover:text-blue-800'
                        >
                          홍보기사 보러가기 →
                        </a>
                        <div className='mt-12 flex flex-wrap gap-2 justify-center md:justify-start'>
                          <span className='px-3 py-1 bg-slate-900 text-white rounded-full text-xs font-medium'>
                            React Native
                          </span>
                          <span className='px-3 py-1 bg-white text-slate-700 rounded-full text-xs font-medium border border-slate-200'>
                            Expo
                          </span>
                          <span className='px-3 py-1 bg-white text-slate-700 rounded-full text-xs font-medium border border-slate-200'>
                            TypeScript
                          </span>
                        </div>
                        <div className='mt-10 flex flex-wrap gap-4 justify-center md:justify-start'>
                          <AppStoreButton url='https://apps.apple.com/us/app/daylog-diary-daily-note/id6756697383' />
                          <AndroidStoreButton url='https://play.google.com/store/apps/details?id=com.iafan1229.daylog' />
                        </div>
                      </div>
                      <div
                        className='flex flex-col gap-6 flex-1 thin-scrollbar'
                        style={{ overflowX: 'auto' }}
                      >
                        {/* 배너 이미지 */}
                        <div>
                          <Image
                            src='/img/daylog/banner.png'
                            alt='데이로그 배너'
                            width={1200}
                            height={400}
                            className='rounded-xl border border-slate-200 w-full object-cover'
                          />
                        </div>
                        {/* 앱 스크린샷들 */}
                        <div className='flex gap-4 justify-center'>
                          <Image
                            src='/img/daylog/screenshot-ios1.png'
                            alt='데이로그 앱 스크린샷 1'
                            width={160}
                            height={160}
                            className='rounded-2xl border border-slate-200 shadow-sm'
                          />
                          <Image
                            src='/img/daylog/screenshot-ios2.png'
                            alt='데이로그 앱 스크린샷 2'
                            width={160}
                            height={160}
                            className='rounded-2xl border border-slate-200 shadow-sm'
                          />
                          <Image
                            src='/img/daylog/screenshot-ios3.png'
                            alt='데이로그 앱 스크린샷 3'
                            width={160}
                            height={160}
                            className='rounded-2xl border border-slate-200 shadow-sm'
                          />
                          <Image
                            src='/img/daylog/screenshot-ios4.png'
                            alt='데이로그 앱 스크린샷 4'
                            width={160}
                            height={160}
                            className='rounded-2xl border border-slate-200 shadow-sm'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
