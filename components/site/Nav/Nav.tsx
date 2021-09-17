// Global
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { classnames } from 'tailwindcss-classnames';
// Data
import NavigationData, { SitecoreQuickLinks } from '@/data/data-navigation';
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
  const toggleNav = () => {
    const body = document.querySelector<HTMLBodyElement>('body');
    if (body !== null) {
      body.classList.toggle('lg-mw:overflow-hidden');
    }
    setOpen(!isOpen);
  };

  return (
    <header className={classnames('h-20')}>
      <div
        className={classnames(
          'bg-white',
          'flex',
          'items-center',
          'h-20',
          'justify-between',
          'border-b',
          'border-gray-light',
          'px-gutter',
          'shadow',
          'z-50',
          'fixed',
          'inset-x-0',
          'top-0'
        )}
      >
        <Link href="/">
          <a className={classnames('flex', 'items-center', 'mr-8', 'flex-shrink-0')}>
            <span className={classnames('block', 'relative', 'w-36', 'h-9', 'lg:w-48', 'lg:h-12')}>
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
            'top-20',
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
          <SearchBox
            className={classnames(
              'sm:hidden',
              'p-4',
              'bg-gray-lightest',
              'border-b',
              'border-gray-light'
            )}
          />
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
                    'xl:mx-8'
                  )}
                >
                  <NavMenu title={item.title} children={item.children} callback={toggleNav} />
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
        </nav>
        <div className={classnames('flex', 'items-center', 'ml-8', 'sm:flex-1', 'md:max-w-xl')}>
          <SearchBox className={classnames('hidden', 'sm:flex', 'mr-8', 'flex-1')} />
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
    </header>
  );
};

export default Nav;
