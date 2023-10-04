import { createBrowserRouter } from 'react-router-dom'

import Root from '@/layouts/'
import { NotFound } from '@/pages/NotFound'
import { Boarding } from '@/pages/Boarding'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Boarding />
      },
    ]
  },
])

export default router