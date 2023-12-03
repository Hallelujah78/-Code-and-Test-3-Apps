import { render, screen } from '@testing-library/react';
// const { render, screen } = require('@testing-library/react');

import App from '../App';

test('a logo is rendered with the correct source', () => {
  render(<App />);
});
