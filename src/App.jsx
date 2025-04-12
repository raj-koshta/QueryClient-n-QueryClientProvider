import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components/Layout/MainLayout';
import Home from './pages/Home';
import FetchOld from './pages/FetchOld';
import FetchRQ from './pages/FetchRQ';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/queryclient-n-provider/",
        element: <Home />
      },
      {
        path: "/queryclient-n-provider/trad",
        element: <FetchOld />
      },
      {
        path: "/queryclient-n-provider/rq",
        element: <FetchRQ />
      },
    ]
  }
]);

const App = () => {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
      </RouterProvider>
    </QueryClientProvider>
  )
}

export default App