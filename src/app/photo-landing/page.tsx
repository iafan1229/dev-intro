"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./photo-landing.module.css";

export default function PhotoLandingPage() {
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const featureCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const privacyContentRef = useRef<HTMLDivElement>(null);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setNavbarScrolled(currentScroll > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // IntersectionObserver for privacy section
  useEffect(() => {
    const privacyContent = privacyContentRef.current;
    if (!privacyContent) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const privacyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.privacyContentVisible);
        }
      });
    }, observerOptions);

    privacyObserver.observe(privacyContent);

    return () => {
      if (privacyContent) {
        privacyObserver.unobserve(privacyContent);
      }
    };
  }, []);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>
  ) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const offsetTop = (targetElement as HTMLElement).offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      {/* Navigation */}
      <nav
        className={`${styles.navbar} ${
          navbarScrolled ? styles.navbarScrolled : ""
        }`}
      >
        <div className={styles.container}>
          <div className={styles.navContent}>
            <div className={styles.logo}>
              <Image
                src='/img/daylog/logo.png'
                alt='DayLog'
                width={32}
                height={32}
                className={styles.logoImg}
              />
              <span className={styles.logoText}>DayLog</span>
            </div>
            <div className={styles.navLinks}>
              <Link href='#features' onClick={handleAnchorClick}>
                Features
              </Link>
              <Link href='#privacy' onClick={handleAnchorClick}>
                Privacy
              </Link>
              <Link
                href='#download'
                className={styles.btnDownload}
                onClick={handleAnchorClick}
              >
                Download
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Record your day
                <br />
                <span className={styles.highlight}>beautifully</span>
              </h1>
              <p className={styles.heroDescription}>
                A privacy-focused diary app that lets you easily record
                <br />
                precious moments with photos and text
              </p>
              <div className={styles.heroButtons}>
                <Link
                  href='#download'
                  className={styles.btnPrimary}
                  onClick={handleAnchorClick}
                >
                  Download App
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
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>Offline</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>0</div>
                  <div className={styles.statLabel}>Login Required</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>∞</div>
                  <div className={styles.statLabel}>Privacy</div>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.phoneMockup}>
                <Image
                  src='/img/daylog/screenshot-ios1.png'
                  alt='DayLog App'
                  width={260}
                  height={560}
                  className={styles.appScreenshot}
                  priority
                />
              </div>
              <div className={styles.phoneMockup}>
                <Image
                  src='/img/daylog/screenshot-ios2.png'
                  alt='DayLog App'
                  width={260}
                  height={560}
                  className={styles.appScreenshot}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why DayLog?</h2>
          <div className={styles.featuresGrid}>
            <div
              ref={(el) => {
                featureCardsRef.current[0] = el;
              }}
              className={styles.featureCard}
            >
              <div className={styles.featureIcon}>📸</div>
              <h3 className={styles.featureTitle}>Photos and Text</h3>
              <p className={styles.featureDescription}>
                Write your diary with multiple photos and
                <br />
                visually record precious moments
              </p>
            </div>
            <div
              ref={(el) => {
                featureCardsRef.current[1] = el;
              }}
              className={styles.featureCard}
            >
              <div className={styles.featureIcon}>📅</div>
              <h3 className={styles.featureTitle}>Calendar View</h3>
              <p className={styles.featureDescription}>
                View your diary at a glance with monthly calendar and
                <br />
                easily write or read by tapping on dates
              </p>
            </div>
            <div
              ref={(el) => {
                featureCardsRef.current[2] = el;
              }}
              className={styles.featureCard}
            >
              <div className={styles.featureIcon}>🔍</div>
              <h3 className={styles.featureTitle}>Search and Explore</h3>
              <p className={styles.featureDescription}>
                Search your diary by keywords or
                <br />
                look back at the past with timeline and photo gallery
              </p>
            </div>
            <div
              ref={(el) => {
                featureCardsRef.current[3] = el;
              }}
              className={styles.featureCard}
            >
              <div className={styles.featureIcon}>🎨</div>
              <h3 className={styles.featureTitle}>Customization</h3>
              <p className={styles.featureDescription}>
                Create your own diary app with
                <br />
                various themes and text sizes
              </p>
            </div>
            <div
              ref={(el) => {
                featureCardsRef.current[4] = el;
              }}
              className={styles.featureCard}
            >
              <div className={styles.featureIcon}>☁️</div>
              <h3 className={styles.featureTitle}>Google Drive Backup</h3>
              <p className={styles.featureDescription}>
                Backup to Google Drive and
                <br />
                keep your data safe
              </p>
            </div>
            <div
              ref={(el) => {
                featureCardsRef.current[5] = el;
              }}
              className={styles.featureCard}
            >
              <div className={styles.featureIcon}>🌍</div>
              <h3 className={styles.featureTitle}>Multi-language Support</h3>
              <p className={styles.featureDescription}>
                Supports 19 languages so you can
                <br />
                use it anywhere in the world
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id='privacy' className={styles.privacy}>
        <div className={styles.container}>
          <div ref={privacyContentRef} className={styles.privacyContent}>
            <div className={styles.privacyText}>
              <h2 className={styles.sectionTitle}>Privacy First</h2>
              <p className={styles.privacyDescription}>
                DayLog stores your diary completely offline.
                <br />
                No login, no servers, no cloud sync.
              </p>
              <div className={styles.privacyFeatures}>
                <div className={styles.privacyItem}>
                  <span className={styles.privacyCheck}>✓</span>
                  <span>All data is stored only on your device</span>
                </div>
                <div className={styles.privacyItem}>
                  <span className={styles.privacyCheck}>✓</span>
                  <span>No login or account required</span>
                </div>
                <div className={styles.privacyItem}>
                  <span className={styles.privacyCheck}>✓</span>
                  <span>No data is sent to servers</span>
                </div>
                <div className={styles.privacyItem}>
                  <span className={styles.privacyCheck}>✓</span>
                  <span>Backup to Google Drive only when you want</span>
                </div>
              </div>
            </div>
            <div className={styles.privacyVisual}>
              <div className={styles.privacyIcon}>🔒</div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id='download' className={styles.download}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Get Started</h2>
          <p className={styles.downloadDescription}>
            Download for free on iOS and Android
          </p>
          <div className={styles.downloadButtons}>
            <Link
              href='https://apps.apple.com/us/app/daylog-diary-daily-note/id6756697383'
              className={styles.downloadBtn}
              target='_blank'
              rel='noopener noreferrer'
              onClick={handleAnchorClick}
            >
              <Image
                src='https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/ko-kr?size=250x83&releaseDate=1276560000'
                alt='Download on the App Store'
                width={250}
                height={83}
                unoptimized
              />
            </Link>
            {/* <a
              href='https://play.google.com/store/apps/details?id=com.iafan1229.daylog'
              className={styles.downloadBtn}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='https://play.google.com/intl/en_us/badges/static/images/badges/ko_badge_web_generic.png'
                alt='Google Play에서 다운로드'
                width={200}
                height={60}
                unoptimized
              />
            </a> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerBottom}>
            <p>&copy; 2025 DayLog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
