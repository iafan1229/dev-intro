"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./health-landing.module.css";

export default function HealthLandingPage() {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [navMenuActive, setNavMenuActive] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const featureCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const statItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      pulse: number;
    }[] = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.pulse += 0.02;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        const pulseFactor = Math.sin(particle.pulse) * 0.3 + 1;
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * pulseFactor * 2
        );
        gradient.addColorStop(0, `rgba(255, 61, 0, ${particle.opacity})`);
        gradient.addColorStop(
          0.5,
          `rgba(255, 107, 53, ${particle.opacity * 0.5})`
        );
        gradient.addColorStop(1, "rgba(255, 61, 0, 0)");

        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.size * pulseFactor * 2,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Mouse parallax effect
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({
      x: (e.clientX - window.innerWidth / 2) / 50,
      y: (e.clientY - window.innerHeight / 2) / 50,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setHeaderScrolled(currentScroll > 50);
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
        const headerHeight = 80;
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
      const increment = target / 60;
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
      }, 25);
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
    <div className={styles.pageWrapper}>
      {/* Animated Background Canvas */}
      <canvas ref={canvasRef} className={styles.particleCanvas} />

      {/* Header */}
      <header
        className={`${styles.header} ${
          headerScrolled ? styles.headerScrolled : ""
        }`}
      >
        <nav className={`${styles.nav} ${styles.container}`}>
          <Link href='#' className={styles.logo}>
            <div className={styles.logoGlow}>
              <Image
                src='/img/healthlog/logo.png'
                alt='HealthLog'
                width={40}
                height={40}
                className={styles.logoImg}
              />
            </div>
            <span className={styles.logoText}>HEALTHLOG</span>
          </Link>
          <ul
            className={`${styles.navMenu} ${
              navMenuActive ? styles.navMenuActive : ""
            }`}
          >
            <li>
              <Link href='#features' onClick={handleAnchorClick}>
                Features
              </Link>
            </li>
            <li>
              <Link href='#how-it-works' onClick={handleAnchorClick}>
                How It Works
              </Link>
            </li>
            <li>
              <Link href='#download' onClick={handleAnchorClick}>
                Download
              </Link>
            </li>
          </ul>
          <Link
            href='#download'
            className={styles.headerCta}
            onClick={handleAnchorClick}
          >
            Get Started
          </Link>
          <button
            className={`${styles.navToggle} ${
              navMenuActive ? styles.navToggleActive : ""
            }`}
            aria-label='Open menu'
            onClick={() => setNavMenuActive(!navMenuActive)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className={styles.hero}>
        {/* Animated geometric shapes */}
        <div className={styles.heroShapes}>
          <div
            className={styles.shape1}
            style={{
              transform: `translate(${mousePosition.x * 2}px, ${
                mousePosition.y * 2
              }px)`,
            }}
          />
          <div
            className={styles.shape2}
            style={{
              transform: `translate(${mousePosition.x * -1.5}px, ${
                mousePosition.y * -1.5
              }px)`,
            }}
          />
          <div
            className={styles.shape3}
            style={{
              transform: `translate(${mousePosition.x * 1}px, ${
                mousePosition.y * -1
              }px)`,
            }}
          />
          <div className={styles.diagonalLine1} />
          <div className={styles.diagonalLine2} />
        </div>

        <div className={`${styles.container} ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <div className={styles.heroTagline}>
              <span className={styles.taglinePulse} />
              FITNESS TRACKER
            </div>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleLine}>A New Start</span>
              <span className={styles.titleLine}>
                <span className={styles.highlight}>to Fitness</span>
              </span>
            </h1>
            <p className={styles.heroDescription}>
              Build systematic workout habits with HealthLog.
              <br />
              Easy tracking, smart analysis, and personalized routine
              management.
            </p>
            <div className={styles.heroButtons}>
              <Link
                href='#download'
                className={styles.btnPrimary}
                onClick={handleAnchorClick}
              >
                <span className={styles.btnText}>Start Free</span>
                <span className={styles.btnArrow}>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path d='M5 12h14M12 5l7 7-7 7' />
                  </svg>
                </span>
              </Link>
              <Link
                href='#features'
                className={styles.btnSecondary}
                onClick={handleAnchorClick}
              >
                Learn More
              </Link>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>10K+</span>
                <span className={styles.heroStatLabel}>Downloads</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>4.8</span>
                <span className={styles.heroStatLabel}>Rating</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>300+</span>
                <span className={styles.heroStatLabel}>Exercises</span>
              </div>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.phoneContainer}>
              <div className={styles.phoneGlow} />
              <div
                className={styles.phoneMockup}
                style={{
                  transform: `perspective(1000px) rotateY(${
                    mousePosition.x * 0.5
                  }deg) rotateX(${mousePosition.y * -0.5}deg)`,
                }}
              >
                <Image
                  src='/img/healthlog/ios-1-en.png'
                  alt='HealthLog App Screenshot 1'
                  width={280}
                  height={580}
                  className={styles.appScreenshot}
                  priority
                />
              </div>
              <div
                className={`${styles.phoneMockup} ${styles.phoneSecond}`}
                style={{
                  transform: `perspective(1000px) rotateY(${
                    mousePosition.x * 0.3
                  }deg) rotateX(${mousePosition.y * -0.3}deg)`,
                }}
              >
                <Image
                  src='/img/healthlog/ios-2-en.png'
                  alt='HealthLog App Screenshot 2'
                  width={280}
                  height={580}
                  className={styles.appScreenshot}
                  priority
                />
              </div>
              {/* <div
                className={`${styles.phoneMockup} ${styles.phoneSecond}`}
                style={{
                  transform: `perspective(1000px) rotateY(${
                    mousePosition.x * 0.3
                  }deg) rotateX(${mousePosition.y * -0.3}deg)`,
                }}
              >
                <Image
                  src='/img/healthlog/ios-3-en.png'
                  alt='헬스로그 앱 스크린샷 3'
                  width={280}
                  height={580}
                  className={styles.appScreenshot}
                  priority
                />
              </div> */}
            </div>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <span>SCROLL</span>
          <div className={styles.scrollLine}>
            <div className={styles.scrollDot} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className={styles.features}>
        <div className={styles.featuresBg}>
          <div className={styles.featureGradient1} />
          <div className={styles.featureGradient2} />
        </div>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>FEATURES</span>
            <h2 className={styles.sectionTitle}>
              Why <span className={styles.highlight}>HealthLog</span>?
            </h2>
            <p className={styles.sectionSubtitle}>
              All features you need for workout tracking
            </p>
          </div>
          <div className={styles.featuresGrid}>
            <div
              ref={(el) => {
                featureCardsRef.current[0] = el;
              }}
              className={styles.featureCard}
            >
              <div className={styles.featureIconWrapper}>
                <div className={styles.featureIcon}>
                  <svg
                    width='28'
                    height='28'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' />
                    <polyline points='14 2 14 8 20 8' />
                    <line x1='16' y1='13' x2='8' y2='13' />
                    <line x1='16' y1='17' x2='8' y2='17' />
                  </svg>
                </div>
              </div>
              <h3 className={styles.featureTitle}>Easy Workout Tracking</h3>
              <p className={styles.featureDescription}>
                Quickly record sets, reps, and weight. Intuitive UI makes it
                easy to input even during workouts.
              </p>
              <div className={styles.featureCardAccent} />
            </div>
            <div
              ref={(el) => {
                featureCardsRef.current[1] = el;
              }}
              className={styles.featureCard}
            >
              <div className={styles.featureIconWrapper}>
                <div className={styles.featureIcon}>
                  <svg
                    width='28'
                    height='28'
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
              </div>
              <h3 className={styles.featureTitle}>Calendar View</h3>
              <p className={styles.featureDescription}>
                Check your monthly workout records in the calendar. See all your
                workout days at a glance.
              </p>
              <div className={styles.featureCardAccent} />
            </div>
            <div
              ref={(el) => {
                featureCardsRef.current[2] = el;
              }}
              className={styles.featureCard}
            >
              <div className={styles.featureIconWrapper}>
                <div className={styles.featureIcon}>
                  <svg
                    width='28'
                    height='28'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <polyline points='22 12 18 12 15 21 9 3 6 12 2 12' />
                  </svg>
                </div>
              </div>
              <h3 className={styles.featureTitle}>Progress Analysis</h3>
              <p className={styles.featureDescription}>
                Track your workout changes with charts. Visualize your growth
                process including weight increases and volume changes.
              </p>
              <div className={styles.featureCardAccent} />
            </div>
            <div
              ref={(el) => {
                featureCardsRef.current[3] = el;
              }}
              className={styles.featureCard}
            >
              <div className={styles.featureIconWrapper}>
                <div className={styles.featureIcon}>
                  <svg
                    width='28'
                    height='28'
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
              </div>
              <h3 className={styles.featureTitle}>Routine Management</h3>
              <p className={styles.featureDescription}>
                Create and save your own workout routines. Start the same
                workouts quickly every time.
              </p>
              <div className={styles.featureCardAccent} />
            </div>
            <div
              ref={(el) => {
                featureCardsRef.current[4] = el;
              }}
              className={styles.featureCard}
            >
              <div className={styles.featureIconWrapper}>
                <div className={styles.featureIcon}>
                  <svg
                    width='28'
                    height='28'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <circle cx='12' cy='12' r='10' />
                    <polyline points='12 6 12 12 16 14' />
                  </svg>
                </div>
              </div>
              <h3 className={styles.featureTitle}>Rest Timer</h3>
              <p className={styles.featureDescription}>
                Manage rest time between sets with a timer. Get notified when
                it&apos;s time to start the next set.
              </p>
              <div className={styles.featureCardAccent} />
            </div>
            <div
              ref={(el) => {
                featureCardsRef.current[5] = el;
              }}
              className={styles.featureCard}
            >
              <div className={styles.featureIconWrapper}>
                <div className={styles.featureIcon}>
                  <svg
                    width='28'
                    height='28'
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
              </div>
              <h3 className={styles.featureTitle}>Cloud Sync</h3>
              <p className={styles.featureDescription}>
                Your data is safely stored in the cloud. Your records are
                maintained even when you change devices.
              </p>
              <div className={styles.featureCardAccent} />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id='how-it-works' className={styles.howItWorks}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>HOW IT WORKS</span>
            <h2 className={styles.sectionTitle}>How to Use</h2>
            <p className={styles.sectionSubtitle}>
              Start systematic workout management in 3 steps
            </p>
          </div>
          <div className={styles.stepsContainer}>
            <div className={styles.stepsLine} />
            <div className={styles.steps}>
              <div
                ref={(el) => {
                  stepsRef.current[0] = el;
                }}
                className={styles.step}
              >
                <div className={styles.stepNumberWrapper}>
                  <div className={styles.stepNumber}>01</div>
                  <div className={styles.stepPulse} />
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Choose Exercise</h3>
                  <p className={styles.stepDescription}>
                    Select today&apos;s workout from over 300 exercises. Easily
                    find by body part or equipment.
                  </p>
                </div>
              </div>
              <div
                ref={(el) => {
                  stepsRef.current[1] = el;
                }}
                className={styles.step}
              >
                <div className={styles.stepNumberWrapper}>
                  <div className={styles.stepNumber}>02</div>
                  <div className={styles.stepPulse} />
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Record Sets</h3>
                  <p className={styles.stepDescription}>
                    Enter weight and reps, then add sets. Set goals by referring
                    to your previous records.
                  </p>
                </div>
              </div>
              <div
                ref={(el) => {
                  stepsRef.current[2] = el;
                }}
                className={styles.step}
              >
                <div className={styles.stepNumberWrapper}>
                  <div className={styles.stepNumber}>03</div>
                  <div className={styles.stepPulse} />
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>Track Progress</h3>
                  <p className={styles.stepDescription}>
                    Check your growth with charts and statistics. Experience the
                    joy of achieving your goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.statsOverlay} />
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div
              ref={(el) => {
                statItemsRef.current[0] = el;
              }}
              className={styles.statItem}
            >
              <div className={styles.statNumber}>300+</div>
              <div className={styles.statLabel}>Exercise Types</div>
              <div className={styles.statBar} />
            </div>
            <div
              ref={(el) => {
                statItemsRef.current[1] = el;
              }}
              className={styles.statItem}
            >
              <div className={styles.statNumber}>10K+</div>
              <div className={styles.statLabel}>Downloads</div>
              <div className={styles.statBar} />
            </div>
            <div
              ref={(el) => {
                statItemsRef.current[2] = el;
              }}
              className={styles.statItem}
            >
              <div className={styles.statNumber}>4.8</div>
              <div className={styles.statLabel}>Rating</div>
              <div className={styles.statBar} />
            </div>
            <div
              ref={(el) => {
                statItemsRef.current[3] = el;
              }}
              className={styles.statItem}
            >
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Free</div>
              <div className={styles.statBar} />
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id='download' className={styles.download}>
        <div className={styles.downloadBg}>
          <div className={styles.downloadGradient1} />
          <div className={styles.downloadGradient2} />
          <div className={styles.downloadGrid} />
        </div>
        <div className={styles.container}>
          <div className={styles.downloadContent}>
            <span className={styles.sectionLabel}>DOWNLOAD NOW</span>
            <h2 className={styles.downloadTitle}>
              Start Now
              <br />
              <span className={styles.highlight}>Get Started</span>
            </h2>
            <p className={styles.downloadDescription}>
              Build better workout habits with HealthLog.
              <br />
              Download for free and start recording your workouts today.
            </p>
            <div className={styles.downloadButtons}>
              <a
                href='https://apps.apple.com/us/app/%ED%97%AC%EC%8A%A4%EB%A1%9C%EA%B7%B8/id6755720337'
                className={styles.storeButton}
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  width='32'
                  height='32'
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
                  width='32'
                  height='32'
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
                alt='HealthLog'
                width={36}
                height={36}
                className={styles.logoImg}
              />
              <span className={styles.logoText}>HEALTHLOG</span>
            </div>
            <div className={styles.footerLinks}>
              <a href='#'>Terms of Service</a>
              <a href='#'>Privacy Policy</a>
              <a href='#'>Contact</a>
            </div>
            <p className={styles.footerCopyright}>
              © 2024 HealthLog. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
