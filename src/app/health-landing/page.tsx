"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./health-landing.module.css";

export default function HealthLandingPage() {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [navMenuActive, setNavMenuActive] = useState(false);
  const featureCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const statItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setHeaderScrolled(currentScroll > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const headerHeight = 72;
        const offsetTop =
          (targetElement as HTMLElement).getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
      setNavMenuActive(false);
    }
  };

  // IntersectionObserver for feature cards
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.featureCardVisible);
        }
      });
    }, observerOptions);

    const cards = featureCardsRef.current;
    cards.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cards.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  // IntersectionObserver for steps
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.stepVisible);
        }
      });
    }, observerOptions);

    const steps = stepsRef.current;
    steps.forEach((step) => {
      if (step) {
        observer.observe(step);
      }
    });

    return () => {
      steps.forEach((step) => {
        if (step) {
          observer.unobserve(step);
        }
      });
    };
  }, []);

  // IntersectionObserver for stats with counter animation
  useEffect(() => {
    const animateCounter = (element: HTMLElement, target: number) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          clearInterval(timer);
          current = target;
        }

        if (target >= 1000) {
          element.textContent = Math.floor(current / 1000) + "K+";
        } else if (target === 4.8) {
          element.textContent = current.toFixed(1);
        } else if (target === 100) {
          element.textContent = Math.floor(current) + "%";
        } else {
          element.textContent = Math.floor(current) + "+";
        }
      }, 30);
    };

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll(
              `.${styles.statNumber}`
            );
            const values = [300, 10000, 4.8, 100];

            statNumbers.forEach((stat, index) => {
              animateCounter(stat as HTMLElement, values[index]);
            });

            statItemsRef.current.forEach((item) => {
              if (item) {
                item.classList.add(styles.statItemVisible);
              }
            });

            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.querySelector(`.${styles.statsGrid}`);
    if (statsSection) {
      statsObserver.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        statsObserver.unobserve(statsSection);
      }
    };
  }, []);

  return (
    <div>
      {/* Header */}
      <header
        className={`${styles.header} ${
          headerScrolled ? styles.headerScrolled : ""
        }`}
      >
        <nav className={`${styles.nav} ${styles.container}`}>
          <Link href='#' className={styles.logo}>
            <Image
              src='/img/healthlog/logo.png'
              alt='헬스로그'
              width={32}
              height={32}
              className={styles.logoImg}
            />
            <span className={styles.logoText}>헬스로그</span>
          </Link>
          <ul
            className={`${styles.navMenu} ${
              navMenuActive ? styles.navMenuActive : ""
            }`}
          >
            <li>
              <Link href='#features' onClick={handleAnchorClick}>
                기능
              </Link>
            </li>
            <li>
              <Link href='#how-it-works' onClick={handleAnchorClick}>
                사용법
              </Link>
            </li>
            <li>
              <Link href='#download' onClick={handleAnchorClick}>
                다운로드
              </Link>
            </li>
          </ul>
          <button
            className={styles.navToggle}
            aria-label='메뉴 열기'
            onClick={() => setNavMenuActive(!navMenuActive)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              운동 기록의
              <br />
              <span className={styles.highlight}>새로운 시작</span>
            </h1>
            <p className={styles.heroDescription}>
              헬스로그와 함께 체계적인 운동 습관을 만들어보세요.
              <br />
              간편한 기록, 스마트한 분석, 나만의 루틴 관리까지.
            </p>
            <div className={styles.heroButtons}>
              <Link
                href='#download'
                className={`${styles.btn} ${styles.btnPrimary}`}
                onClick={handleAnchorClick}
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z' />
                </svg>
                App Store
              </Link>
              <Link
                href='#download'
                className={`${styles.btn} ${styles.btnSecondary}`}
                onClick={handleAnchorClick}
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z' />
                </svg>
                Google Play
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.phoneMockup}>
              <Image
                src='/img/healthlog/ios-1-en.png'
                alt='헬스로그 앱 스크린샷 1'
                width={280}
                height={580}
                className={styles.appScreenshot}
                priority
              />
            </div>
            <div className={styles.phoneMockup}>
              <Image
                src='/img/healthlog/ios-2-en.png'
                alt='헬스로그 앱 스크린샷 2'
                width={280}
                height={580}
                className={styles.appScreenshot}
                priority
              />
            </div>
          </div>
        </div>
        <div className={styles.heroBg}></div>
      </section>

      {/* Features Section */}
      <section id='features' className={styles.features}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>왜 헬스로그인가요?</h2>
            <p className={styles.sectionSubtitle}>
              운동 기록에 필요한 모든 기능을 담았습니다
            </p>
          </div>
          <div className={styles.featuresGrid}>
            <div
              ref={(el) => {
                featureCardsRef.current[0] = el;
              }}
              className={styles.featureCard}
            >
              <div className={styles.featureIcon}>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' />
                  <polyline points='14 2 14 8 20 8' />
                  <line x1='16' y1='13' x2='8' y2='13' />
                  <line x1='16' y1='17' x2='8' y2='17' />
                  <polyline points='10 9 9 9 8 9' />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>간편한 운동 기록</h3>
              <p className={styles.featureDescription}>
                세트, 횟수, 무게를 빠르게 기록하세요. 직관적인 UI로 운동 중에도
                쉽게 입력할 수 있습니다.
              </p>
            </div>
            <div
              ref={(el) => {
                featureCardsRef.current[1] = el;
              }}
              className={styles.featureCard}
            >
              <div className={styles.featureIcon}>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <rect x='3' y='4' width='18' height='18' rx='2' ry='2' />
                  <line x1='16' y1='2' x2='16' y2='6' />
                  <line x1='8' y1='2' x2='8' y2='6' />
                  <line x1='3' y1='10' x2='21' y2='10' />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>캘린더로 한눈에</h3>
              <p className={styles.featureDescription}>
                월별 운동 기록을 캘린더에서 확인하세요. 꾸준히 운동한 날들이
                한눈에 들어옵니다.
              </p>
            </div>
            <div
              ref={(el) => {
                featureCardsRef.current[2] = el;
              }}
              className={styles.featureCard}
            >
              <div className={styles.featureIcon}>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <polyline points='22 12 18 12 15 21 9 3 6 12 2 12' />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>성장 분석</h3>
              <p className={styles.featureDescription}>
                차트로 운동량 변화를 확인하세요. 무게 증가, 볼륨 변화 등 성장
                과정을 시각화합니다.
              </p>
            </div>
            <div
              ref={(el) => {
                featureCardsRef.current[3] = el;
              }}
              className={styles.featureCard}
            >
              <div className={styles.featureIcon}>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path d='M12 2L2 7l10 5 10-5-10-5z' />
                  <path d='M2 17l10 5 10-5' />
                  <path d='M2 12l10 5 10-5' />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>루틴 관리</h3>
              <p className={styles.featureDescription}>
                나만의 운동 루틴을 만들고 저장하세요. 매번 같은 운동을 빠르게
                시작할 수 있습니다.
              </p>
            </div>
            <div
              ref={(el) => {
                featureCardsRef.current[4] = el;
              }}
              className={styles.featureCard}
            >
              <div className={styles.featureIcon}>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <circle cx='12' cy='12' r='10' />
                  <polyline points='12 6 12 12 16 14' />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>휴식 타이머</h3>
              <p className={styles.featureDescription}>
                세트 간 휴식 시간을 타이머로 관리하세요. 알림으로 다음 세트
                시작을 알려드립니다.
              </p>
            </div>
            <div
              ref={(el) => {
                featureCardsRef.current[5] = el;
              }}
              className={styles.featureCard}
            >
              <div className={styles.featureIcon}>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
                  <polyline points='17 8 12 3 7 8' />
                  <line x1='12' y1='3' x2='12' y2='15' />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>클라우드 동기화</h3>
              <p className={styles.featureDescription}>
                데이터는 안전하게 클라우드에 저장됩니다. 기기를 바꿔도 기록이
                유지됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id='how-it-works' className={styles.howItWorks}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>이렇게 사용하세요</h2>
            <p className={styles.sectionSubtitle}>
              3단계로 시작하는 체계적인 운동 관리
            </p>
          </div>
          <div className={styles.steps}>
            <div
              ref={(el) => {
                stepsRef.current[0] = el;
              }}
              className={styles.step}
            >
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>운동 선택</h3>
                <p className={styles.stepDescription}>
                  300개 이상의 운동 목록에서 오늘 할 운동을 선택하세요. 부위별,
                  장비별로 쉽게 찾을 수 있습니다.
                </p>
              </div>
            </div>
            <div
              ref={(el) => {
                stepsRef.current[1] = el;
              }}
              className={styles.step}
            >
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>세트 기록</h3>
                <p className={styles.stepDescription}>
                  무게와 횟수를 입력하고 세트를 추가하세요. 이전 기록을 참고해
                  목표를 세울 수 있습니다.
                </p>
              </div>
            </div>
            <div
              ref={(el) => {
                stepsRef.current[2] = el;
              }}
              className={styles.step}
            >
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>진행 확인</h3>
                <p className={styles.stepDescription}>
                  차트와 통계로 나의 성장을 확인하세요. 목표 달성의 즐거움을
                  느껴보세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div
              ref={(el) => {
                statItemsRef.current[0] = el;
              }}
              className={styles.statItem}
            >
              <div className={styles.statNumber}>300+</div>
              <div className={styles.statLabel}>운동 종류</div>
            </div>
            <div
              ref={(el) => {
                statItemsRef.current[1] = el;
              }}
              className={styles.statItem}
            >
              <div className={styles.statNumber}>10K+</div>
              <div className={styles.statLabel}>다운로드</div>
            </div>
            <div
              ref={(el) => {
                statItemsRef.current[2] = el;
              }}
              className={styles.statItem}
            >
              <div className={styles.statNumber}>4.8</div>
              <div className={styles.statLabel}>평점</div>
            </div>
            <div
              ref={(el) => {
                statItemsRef.current[3] = el;
              }}
              className={styles.statItem}
            >
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>무료</div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id='download' className={styles.download}>
        <div className={styles.container}>
          <div className={styles.downloadContent}>
            <h2 className={styles.downloadTitle}>지금 바로 시작하세요</h2>
            <p className={styles.downloadDescription}>
              헬스로그와 함께 더 나은 운동 습관을 만들어보세요.
              <br />
              무료로 다운로드하고, 오늘의 운동을 기록해보세요.
            </p>
            <div className={styles.downloadButtons}>
              <a
                href='https://apps.apple.com/us/app/%ED%97%AC%EC%8A%A4%EB%A1%9C%EA%B7%B8/id6755720337'
                className={styles.storeButton}
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  width='28'
                  height='28'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z' />
                </svg>
                <div className={styles.storeText}>
                  <span className={styles.storeLabel}>Download on the</span>
                  <span className={styles.storeName}>App Store</span>
                </div>
              </a>
              <a
                href='https://play.google.com/store/apps/details?id=com.soulfitness.workoutlog'
                className={styles.storeButton}
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  width='28'
                  height='28'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path d='M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z' />
                </svg>
                <div className={styles.storeText}>
                  <span className={styles.storeLabel}>GET IT ON</span>
                  <span className={styles.storeName}>Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <Image
                src='/img/healthlog/logo.png'
                alt='헬스로그'
                width={32}
                height={32}
                className={styles.logoImg}
              />
              <span className={styles.logoText}>헬스로그</span>
            </div>
            <div className={styles.footerLinks}>
              <a href='#'>이용약관</a>
              <a href='#'>개인정보처리방침</a>
              <a href='#'>문의하기</a>
            </div>
            <p className={styles.footerCopyright}>
              © 2024 헬스로그. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
