import { extractFirstThreeJiraListItems } from '@/src/lib/roadmap';
import { describe, expect, it } from 'vitest';

describe('extractFirstThreeJiraListItems', () => {
  it('keeps only the required roadmap narrative sections and ignores the rest', () => {
    const html = `
      <h3>1-3 Required for Ideation. 4-6 Required for Preparation and Execution.</h3>
      <ol>
        <li><b>Why Now:</b></li>
      </ol>
      <p><b>Purpose:</b> Establish urgency and market/customer context.</p>
      <p>"What's true in the market or for the customer today?"</p>

      <ol>
        <li><b>What Changes:</b></li>
      </ol>
      <p><b>Purpose:</b> The functional description.</p>
      <p>What is the customer able to see, do, or decide now?</p>

      <ol>
        <li><b>Business Outcome:</b></li>
      </ol>
      <p><b>Purpose:</b> The so-what.</p>
      <p>If this works, what changes about how the customer operates or what they can claim.</p>

      <ol>
        <li><b>In/Out of Scope</b></li>
      </ol>
      <p>Ignore this extra content.</p>
    `;

    const result = extractFirstThreeJiraListItems(html);

    expect(result).toContain('Why Now');
    expect(result).toContain('What Changes');
    expect(result).toContain('Business Outcome');
    expect(result).not.toContain('In/Out of Scope');
    expect(result).not.toContain('Ignore this extra content');
  });

  it('returns the original content when the title headings are not present', () => {
    const html = '<p>There is no list here.</p>';
    expect(extractFirstThreeJiraListItems(html)).toBe(html);
  });
});
