import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Podcast } from './Podcast';
import usePodcast from '../../lib/usePodcast';

jest.mock('../../lib/usePodcast');

const mockPodcast = {
  id: '1535809341',
  title: 'Test Podcast',
  episodes: [
    {
      id: '1',
      title: 'Episode 1',
      pubDate: '2021-01-01T00:00:00.000Z',
      duration: 3600,
    },
    {
      id: '2',
      title: 'Episode 2',
      pubDate: '2021-01-08T00:00:00.000Z',
      duration: 1800,
    },
  ],
};

function renderComponent() {
  return render(
    <MemoryRouter initialEntries={['/podcast/1535809341']}>
      <Podcast />
    </MemoryRouter>,
  );
}

describe('Podcast', () => {
  it('Render the loading state', () => {
    (usePodcast as jest.Mock).mockReturnValue({
      podcast: null,
      loading: true,
    });

    renderComponent();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('Render the episodes of the podcast', async () => {
    (usePodcast as jest.Mock).mockReturnValue({
      podcast: mockPodcast,
      loading: false,
    });

    renderComponent();
    expect(screen.getByTestId('1535809341')).toBeInTheDocument();
    await screen.findByText('Episode 1');
  });

  it('Renders the error state', () => {
    (usePodcast as jest.Mock).mockReturnValue({
      podcast: null,
      loading: false,
    });

    renderComponent();
    expect(screen.getByText('There was a mistake.')).toBeInTheDocument();
  });

  it('Renders the PodcastCard image.', async () => {
    (usePodcast as jest.Mock).mockReturnValue({
      podcast: mockPodcast,
      loading: false,
    });

    renderComponent();
    expect(screen.getByAltText('Podcast Cover Art')).toBeInTheDocument();
  });
});
