import React from 'react';
import { render, screen } from '@testing-library/react';
import { PodcastEpisode } from './PodcastEpisode';
import usePodcast from '../../lib/usePodcast';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../lib/usePodcast');

const mockPodcast = {
  id: '1535809341',
  title: 'Test Podcast',
  episodes: [
    {
      id: 1,
      title: 'Episode 1',
      description: 'Description 1',
      mediaContent: 'https://media-content-1',
    },
    {
      id: 2,
      title: 'Episode 2',
      description: 'Description 2',
      mediaContent: 'https://media-content-2',
    },
  ],
};

function renderComponent() {
  return render(
    <MemoryRouter initialEntries={['/podcast/1535809341/episode/1']}>
      <PodcastEpisode />
    </MemoryRouter>,
  );
}

describe('Home', () => {
  it('Render the loading state', () => {
    (usePodcast as jest.Mock).mockReturnValue({
      podcast: null,
      loading: true,
    });

    renderComponent();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('Renders the error state', () => {
    (usePodcast as jest.Mock).mockReturnValue({
      podcast: null,
      loading: false,
    });

    renderComponent();
    expect(screen.getByText('There was a mistake.')).toBeInTheDocument();
  });

  it('Render the title and description', async () => {
    (usePodcast as jest.Mock).mockReturnValue({
      podcast: mockPodcast,
      loading: false,
    });

    renderComponent();
    await screen.findByText('Episode 1');
    await screen.findByText('Description 1');
  });

  it('Render the audio', async () => {
    (usePodcast as jest.Mock).mockReturnValue({
      podcast: mockPodcast,
      loading: false,
    });

    renderComponent();
    expect(screen.getByTestId('audio-source')).toHaveAttribute(
      'src',
      'https://media-content-1',
    );
  });
});
