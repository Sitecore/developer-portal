import { ManifestNavigationItem } from '@/src/lib/interfaces/page-info';

export const mockedManifestConfigRoutes: ManifestNavigationItem[] = [
  {
    title: 'Page 1',
    path: 'page-1',
    ignoreLink: false,
    children: [
      {
        title: 'Page 1-1',
        path: 'page-1-1',
        children: [
          {
            title: 'Page 1-1-1',
            path: 'page-1-1-1',
            children: [],
          },
          {
            title: 'Page 1-1-2',
            path: 'page-1-1-2',
            children: [],
          },
        ],
      },
      {
        title: 'Page 1-2',
        path: 'page-1-2',
        children: [],
      },
    ],
  },
  {
    title: 'Page 2',
    path: 'page-2',
    ignoreLink: false,
    children: [],
  },
  {
    title: 'Page 3',
    path: 'page-3',
    ignoreLink: false,
    children: [
      {
        title: 'Page 3-1',
        path: 'page-3-1',
        children: [
          {
            title: 'Page 3-1-1',
            path: 'page-3-1-1',
            children: [],
          },
          {
            title: 'Page 3-1-2',
            path: 'page-3-1-2',
            children: [],
          },
        ],
      },
      {
        title: 'Page 3-2',
        path: 'page-3-2',
        children: [],
      },
    ],
  },
  {
    title: 'Page 4',
    path: 'page-4',
    ignoreLink: false,
    children: [],
  },
  {
    title: 'Page 5',
    path: 'page-5',
    ignoreLink: false,
    children: [],
  },
];
