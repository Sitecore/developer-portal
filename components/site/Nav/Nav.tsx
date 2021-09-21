// Global
import FocusTrap from 'focus-trap-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import throttle from 'lodash.throttle';
import { classnames } from 'tailwindcss-classnames';
// Data
import NavigationData, { SitecoreQuickLinks } from '@/data/data-navigation';
// Lib
import htmlConfig from '@/lib/html-constants';
const { idMainContent } = htmlConfig;
import { setGlobalState, useGlobalState } from '@/lib/global-state';
// Components
import NavMenu from '@/components/site/Nav/NavMenu';
import SearchBox from '@/components/SearchBox';
import QuickStartMenu from '@/components/QuickStartMenu';

export type NavTWClasses =
  | 'nav-item--button'
  | 'nav-item--button-active'
  | 'hamburger'
  | 'hamburger-bar-outside'
  | 'hamburger-bar-middle'
  | 'hamburger-bar-middleclone';

const hamburgerBarClasses = classnames(
  'bg-currentColor',
  'block',
  'h-1',
  'pt-1',
  'w-full',
  'transition'
);

const Nav = (): JSX.Element => {
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

  return (
    <header className={classnames('h-32')}>
      <div
        className={classnames(
          'bg-white',
          'border-b',
          'border-gray-light',
          'shadow',
          'z-40',
          'fixed',
          'inset-x-0',
          'top-0',
          'h-32',
          'transition-all',
          {
            '-top-16': scrolled, // Note: absolute is being used here to avoid "transform" resetting the coordinate system for the children that are relying on the document's coordinates.
          }
        )}
      >
        <a
          href={`#${idMainContent}`}
          className={classnames(
            'bg-teal',
            'focus:bg-teal-dark',
            'hover:bg-teal-dark',
            'font-semibold',
            'inline-block',
            'px-12',
            'py-4',
            'text-sm',
            'text-white',
            'absolute',
            'left-gutter',
            'z-50',
            'transform-gpu',
            'transition-transform',
            '-translate-y-full',
            'focus:translate-y-0'
          )}
        >
          Skip to Main Content
        </a>
        <div
          className={classnames(
            'flex',
            'items-center',
            'justify-center',
            'border-b',
            'border-gray-light',
            'px-gutter',
            'h-16'
          )}
        >
          <Link href="/">
            <a className={classnames('flex', 'items-center', 'mr-auto', 'flex-shrink-0')}>
              <span
                className={classnames('block', 'relative', 'w-36', 'h-9', 'lg:w-48', 'lg:h-12')}
              >
                <Image src="/sitecore.svg" layout="fill" alt="Sitecore Logo" />
              </span>
              <span className={classnames('sr-only')}>Sitecore</span>
              <span
                className={classnames(
                  'hidden',
                  'text-xs',
                  'font-semibold',
                  'ml-4',
                  'text-gray-darkest',
                  'xl:block'
                )}
              >
                Developer Portal
              </span>
            </a>
          </Link>
          <nav
            ref={navRef}
            id="scdp-nav"
            className={classnames(
              'fixed',
              'bg-white',
              'top-32',
              'bottom-0',
              'inset-0',
              'items-center',
              'lg:mx-8',
              'lg:bg-transparent',
              'lg:flex',
              'lg:static',
              {
                ['hidden']: !isOpen,
                ['block']: isOpen,
              }
            )}
          >
            <FocusTrap
              active={isOpen}
              focusTrapOptions={{
                onDeactivate: () => setOpen(false),
              }}
            >
              <ul className={classnames('block', 'text-sm', 'lg:flex')}>
                {NavigationData.map((item, index) => {
                  return (
                    <li
                      key={`nav-${index}`}
                      className={classnames(
                        'border-b',
                        'border-gray-light',
                        'px-gutter',
                        'xl:p-0',
                        'xl:border-0',
                        'xl:mx-6'
                      )}
                    >
                      <NavMenu
                        title={item.title}
                        children={item.children}
                        url={item.url}
                        callback={toggleNav}
                      />
                    </li>
                  );
                })}
                {/*
                SC Products "Quick Links"-like mobile menu implementation.
              */}
                <li
                  className={classnames(
                    'border-b',
                    'border-gray-light',
                    'px-gutter',
                    'xl:p-0',
                    'xl:border-0',
                    'xl:mx-8',
                    'lg:hidden'
                  )}
                >
                  <NavMenu
                    title={SitecoreQuickLinks.title}
                    children={SitecoreQuickLinks.children}
                    callback={toggleNav}
                    buttonIcon="quick-links"
                  />
                </li>
              </ul>
            </FocusTrap>
          </nav>
          <div
            className={classnames(
              'flex',
              'items-center',
              'justify-end',
              'ml-auto',
              'lg:w-24',
              'xl:w-80'
            )}
          >
            <button
              aria-controls="scdp-nav"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              className={classnames(
                'hamburger',
                'relative',
                'w-9',
                'h-7',
                'z-20',
                'hover:text-teal',
                'lg:hidden'
              )}
              onClick={toggleNav}
            >
              <span
                className={classnames(hamburgerBarClasses, 'mb-1.5', 'hamburger-bar-outside', {
                  ['hidden']: isOpen,
                })}
              ></span>
              <span
                className={classnames(hamburgerBarClasses, 'mb-1.5', {
                  ['hamburger-bar-middle']: isOpen,
                })}
              ></span>
              <span
                className={classnames(hamburgerBarClasses, '-mt-2.5', 'mb-1.5', {
                  ['hamburger-bar-middleclone']: isOpen,
                })}
              ></span>
              <span
                className={classnames(hamburgerBarClasses, 'hamburger-bar-outside', {
                  ['hidden']: isOpen,
                })}
              ></span>
            </button>
            <QuickStartMenu
              className={classnames('hidden', 'w-7', 'h-7', 'lg:h-5', 'lg:w-5', 'lg:block')}
            />
          </div>
        </div>
        <div>
          <div
            className={classnames(
              'px-gutter-all',
              'py-2.5',
              'max-w-screen-xl',
              'm-auto',
              'relative',
              'z-0'
            )}
          >
            <SearchBox />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
