import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TaskOrganizer from './TaskOrganizer';

describe('<TaskOrganizer />', () => {
  test('it should mount', () => {
    render(<TaskOrganizer />);
    
    const taskOrganizer = screen.getByTestId('TaskOrganizer');

    expect(taskOrganizer).toBeInTheDocument();
  });
});