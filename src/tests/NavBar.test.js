import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

test('renders all meal tabs', () => {
  render(
    <HashRouter>
      <NavBar />
    </HashRouter>
  );
  
  const breakfastLink = screen.getByText(/breakfast/i);
  const lunchLink = screen.getByText(/lunch/i);
  const dinnerLink = screen.getByText(/dinner/i);
  
  expect(breakfastLink).toBeInTheDocument();
  expect(lunchLink).toBeInTheDocument();
  expect(dinnerLink).toBeInTheDocument();
});