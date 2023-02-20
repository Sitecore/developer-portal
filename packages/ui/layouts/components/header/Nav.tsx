// Global
import throttle from 'lodash.throttle';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
// Lib
import { setGlobalState, useGlobalState } from '../../../common/global-state';
import htmlConfig from '../../../common/html-constants';
const { idMainContent } = htmlConfig;
// Components
import NavMenu from 'ui/layouts/components/header/NavMenu';
import QuickStartMenu from 'ui/layouts/components/header/QuickStartMenu';
import Logo from './Logo';
import { ThemeButton } from './ThemeButton';

export type NavTWClasses =
  | 'nav-item--button'
  | 'nav-item--button-active'
  | 'hamburger'
  | 'hamburger-bar-outside'
  | 'hamburger-bar-middle'
  | 'hamburger-bar-middleclone';

const hamburgerBarClasses = 'bg-currentColor block h-1 pt-1 w-full transition';

export type NavigationChildData = {
  title: string;
  url?: string;
  external?: boolean;
  children?: NavigationChildData[];
};

export type NavigationData = {
  title: string;
  url?: string;
  children?: NavigationChildData[];
  pathname?: string;
};
export type NavProps = {
  navigationData: NavigationData[];
  sitecoreQuickLinks: NavigationData;
  children?: React.ReactNode | React.ReactNode[];
};

const Nav = ({ navigationData, sitecoreQuickLinks, children }: NavProps): JSX.Element => {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setOpen] = useState(false);

  /**
   *  Hook for handling toggling the mobile nav.
   */
  const toggleNav = () => {
    const body = document.querySelector<HTMLBodyElement>('body');
    if (body !== null) {
      body.classList.toggle('lg-mw:overflow-hidden');
    }
    setOpen(!isOpen);
  };

  /**
   *  Hook for handling closing the mobile nav.
   */
  const closeNav = () => {
    const body = document.querySelector<HTMLBodyElement>('body');
    if (body !== null) {
      body.classList.remove('lg-mw:overflow-hidden');
    }
    setOpen(false);
  };

  /**
   *  Hook for scroll state
   */
  const [scrolled] = useGlobalState('navScrolled');

  /**
   *  Hook for handling scroll events on header.
   *
   *  Throttle the scroll listener with lodash, only handle on mount.
   */
  useEffect(() => {
    const ThrottleSpeed = 250;
    const Threshold = 140;
    let lastScrollY = window.pageYOffset;

    const UpdateScrollDirection = () => {
      const ScrollY = window.pageYOffset;

      // Exit if we haven't crossed the Threshold
      if (Math.abs(ScrollY - lastScrollY) < Threshold) {
        return;
      }

      setGlobalState('navScrolled', ScrollY > lastScrollY ? true : false);
      lastScrollY = ScrollY > 0 ? ScrollY : 0;
    };

    const OnScroll = () => {
      window.requestAnimationFrame(UpdateScrollDirection);
    };

    // When moutned, add scroll listener, throttle scroll event with lodash.
    const ThrottleScroll = throttle(OnScroll, ThrottleSpeed);
    window.addEventListener('scroll', ThrottleScroll);

    // If unmounted, remove listener.
    return () => window.removeEventListener('scroll', ThrottleScroll);
  }, [scrolled]);

  const height = children ? 'h-32' : 'h-16';

  return (
    // Necesarry to retain the space for the fixed header.
    <header className="h-32">
      <div
        className={`bg-theme-bg border-theme-border shadow-theme fixed inset-x-0 z-40 ${height} border-b transition-all ${
          scrolled ? '-top-16' : 'top-0'
        }`}
      >
        <a
          href={`#${idMainContent}`}
          className="absolute z-50 inline-block px-12 py-4 text-sm font-semibold text-white transition-transform -translate-y-full bg-violet focus:bg-violet-dark hover:bg-violet-dark left-gutter transform-gpu focus:translate-y-0"
        >
          Skip to Main Content
        </a>
        <div className="flex items-center justify-center h-16 border-b border-theme-border-alt px-gutter">
          <Link href="/" className="flex items-center flex-shrink-0 mr-auto" onClick={closeNav}>
            <span className="relative block w-36 lg:w-48">
              <Logo />
            </span>
            <span className="sr-only">Sitecore</span>
            <span className="hidden ml-4 sr-only text-theme-text xl:block">Developer Portal</span>
          </Link>
          <nav
            ref={navRef}
            id="scdp-nav"
            className={`bg-theme-bg fixed inset-0 top-32 bottom-0 items-center lg:static lg:mx-12 lg:flex lg:bg-transparent xl:mx-16 ${
              isOpen ? 'block' : 'hidden'
            }`}
          >
            <ul className="block text-sm lg:flex">
              {navigationData.map((item: NavigationData, index: number) => {
                return (
                  <li
                    key={`nav-${index}`}
                    className="border-b border-theme-bg-alt px-gutter lg:border-0 xl:mx-6 xl:p-0"
                  >
                    <NavMenu
                      title={item.title}
                      url={item.url}
                      pathname={item.pathname}
                      callback={toggleNav}
                    >
                      {item.children}
                    </NavMenu>
                  </li>
                );
              })}
              {/*
                SC Products "Quick Links"-like mobile menu implementation.
              */}
              <li className="border-b border-theme-bg-alt px-gutter lg:hidden xl:mx-8 xl:border-0 xl:p-0">
                <NavMenu
                  title={sitecoreQuickLinks.title}
                  callback={toggleNav}
                  buttonIcon="quick-links"
                >
                  {sitecoreQuickLinks.children}
                </NavMenu>
              </li>
            </ul>
          </nav>
          <div className="flex items-center justify-end ml-auto lg:w-24 xl:w-96">
            <ThemeButton className="mr-2.5" />
            <button
              aria-controls="scdp-nav"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              className="relative z-20 hamburger hover:text-violet h-7 w-9 lg:hidden"
              onClick={toggleNav}
            >
              <span
                className={`${hamburgerBarClasses} hamburger-bar-outside mb-1.5 ${
                  isOpen ? 'hidden' : ''
                }`}
              ></span>
              <span
                className={`${hamburgerBarClasses} mb-1.5 ${isOpen ? 'hamburger-bar-middle' : ''}`}
              ></span>
              <span
                className={`${hamburgerBarClasses} -mt-2.5 mb-1.5 ${
                  isOpen ? 'hamburger-bar-middleclone' : ''
                }`}
              ></span>
              <span
                className={`${hamburgerBarClasses} hamburger-bar-outside ${isOpen ? 'hidden' : ''}`}
              ></span>
            </button>
            <QuickStartMenu
              className="hidden h-7 w-7 lg:block lg:h-5 lg:w-5"
              data={sitecoreQuickLinks}
            />
          </div>
        </div>
        <div>
          {children && (
            <div className="px-gutter-all m-auto max-w-screen-xl py-2.5">{children}</div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Nav;
