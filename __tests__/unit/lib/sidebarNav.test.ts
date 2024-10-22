import { describe, expect, test } from 'vitest';

import { SidebarNavigationItem } from '@/src/lib/interfaces/page-info';
import { findCurrentLevel } from '@/src/lib/sidebarNav';

describe('findCurrentLevel', () => {
  const routes: SidebarNavigationItem[] = [
    {
      path: '/home',
      children: [
        {
          path: '/home/overview',
          children: [],
          title: '',
        },
        {
          path: '/home/details',
          children: [],
          title: '',
        },
      ],
      title: '',
    },
    {
      path: '/about',
      children: [
        {
          path: '/about/team',
          children: [],
          title: '',
        },
        {
          path: '/about/contact',
          children: [],
          title: '',
        },
      ],
      title: '',
    },
  ];

  test('should return the current level of sidebar navigation items that matches the given path', () => {
    const result = findCurrentLevel(routes, '/home');
    expect(result).toEqual(routes);
  });

  test('should return the children of the matched route', () => {
    const result = findCurrentLevel(routes, '/home/overview');
    expect(result).toEqual(routes[0].children);
  });

  test('should return null if no match is found', () => {
    const result = findCurrentLevel(routes, '/nonexistent');
    expect(result).toBeNull();
  });

  test('should return the children of the matched nested route', () => {
    const result = findCurrentLevel(routes, '/about/team');
    expect(result).toEqual(routes[1].children);
  });
});
