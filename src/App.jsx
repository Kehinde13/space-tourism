import { lazy, Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, Layout, Error404Page, ErrorPage } from './components';
const Crew = lazy(() => import('./pages/Crew'));
const Destination = lazy(() => import('./pages/Destination'));
const Technology = lazy(() => import('./pages/Technology'));


const Fallback = () => <div className="loader"></div>

function App() {

  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/Crew',
          element: <Crew />
        },
        {
          path: '/Destination',
          element: <Destination />
        }, 
        {
          path: '/Technology',
          element: <Technology />
        }, 
        {
          path: '*',
          element: <Error404Page />
        }
      ]
    }
  ])

  return (
    <Suspense fallback={<Fallback />}>
     <RouterProvider router={router}/>
    </Suspense >
  )
}

export default App
