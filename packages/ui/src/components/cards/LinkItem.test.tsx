import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Add this import statement
import { LinkItem } from './LinkItem';
  
describe('LinkItem', () => {
  test('renders title and link', () => {
    const title = 'Example Title';
    const link = 'https://example.com';

    render(<LinkItem title={title} link={link} />);

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });
});