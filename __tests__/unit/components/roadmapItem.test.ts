import { describe, expect, it } from 'vitest';
import { matchesSelectedRoadmapItem } from '@/src/components/roadmap/roadmapItem';

describe('matchesSelectedRoadmapItem', () => {
  it('returns false when no item is selected', () => {
    expect(matchesSelectedRoadmapItem(undefined, 101)).toBe(false);
  });

  it('matches a selected item from a query array', () => {
    expect(matchesSelectedRoadmapItem(['101'], 101)).toBe(true);
  });

  it('ignores case when comparing the selected item id', () => {
    expect(matchesSelectedRoadmapItem('ABC-101', 101)).toBe(false);
    expect(matchesSelectedRoadmapItem('101', 101)).toBe(true);
  });
});
