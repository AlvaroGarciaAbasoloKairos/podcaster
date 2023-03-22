import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Home } from './Home';
import usePodcasts from '../../lib/usePodcasts';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../lib/usePodcasts');

const mockPodcasts = [
  {
    id: '1',
    title: 'Test Podcast 1',
    author: 'Test Author 1',
  },
  {
    id: '2',
    title: 'Test Podcast 2',
    author: 'Test Author 2',
  },
];

function renderComponent() {
  return render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  );
}

describe('Home', () => {
  it('Render the loading state', () => {
    (usePodcasts as jest.Mock).mockReturnValue({
      podcast: null,
      loading: true,
    });

    renderComponent();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('Render the podcasts', async () => {
    (usePodcasts as jest.Mock).mockReturnValue({
      podcasts: mockPodcasts,
      loading: false,
    });

    renderComponent();
    await screen.findByText('Test Podcast 1');
    await screen.findByText('Test Podcast 2');
    await screen.findByText('Author: Test Author 1');
    await screen.findByText('Author: Test Author 2');
  });

  it('Render the error state', () => {
    (usePodcasts as jest.Mock).mockReturnValue({
      podcasts: null,
      loading: false,
    });

    renderComponent();
    expect(screen.getByText('There was a mistake..')).toBeInTheDocument();
  });

  it('Filters podcasts by search input', async () => {
    (usePodcasts as jest.Mock).mockReturnValue({
      loading: false,
      podcasts: mockPodcasts,
    });

    renderComponent();

    const input = screen.getByPlaceholderText('Filter podcasts...');
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'podcast 1' } });

    expect(screen.getByText('Test Podcast 1')).toBeInTheDocument();
    expect(screen.queryByText('Test Podcast 2')).not.toBeInTheDocument();
  });
});
