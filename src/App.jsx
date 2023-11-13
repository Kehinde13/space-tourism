import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, Layout } from './components';
import { Crew, Destination, Technology } from './pages'

function App() {

  const router = createBrowserRouter([
    {
      element: <Layout />,
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
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
