export function getColorSchemebyStatus(status: string): 'neutral' | 'primary' | 'danger' | 'success' | 'warning' | 'yellow' | 'teal' | 'cyan' | 'blue' | 'pink' {
  switch (status) {
    case 'available':
      return 'teal';
    case 'inprogress':
      return 'teal';
    case 'scheduled':
      return 'teal';
    default:
      return 'primary';
  }
}

export const getColorSchemebyChangeType = (changeType: string): 'neutral' | 'primary' | 'danger' | 'success' | 'warning' | 'yellow' | 'teal' | 'cyan' | 'blue' | 'pink' => {
    if (changeType?.toLowerCase() === 'improvement') {
      return 'primary';
    }
    if (changeType?.toLowerCase() === 'new feature') {
      return 'teal';
    }
    if (changeType?.toLowerCase() === 'resolved') {
      return 'warning';
    }
    return 'primary';
  };
