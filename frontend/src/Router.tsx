import type { RouteObject } from 'react-router-dom'
import { HomePage, LoginPage } from './View'

export const routes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
]
