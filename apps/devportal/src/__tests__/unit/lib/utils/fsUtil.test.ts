import { GetParentFolder } from '@/src/lib/utils/fsUtils';
import { vol } from 'memfs';

import { beforeEach, expect, it, vi } from 'vitest';

vi.mock('node:fs');

beforeEach(() => {
  // reset the state of in-memory fs
  vol.reset();
});

// Test for GetParentFolder function
it('GetParentFolder should return the parent folder', () => {
  const folder = '/path/to/folder';
  const parentFolder = GetParentFolder(folder);
  expect(parentFolder).toBe('/path/to');
});

// // Test for searchForFile function
// test('searchForFile should return the file path if found', () => {
//   vol.fromJSON(
//     {
//       '/data/markdown/pages/products/xm-cloud': 'hello dir3',
//       '/data/markdown/pages/products/manifest.json': 'hello dir3',
//     },
//     'apps/devportal'
//   );

//   const folderPath = 'apps/devportal/data/markdown/pages/products/xm-cloud';
//   const fileName = 'manifest.json';

//   const filePath = searchForFile(folderPath, fileName);
//   expect(filePath).toBe('apps/devportal/data/markdown/pages/products/manifest.json');
// });

// test('searchForFile should return null if file not found', () => {
//   const folderPath = '/c:/Projects/developer-portal/apps/devportal/src/lib/utils';
//   const fileName = 'nonexistent.txt';
//   const filePath = searchForFile(folderPath, fileName);
//   expect(filePath).toBeNull();
// });

// // Test for GetRootFile function
// test('GetRootFile should return the file path if found', () => {
//   const directory = '/data/markdown/docs';
//   const file = 'index.md';

//   vol.fromJSON({ '/markdown/docs/index.md': 'Hello world' }, '/data');

//   const filePath = GetRootFile(directory, file);
//   expect(filePath).toBe(path.join(directory, file));
// });

// test('GetRootFile should throw an error if file not found', () => {
//   const directory = '/data/markdown/docs';
//   const file = 'nonexistent';
//   expect(() => {
//     GetRootFile(directory, file);
//   }).toThrowError(`File '${file}' not found in '${directory}'`);
// });
