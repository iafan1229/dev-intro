import Image from 'next/image';
import AppStoreButton from '@/components/AppStoreButton';
import AndroidStoreButton from '@/components/AndroidStoreButton';
import Scene3D from '@/components/Scene3D';

export default function Home() {
  return (
    <div className='min-h-screen bg-white relative'>
      {/* Glitter Background - Full Page */}
      <div className='fixed inset-0 z-0'>
        <Scene3D />
      </div>

      {/* Content */}
      <div
        className='relative z-10 pt-20'
        style={{ backgroundColor: '#EAF4FF' }}
      >
        {/* Hero Section */}
        <section
          className='min-h-screen flex items-center justify-center mx-auto px-5 py-16 md:px-10 md:py-20 lg:p-20'
          style={{ maxWidth: '1600px', background: '#fff', textAlign: 'left' }}
        >
          <div className='container mx-auto px-0 md:px-4 lg:px-6'>
            <div className='flex flex-col lg:flex-row items-center lg:items-start gap-6 md:gap-10 lg:gap-12'>
              {/* Logo Image */}
              <div className='flex-shrink-0 lg:ml-[50px]'>
                <Image
                  src='/img/logo-3.png'
                  alt='이하영 로고'
                  width={300}
                  height={300}
                  className='rounded-full border-4 border-gray-100 w-32 h-32 md:w-52 md:h-52 lg:w-[300px] lg:h-[300px]'
                  priority
                />
              </div>

              {/* Text Content */}
              <div className='w-full flex-1 text-center lg:text-left'>
                <span className='inline-block text-[10px] md:text-xs lg:text-sm font-bold tracking-[0.2em] lg:tracking-[0.25em] text-blue-600 mb-4 md:mb-5 lg:mb-6'>
                  CREATIVE · DEVELOPMENT · PARTNER
                </span>
                <h1 className='text-4xl md:text-6xl lg:text-8xl font-extrabold mb-6 md:mb-7 lg:mb-8 leading-[1.15] lg:leading-[1.05] tracking-tighter'>
                  <span className='block text-slate-900'>안녕하세요.</span>
                  <span className='block text-slate-400 mt-1 md:mt-2'>
                    웹,앱 전문 개발사
                  </span>
                  <span className='block mt-1 md:mt-2 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-blue-600'>
                    하이코드랩입니다.
                  </span>
                </h1>
                <p className='text-sm md:text-lg lg:text-2xl text-slate-600 mb-8 md:mb-10 lg:mb-12 leading-relaxed'>
                  Next.js와 React Native로 홈페이지와 모바일 앱을 개발합니다.
                  <br className='hidden md:block' />
                  개발 및 디자인을 할때에는 항상 유저 친화적인 기능과 UI/UX을
                  먼저 생각합니다.
                </p>

                {/* CTA */}
                <div className='flex flex-wrap gap-4 justify-center lg:justify-start mb-8 md:mb-12 lg:mb-16'>
                  <a
                    href='#projects'
                    className='group inline-flex items-center gap-2 text-slate-900 hover:text-white text-sm md:text-base p-[10px] rounded-full font-semibold hover:bg-blue-600 transition-all duration-300'
                  >
                    <span>프로젝트 보기</span>
                    <svg
                      className='w-4 h-4 transition-transform group-hover:translate-x-1'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2.5}
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Service Cards Strip (plani-style minimal) */}
            <div
              className='grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 mt-10 md:mt-10 lg:mt-[50px]'
              style={{ textAlign: 'center' }}
            >
              {[
                {
                  no: '01',
                  label: 'WEB',
                  title: '홈페이지 개발',
                  desc: 'Next.js · React',
                },
                {
                  no: '02',
                  label: 'APP',
                  title: '모바일 앱 개발',
                  desc: 'React Native · Expo',
                },
                {
                  no: '03',
                  label: 'UI/UX',
                  title: '디자인',
                  desc: 'User Friendly',
                },
                {
                  no: '04',
                  label: 'MAINTENANCE',
                  title: '유지보수',
                  desc: 'Long-term Partner',
                },
              ].map((item, idx) => (
                <div
                  key={item.label}
                  className={`group px-3 md:px-5 lg:px-10 py-4 md:py-6 lg:py-8 ${
                    idx !== 0 ? 'md:border-l border-slate-200/70' : ''
                  }`}
                >
                  <span className='block text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-200 group-hover:text-blue-600 mb-6 md:mb-8 lg:mb-10 transition-colors'>
                    {item.no}
                  </span>
                  <span className='block text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-blue-600 mb-2 md:mb-3 lg:mb-4'>
                    {item.label}
                  </span>
                  <h3 className='text-sm md:text-base lg:text-xl font-bold text-slate-900 mb-1 md:mb-2 lg:mb-3'>
                    {item.title}
                  </h3>
                  <p className='text-xs md:text-xs lg:text-sm text-slate-500 leading-relaxed'>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id='about' className='py-24 bg-white mt-20 mb-20'>
          <div className='container mx-auto px-6 max-w-6xl'>
            <div className='flex flex-col md:flex-row items-center gap-10 md:gap-20'>
              {/* Illustration */}
              <div className='flex-1 w-full max-w-md md:max-w-none'>
                <Image
                  src='/img/image.png'
                  alt='함께 만들어가는 웹과 앱'
                  width={600}
                  height={400}
                  className='w-full h-auto'
                />
              </div>

              {/* Text Content */}
              <div className='flex-1 text-center md:text-left'>
                <span className='inline-block text-xs font-bold tracking-[0.25em] text-blue-600 mb-4'>
                  ABOUT · VALUE
                </span>
                <h2 className='text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 mb-8 leading-[1.1]'>
                  함께 만들어가는
                  <br />
                  <span className='text-slate-400'>웹과 앱</span>
                </h2>
                <p className='text-lg text-slate-600 leading-relaxed'>
                  단순히 요구사항을 구현하는 것을 넘어,
                  <br />
                  클라이언트와 사용자의 시선에서 함께 고민합니다.
                  <br />
                  좋은 제품은 혼자가 아닌{' '}
                  <span className='font-semibold text-slate-900 border-b-2 border-blue-600'>
                    소통
                  </span>
                  에서 만들어진다고 믿습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id='skills'
          className='border-t border-slate-200 py-24 bg-white'
        >
          <div className='container mx-auto px-6 max-w-6xl'>
            <div className='mb-16 text-center md:text-left'>
              <span className='inline-block text-xs font-bold tracking-[0.25em] text-blue-600 mb-4'>
                01 · SKILLS
              </span>
              <h2 className='text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 leading-[1.1]'>
                기술 스택
              </h2>
              <p className='mt-4 text-lg text-slate-500 max-w-xl'>
                웹과 모바일, 서버 전반을 아우르는 풀스택 역량으로 제품을
                완성합니다.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-16'>
              {[
                {
                  no: 'STACK 01',
                  label: 'FRONTEND',
                  title: '프론트엔드',
                  desc: '사용자와 가장 가까운 레이어를 빠르고 매끄럽게 구현합니다.',
                  stack: ['Next.js', 'React', 'TypeScript', 'JavaScript'],
                },
                {
                  no: 'STACK 02',
                  label: 'BACKEND',
                  title: '백엔드',
                  desc: '안정적인 데이터 흐름과 확장 가능한 서버 구조를 설계합니다.',
                  stack: ['Node.js', 'Firebase', 'PostgreSQL', 'MongoDB'],
                },
                {
                  no: 'STACK 03',
                  label: 'MOBILE',
                  title: '모바일',
                  desc: 'iOS · Android를 하나의 코드베이스로 동시에 출시합니다.',
                  stack: ['React Native', 'Expo'],
                },
              ].map((cat) => (
                <div key={cat.no} className='group'>
                  <span className='block text-xs font-bold tracking-[0.25em] text-blue-600 mb-8'>
                    {cat.no}
                  </span>
                  <h3 className='text-3xl font-extrabold text-slate-900 mb-6 tracking-tight'>
                    {cat.title}
                  </h3>
                  <p className='text-sm text-slate-500 leading-relaxed mb-12'>
                    {cat.desc}
                  </p>
                  <ul className='space-y-4 pt-10 border-t border-slate-100'>
                    {cat.stack.map((tech) => (
                      <li
                        key={tech}
                        className='text-base text-slate-700 font-medium flex items-center gap-3'
                      >
                        <span className='w-1 h-1 rounded-full bg-blue-600' />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id='projects' className='border-t border-slate-200 py-24'>
          <div className='container mx-auto px-6 max-w-6xl'>
            <div className='mb-16 text-center md:text-left'>
              <span className='inline-block text-xs font-bold tracking-[0.25em] text-blue-600 mb-4'>
                02 · PROJECTS
              </span>
              <h2 className='text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 leading-[1.1]'>
                출시된 프로젝트
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

        {/* Experience Section
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
        </section> */}

        {/* Contact CTA Section */}
        <section id='contact' className='border-t border-slate-200 py-24'>
          <div className='container mx-auto px-6 max-w-6xl'>
            <div className='relative bg-slate-900 rounded-3xl p-10 md:p-16 overflow-hidden'>
              {/* Decorative gradient blob */}
              <div className='absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl' />
              <div className='absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl' />

              <div className='relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8'>
                <div>
                  <span className='inline-block text-xs font-bold tracking-[0.25em] text-blue-400 mb-4'>
                    CONTACT · LET&apos;S TALK
                  </span>
                  <h2 className='text-3xl md:text-5xl font-extrabold tracking-tighter text-white leading-[1.1] mb-4'>
                    어디서부터 시작할지
                    <br />
                    막막하시나요?
                  </h2>
                  <p className='text-base md:text-lg text-slate-300'>
                    아이디어 단계부터 출시까지, 함께 최적의 경로를 찾아드립니다.
                  </p>
                </div>
                <a
                  href='mailto:iafan103603@gmail.com'
                  className='group inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-5 rounded-full font-bold text-base md:text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 flex-shrink-0'
                >
                  전문가와 상담하기
                  <svg
                    className='w-5 h-5 transition-transform group-hover:translate-x-1'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2.5}
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className='border-t border-slate-200 py-10'>
          <div className='container mx-auto px-6 max-w-6xl'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
              <p className='text-sm text-slate-500'>
                © 2026 하이코드랩. All rights reserved.
              </p>
              <div className='flex gap-6'>
                {/* <a
                  href='https://github.com/iafan1229'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm text-slate-400 hover:text-slate-900 transition-colors'
                >
                  GitHub
                </a>
                <a
                  href='https://blog.naver.com/home124'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm text-slate-400 hover:text-slate-900 transition-colors'
                >
                  Blog
                </a>
                <a
                  href='https://www.linkedin.com/in/leehayoung1229'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm text-slate-400 hover:text-slate-900 transition-colors'
                >
                  LinkedIn
                </a> */}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
