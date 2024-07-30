import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BfsInGraphPage, HomePage, LevelOrderInBstPage } from './pages'
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/level-order-traversal-in-bst",
    element: <LevelOrderInBstPage />,
  },
  {
    path: "/breadth-first-search-traversal-in-graph",
    element: <BfsInGraphPage />,
  },
  // {
  //   path: "/test",
  //   element: <TestPage />,
  // },
]);

const App = () => {
  return (
    <div className=''>
      <RouterProvider router={router} />
    </div>
  )
}

export default App