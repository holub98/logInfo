import type { RouteObject } from 'react-router-dom'
import { ArticleView, HomePage, LoginPage } from './View'

export const routes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/blog/:blogId', element: <ArticleView /> },
]
