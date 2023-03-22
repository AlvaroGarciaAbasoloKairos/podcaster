import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { Podcast } from './pages/Podcast';
import { PodcastEpisode } from './pages/PodcastEpisode';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/podcast/:podcastId',
    element: <Podcast />,
  },
  {
    path: '/podcast/:podcastId/episode/:episodeId',
    element: <PodcastEpisode />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
