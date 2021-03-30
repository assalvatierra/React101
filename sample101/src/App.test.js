import { render, screen } from '@testing-library/react';
import App from './App';
import CarList from './CarList';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/list/i);
  expect(linkElement).toBeInTheDocument();
});

test('Test Car List', ()=> {
  render(<CarList />);
  const ListLabel = screen.getByText(/Car List Class/i);
  expect(ListLabel).toBeInTheDocument();
});



