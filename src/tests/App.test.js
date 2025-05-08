import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders header with app name', () => {
  render(<App />);
  const headerElement = screen.getByText("Delicious Meals");
  expect(headerElement).toBeInTheDocument();
});