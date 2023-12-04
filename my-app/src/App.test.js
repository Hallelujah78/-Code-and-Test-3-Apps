import { render, screen } from '@testing-library/react';

import App from './App';
import logo from  './assets/images/logo.svg';

test('a logo is rendered with the correct source', () => {
  render(<App />);
  
  const logoDOM = screen.getByRole('img', {name: /logo/i});
  expect(logoDOM).toBeInTheDocument();
  expect(logoDOM).toHaveAttribute('src', logo.src);
});

test('a link is displayed with the correct href', ()=>{
render(<App/>);
const link = screen.getByRole('link', {name: /learn react/i});
expect(link).toBeInTheDocument();
expect(link).toHaveAttribute('href', "https://react.dev/");
});
