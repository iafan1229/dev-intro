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
                <div className='rounded-3xl p-6 md:p-12 lg:p-20 bg-white hover:shadow-[0_1px_30px_rgba(15,23,42,0.06)] transition-all duration-300'>
                  <div className='flex flex-col'>
                    <div className='flex flex-col lg:flex-row flex-wrap items-stretch lg:items-start gap-12 lg:gap-20'>
                      <div className='w-full text-center md:text-left flex-shrink-0 lg:max-w-sm'>
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
                      <div className='w-full min-w-0 flex flex-col gap-6 lg:flex-1'>
                        {/* 배너 이미지 */}
                        <div className='w-full'>
                          <Image
                            src='/img/banner.png'
                            alt='헬스로그 배너'
                            width={1200}
                            height={400}
                            className='rounded-xl border border-slate-200 w-full object-cover'
                          />
                        </div>
                        {/* 앱 스크린샷들 */}
                        <div className='overflow-x-auto pb-2 thin-scrollbar'>
                          <div className='flex w-max min-w-full gap-4 justify-center'>
                            <Image
                              src='/img/app.png'
                              alt='헬스로그 앱 스크린샷 1'
                              width={160}
                              height={160}
                              className='flex-none rounded-2xl border border-slate-200 shadow-sm'
                            />
                            <Image
                              src='/img/app-2.png'
                              alt='헬스로그 앱 스크린샷 2'
                              width={160}
                              height={160}
                              className='flex-none rounded-2xl border border-slate-200 shadow-sm'
                            />
                            <Image
                              src='/img/app-3.png'
                              alt='헬스로그 앱 스크린샷 3'
                              width={160}
                              height={160}
                              className='flex-none rounded-2xl border border-slate-200 shadow-sm'
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 기술 상세 섹션 - 헬스로그 */}
                    <div className='mt-16 pt-12 border-t border-slate-200'>
                      <div className='mb-10'>
                        <span className='inline-block text-xs font-bold tracking-[0.2em] text-blue-600 mb-3'>
                          TECH DEEP DIVE
                        </span>
                        <h4 className='text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight'>
                          기술 스택 & 아키텍처
                        </h4>
                      </div>

                      {/* 1. 주요 기술 스택 */}
                      <div className='mb-12'>
                        <div className='flex items-center gap-3 mb-5'>
                          <span className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold'>
                            1
                          </span>
                          <h5 className='text-xl font-bold text-slate-900'>
                            주요 기술 스택
                          </h5>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                          <div className='bg-slate-50 rounded-xl p-4 border border-slate-200'>
                            <p className='text-xs font-bold tracking-wider text-blue-600 mb-1'>
                              FRAMEWORK
                            </p>
                            <p className='text-sm font-semibold text-slate-900'>
                              Expo (React Native)
                            </p>
                          </div>
                          <div className='bg-slate-50 rounded-xl p-4 border border-slate-200'>
                            <p className='text-xs font-bold tracking-wider text-blue-600 mb-1'>
                              BACKEND
                            </p>
                            <p className='text-sm font-semibold text-slate-900'>
                              Firebase (Auth, Firestore, Cloud Functions, Analytics)
                            </p>
                          </div>
                          <div className='bg-slate-50 rounded-xl p-4 border border-slate-200'>
                            <p className='text-xs font-bold tracking-wider text-blue-600 mb-1'>
                              STYLING
                            </p>
                            <p className='text-sm font-semibold text-slate-900'>
                              Styled Component
                            </p>
                          </div>
                          <div className='bg-slate-50 rounded-xl p-4 border border-slate-200'>
                            <p className='text-xs font-bold tracking-wider text-blue-600 mb-1'>
                              STATE MANAGEMENT
                            </p>
                            <p className='text-sm font-semibold text-slate-900'>
                              Context API
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 2. 프론트엔드 아키텍쳐 */}
                      <div className='mb-12'>
                        <div className='flex items-center gap-3 mb-5'>
                          <span className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold'>
                            2
                          </span>
                          <h5 className='text-xl font-bold text-slate-900'>
                            프론트엔드 아키텍쳐
                          </h5>
                        </div>
                        <div className='space-y-4'>
                          <div className='bg-white rounded-xl p-5 border border-slate-200'>
                            <div className='flex items-start gap-3'>
                              <span className='flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-blue-600' />
                              <div>
                                <p className='font-bold text-slate-900 mb-2'>
                                  아토믹 패턴 도입
                                </p>
                                <p className='text-sm text-slate-600 leading-relaxed'>
                                  거대 화면 파일 리팩토링(1000줄에 육박하는 운동 추가/수정 화면), UI 속에서 반복되는 운동 카드 / 운동 세트 입력 UI가 있었기 때문에 아토믹을 도입함.
                                </p>
                                <div className='mt-3 flex items-center gap-2 flex-wrap'>
                                  <span className='px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-mono font-semibold'>
                                    Atoms
                                  </span>
                                  <span className='text-slate-400'>→</span>
                                  <span className='px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-mono font-semibold'>
                                    Molecules
                                  </span>
                                  <span className='text-slate-400'>→</span>
                                  <span className='px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-mono font-semibold'>
                                    Organism
                                  </span>
                                </div>
                                <p className='text-xs text-slate-500 mt-2'>
                                  폴더로 UI 컴포넌트를 쪼갬
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className='bg-white rounded-xl p-5 border border-slate-200'>
                            <div className='flex items-start gap-3'>
                              <span className='flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-blue-600' />
                              <div>
                                <p className='font-bold text-slate-900 mb-2'>
                                  커스텀 훅 패턴 도입
                                </p>
                                <p className='text-sm text-slate-600 leading-relaxed mb-3'>
                                  화면(UI)과 비즈니스로직 분리
                                </p>
                                <div className='flex items-center gap-2 flex-wrap'>
                                  <code className='px-3 py-1 bg-slate-900 text-blue-300 rounded-md text-xs font-mono'>
                                    useWorkoutLogs
                                  </code>
                                  <code className='px-3 py-1 bg-slate-900 text-blue-300 rounded-md text-xs font-mono'>
                                    useWorkoutForm
                                  </code>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 3. 카카오 로그인 우회 */}
                      <div className='mb-12'>
                        <div className='flex items-center gap-3 mb-5'>
                          <span className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold'>
                            3
                          </span>
                          <h5 className='text-xl font-bold text-slate-900'>
                            카카오 로그인 우회
                          </h5>
                        </div>

                        <div className='bg-white rounded-xl p-5 border border-slate-200 mb-4'>
                          <p className='text-xs font-bold tracking-wider text-slate-500 mb-3'>
                            상세 설명
                          </p>
                          <p className='text-sm text-slate-700 leading-relaxed'>
                            클라이언트에서 <code className='px-1.5 py-0.5 bg-slate-100 text-slate-900 rounded text-xs font-mono'>@react-native-seoul/kakao-login</code>으로 카카오 액세스 토큰을 받은 뒤, <code className='px-1.5 py-0.5 bg-slate-100 text-slate-900 rounded text-xs font-mono'>kakaoLogin</code> Cloud Function (region <code className='px-1.5 py-0.5 bg-slate-100 text-slate-900 rounded text-xs font-mono'>asia-northeast3</code>)으로 전송 → 함수가 카카오 API로 토큰을 검증하고 Firebase 커스텀 토큰을 반환 → 클라이언트가 이 커스텀 토큰으로 Firebase에 로그인.
                          </p>
                        </div>

                        {/* Flow diagram */}
                        <div className='bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 mb-4'>
                          <p className='text-xs font-bold tracking-wider text-blue-300 mb-4'>
                            FLOW
                          </p>
                          <div className='flex flex-col md:flex-row items-stretch md:items-center gap-3'>
                            <div className='flex-1 bg-slate-700/50 rounded-lg p-3 border border-slate-600'>
                              <p className='text-xs text-slate-400 mb-1'>STEP 1</p>
                              <p className='text-sm font-semibold text-white'>카카오 SDK</p>
                            </div>
                            <span className='text-blue-400 text-center text-xl font-bold'>→</span>
                            <div className='flex-1 bg-slate-700/50 rounded-lg p-3 border border-slate-600'>
                              <p className='text-xs text-slate-400 mb-1'>STEP 2</p>
                              <p className='text-sm font-semibold text-white'>Firebase 서버<br />(Cloud Function)</p>
                              <p className='text-xs text-blue-300 mt-1'>토큰 검증</p>
                            </div>
                            <span className='text-blue-400 text-center text-xl font-bold'>→</span>
                            <div className='flex-1 bg-slate-700/50 rounded-lg p-3 border border-slate-600'>
                              <p className='text-xs text-slate-400 mb-1'>STEP 3</p>
                              <p className='text-sm font-semibold text-white'>Firebase 인증<br />Token 생성</p>
                            </div>
                            <span className='text-blue-400 text-center text-xl font-bold'>→</span>
                            <div className='flex-1 bg-blue-600 rounded-lg p-3 border border-blue-500'>
                              <p className='text-xs text-blue-200 mb-1'>STEP 4</p>
                              <p className='text-sm font-semibold text-white'>Firebase<br />로그인 성공</p>
                            </div>
                          </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                          <div className='bg-amber-50 rounded-xl p-5 border border-amber-200'>
                            <p className='text-xs font-bold tracking-wider text-amber-700 mb-2'>
                              우회 이유
                            </p>
                            <p className='text-sm text-slate-700 leading-relaxed'>
                              카카오 로그인은 Firebase에서 직접 지원하지 않아 우회. (구글/애플 로그인은 Firebase Auth 사용)
                            </p>
                          </div>
                          <div className='bg-blue-50 rounded-xl p-5 border border-blue-200'>
                            <p className='text-xs font-bold tracking-wider text-blue-700 mb-2'>
                              서버에서 검증하는 이유
                            </p>
                            <ul className='text-sm text-slate-700 leading-relaxed space-y-2'>
                              <li className='flex gap-2'>
                                <span className='font-bold text-blue-700'>(1)</span>
                                <span>클라이언트 보안상 문제 (토큰 탈취 시 그 사용자의 운동/식단 로그를 모두 CRUD 가능)</span>
                              </li>
                              <li className='flex gap-2'>
                                <span className='font-bold text-blue-700'>(2)</span>
                                <span>Firebase 로그인 성공시키려면 토큰이 필요한데 Firebase가 허용하는 커스텀토큰(JWT)는 Firebase SDK에만 있음</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* 4. Expo Dev Client */}
                      <div>
                        <div className='flex items-center gap-3 mb-5'>
                          <span className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold'>
                            4
                          </span>
                          <h5 className='text-xl font-bold text-slate-900'>
                            네이티브 모듈을 위해 Expo Dev Client 모드 사용
                          </h5>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                          <div className='bg-slate-50 rounded-xl p-5 border border-slate-200'>
                            <div className='flex items-center gap-2 mb-3'>
                              <span className='px-2 py-0.5 bg-slate-200 text-slate-700 rounded text-xs font-bold'>
                                Expo Go
                              </span>
                            </div>
                            <p className='text-sm text-slate-600 leading-relaxed'>
                              미리 정해진 모듈만 있는 <span className='font-semibold text-slate-900'>범용 프로젝트</span>
                            </p>
                          </div>
                          <div className='bg-blue-50 rounded-xl p-5 border-2 border-blue-300'>
                            <div className='flex items-center gap-2 mb-3'>
                              <span className='px-2 py-0.5 bg-blue-600 text-white rounded text-xs font-bold'>
                                Expo Dev Client ✓
                              </span>
                            </div>
                            <p className='text-sm text-slate-700 leading-relaxed'>
                              내가 추가한 네이티브 모듈을 자유롭게 사용 가능한 <span className='font-semibold text-slate-900'>커스텀 프로젝트</span>
                            </p>
                          </div>
                        </div>

                        <div className='bg-white rounded-xl p-5 border border-slate-200'>
                          <p className='text-xs font-bold tracking-wider text-blue-600 mb-3'>
                            도입 이유 — 네이티브 모듈의 필요성
                          </p>
                          <div className='space-y-2'>
                            <div className='flex items-start gap-3'>
                              <span className='flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400' />
                              <p className='text-sm text-slate-700'>
                                <code className='px-1.5 py-0.5 bg-slate-100 text-slate-900 rounded text-xs font-mono'>react-native-google-mobile-ads</code>
                                <span className='ml-2 text-slate-500'>구글 애드몹 광고</span>
                              </p>
                            </div>
                            <div className='flex items-start gap-3'>
                              <span className='flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400' />
                              <p className='text-sm text-slate-700'>
                                <code className='px-1.5 py-0.5 bg-slate-100 text-slate-900 rounded text-xs font-mono'>react-native-iap</code>
                                <span className='ml-2 text-slate-500'>결제</span>
                              </p>
                            </div>
                            <div className='flex items-start gap-3'>
                              <span className='flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400' />
                              <p className='text-sm text-slate-700'>
                                <code className='px-1.5 py-0.5 bg-slate-100 text-slate-900 rounded text-xs font-mono'>@react-native-seoul/kakao-login</code>
                                <span className='ml-2 text-slate-500'>카카오 로그인</span>
                              </p>
                            </div>
                          </div>
                          <p className='text-sm text-slate-600 leading-relaxed mt-4 pt-4 border-t border-slate-100'>
                            등 네이티브 모듈이 포함되어 <span className='font-semibold text-slate-900'>커스텀 dev 빌드가 필요</span>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 데이로그 */}
                <div className='bg-white rounded-3xl p-6 md:p-12 lg:p-20 hover:shadow-[0_1px_30px_rgba(15,23,42,0.06)] transition-all duration-300'>
                  <div className='flex flex-col'>
                    <div className='flex flex-col lg:flex-row flex-wrap items-stretch lg:items-start gap-12 lg:gap-20'>
                      <div className='w-full text-center md:text-left flex-shrink-0 lg:max-w-sm'>
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
                      <div className='w-full min-w-0 flex flex-col gap-6 lg:flex-1'>
                        {/* 배너 이미지 */}
                        <div className='w-full'>
                          <Image
                            src='/img/daylog/banner.png'
                            alt='데이로그 배너'
                            width={1200}
                            height={400}
                            className='rounded-xl border border-slate-200 w-full object-cover'
                          />
                        </div>
                        {/* 앱 스크린샷들 */}
                        <div className='overflow-x-auto pb-2 thin-scrollbar'>
                          <div className='flex w-max min-w-full gap-4 justify-center'>
                            <Image
                              src='/img/daylog/screenshot-ios1.png'
                              alt='데이로그 앱 스크린샷 1'
                              width={160}
                              height={160}
                              className='flex-none rounded-2xl border border-slate-200 shadow-sm'
                            />
                            <Image
                              src='/img/daylog/screenshot-ios2.png'
                              alt='데이로그 앱 스크린샷 2'
                              width={160}
                              height={160}
                              className='flex-none rounded-2xl border border-slate-200 shadow-sm'
                            />
                            <Image
                              src='/img/daylog/screenshot-ios3.png'
                              alt='데이로그 앱 스크린샷 3'
                              width={160}
                              height={160}
                              className='flex-none rounded-2xl border border-slate-200 shadow-sm'
                            />
                            <Image
                              src='/img/daylog/screenshot-ios4.png'
                              alt='데이로그 앱 스크린샷 4'
                              width={160}
                              height={160}
                              className='flex-none rounded-2xl border border-slate-200 shadow-sm'
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 기술 상세 섹션 - 데이로그 */}
                    <div className='mt-16 pt-12 border-t border-slate-200'>
                      <div className='mb-10'>
                        <span className='inline-block text-xs font-bold tracking-[0.2em] text-blue-600 mb-3'>
                          TECH DEEP DIVE
                        </span>
                        <h4 className='text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight'>
                          기술 스택 & 아키텍처
                        </h4>
                      </div>

                      {/* 1. 주요 기술 스택 */}
                      <div className='mb-12'>
                        <div className='flex items-center gap-3 mb-5'>
                          <span className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold'>
                            1
                          </span>
                          <h5 className='text-xl font-bold text-slate-900'>
                            주요 기술 스택
                          </h5>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                          <div className='bg-slate-50 rounded-xl p-4 border border-slate-200'>
                            <p className='text-xs font-bold tracking-wider text-blue-600 mb-1'>
                              FRAMEWORK
                            </p>
                            <p className='text-sm font-semibold text-slate-900'>
                              Expo (React Native)
                            </p>
                          </div>
                          <div className='bg-slate-50 rounded-xl p-4 border border-slate-200'>
                            <p className='text-xs font-bold tracking-wider text-blue-600 mb-1'>
                              STYLING
                            </p>
                            <p className='text-sm font-semibold text-slate-900'>
                              styled-components
                            </p>
                          </div>
                          <div className='bg-slate-50 rounded-xl p-4 border border-slate-200'>
                            <p className='text-xs font-bold tracking-wider text-blue-600 mb-1'>
                              NAVIGATION
                            </p>
                            <p className='text-sm font-semibold text-slate-900'>
                              Expo Router
                            </p>
                          </div>
                          <div className='bg-slate-50 rounded-xl p-4 border border-slate-200'>
                            <p className='text-xs font-bold tracking-wider text-blue-600 mb-1'>
                              DATABASE
                            </p>
                            <p className='text-sm font-semibold text-slate-900'>
                              expo-sqlite (SQLite)
                            </p>
                          </div>
                          <div className='bg-slate-50 rounded-xl p-4 border border-slate-200 sm:col-span-2'>
                            <p className='text-xs font-bold tracking-wider text-blue-600 mb-1'>
                              LIBRARY
                            </p>
                            <p className='text-sm font-semibold text-slate-900'>
                              Google Drive API <span className='text-slate-500 font-normal'>(백업)</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* 2. 아키텍쳐 */}
                      <div className='mb-12'>
                        <div className='flex items-center gap-3 mb-5'>
                          <span className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold'>
                            2
                          </span>
                          <h5 className='text-xl font-bold text-slate-900'>
                            아키텍쳐
                          </h5>
                        </div>
                        <div className='space-y-4'>
                          {/* Container/Presenter 패턴 */}
                          <div className='bg-white rounded-xl p-5 border border-slate-200'>
                            <div className='flex items-start gap-3'>
                              <span className='flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-blue-600' />
                              <div className='w-full'>
                                <p className='font-bold text-slate-900 mb-3'>
                                  Container / Presenter 패턴
                                </p>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                                  <div className='bg-blue-50 rounded-lg p-4 border border-blue-200'>
                                    <p className='text-xs font-bold tracking-wider text-blue-700 mb-1'>
                                      CONTAINER
                                    </p>
                                    <p className='text-sm text-slate-700'>
                                      로직 및 조합 담당
                                    </p>
                                  </div>
                                  <div className='bg-slate-50 rounded-lg p-4 border border-slate-200'>
                                    <p className='text-xs font-bold tracking-wider text-slate-700 mb-1'>
                                      PRESENTER
                                    </p>
                                    <p className='text-sm text-slate-700'>
                                      UI 및 Props 전달 담당
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Custom Hook */}
                          <div className='bg-white rounded-xl p-5 border border-slate-200'>
                            <div className='flex items-start gap-3'>
                              <span className='flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-blue-600' />
                              <div>
                                <p className='font-bold text-slate-900 mb-2'>
                                  Custom Hook
                                </p>
                                <p className='text-sm text-slate-600 leading-relaxed'>
                                  복잡한 로직과 상태 관리 분리
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Service Layer */}
                          <div className='bg-white rounded-xl p-5 border border-slate-200'>
                            <div className='flex items-start gap-3'>
                              <span className='flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-blue-600' />
                              <div>
                                <p className='font-bold text-slate-900 mb-2'>
                                  Service Layer
                                </p>
                                <p className='text-sm text-slate-600 leading-relaxed mb-3'>
                                  비즈니스 로직 및 데이터 변환을 담당하는 순수 함수
                                </p>
                                <div className='flex flex-wrap gap-2'>
                                  <span className='px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium'>
                                    일기 데이터 변환
                                  </span>
                                  <span className='px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium'>
                                    구글 드라이브 백업
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 3. 스타일링 */}
                      <div>
                        <div className='flex items-center gap-3 mb-5'>
                          <span className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold'>
                            3
                          </span>
                          <h5 className='text-xl font-bold text-slate-900'>
                            스타일링
                          </h5>
                        </div>
                        <div className='bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-5 border border-slate-200'>
                          <p className='text-sm text-slate-700 leading-relaxed'>
                            <code className='px-1.5 py-0.5 bg-white text-slate-900 rounded text-xs font-mono border border-slate-200'>
                              styled-components
                            </code>
                            {' '}사용하여{' '}
                            <span className='font-semibold text-slate-900'>
                              테마 기반 스타일링
                            </span>
                            을 정의함.
                          </p>
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
