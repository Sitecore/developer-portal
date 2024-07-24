import { GetParentFolder, GetRootFile, searchForFile } from '@/src/lib/utils/fsUtils';
import { vol } from 'memfs';
import path from 'path';

import { beforeEach, describe, expect, it, test, vi } from 'vitest';

vi.mock('fs');

beforeEach(() => {
  vol.reset();
  vol.fromJSON({
    '/products/xm-cloud/index.md': 'Hello world 1',
    '/products/manifest.json': 'Hello world 1',
  });
});

// Test for GetParentFolder function
it('GetParentFolder should return the parent folder', () => {
  const folder = '/path/to/folder';
  const parentFolder = GetParentFolder(folder);
  expect(parentFolder).toBe('/path/to');
});

// Test for searchForFile function
describe('searchForFile Tests', () => {
  test('should read a file', async () => {
    const filePath = searchForFile('\\products\\xm-cloud\\index.md', 'manifest.json');
    expect(filePath).toBe(path.join('\\products\\manifest.json'));
  });

  test('searchForFile should return null if file not found', () => {
    const folderPath = '/c:/Projects/developer-portal/apps/devportal/src/lib/utils';
    const fileName = 'nonexistent.txt';
    const filePath = searchForFile(folderPath, fileName);
    expect(filePath).toBeNull();
  });
});

describe('GetRootFile tests', () => {
  test('GetRootFile should return the file path if found', async () => {
    const directory = '\\products\\xm-cloud';
    const file = 'index.md';

    const filePath = GetRootFile(directory, file);
    expect(filePath).toBe(path.join(directory, file));
  });
  test('GetRootFile should throw an error if file not found', () => {
    const directory = '/data/markdown/docs';
    const file = 'nonexistent';
    expect(() => {
      GetRootFile(directory, file);
    }).toThrowError(`File '${file}' not found in '${directory}'`);
  });
});
