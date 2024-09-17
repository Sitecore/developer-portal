import { removeHtmlTagsAndSpecialChars } from '@lib/utils';
import { describe, expect, it } from 'vitest';

describe('removeHtmlTagsAndSpecialChars', () => {
  it('should remove HTML tags from the input string', () => {
    const input = '<p>Hello, <strong>world</strong>!</p>';
    const expectedOutput = 'Hello, world!';
    const result = removeHtmlTagsAndSpecialChars(input);
    expect(result).toBe(expectedOutput);
  });

  it('should replace HTML special characters with their actual values', () => {
    const input = 'This is an example &amp; test &lt;string&gt;.';
    const expectedOutput = 'This is an example & test <string>.';
    const result = removeHtmlTagsAndSpecialChars(input);
    expect(result).toBe(expectedOutput);
  });

  it('should handle multiple HTML tags and special characters', () => {
    const input = '<p>This is an example &amp; test &lt;string&gt;.</p>';
    const expectedOutput = 'This is an example & test <string>.';
    const result = removeHtmlTagsAndSpecialChars(input);
    expect(result).toBe(expectedOutput);
  });

  it('should not modify the input string if there are no HTML tags or special characters', () => {
    const input = 'This is a plain text without any HTML tags or special characters.';
    const expectedOutput = input;
    const result = removeHtmlTagsAndSpecialChars(input);
    expect(result).toBe(expectedOutput);
  });
});
