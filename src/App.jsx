import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'izitoast/dist/css/izitoast.css';
import Listado from './components/Listado';
import Agregar from './components/Agregar';

const items = [
  {
      path: 'home/',
      element: <Home />,
  },
  {
    path: 'listado/',
    element: <Listado />,
  },
  {
    path: 'agregar/',
    element: <Agregar />,
  }
]

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />,
      children: items,
    }
  ])

  return (
    <div className='main'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App