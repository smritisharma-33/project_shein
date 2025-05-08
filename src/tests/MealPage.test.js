import { render, screen } from '@testing-library/react';
import Breakfast from '../pages/Breakfast';
import Lunch from '../pages/Lunch';
import Dinner from '../pages/Dinner';

test('renders breakfast page with title', () => {
  render(<Breakfast />);
  const titleElement = screen.getByText(/Breakfast Menu/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders lunch page with title', () => {
  render(<Lunch />);
  const titleElement = screen.getByText(/Lunch Menu/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders dinner page with title', () => {
  render(<Dinner />);
  const titleElement = screen.getByText(/Dinner Menu/i);
  expect(titleElement).toBeInTheDocument();
});