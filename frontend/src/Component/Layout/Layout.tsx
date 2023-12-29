import { ReactNode } from 'react'
import { Navbar } from '../Navigation'
import { Layout } from 'antd'

type Props = { children: ReactNode }

export const LayoutView = ({ children }: Props) => {
  return (
    <Layout>
      <Navbar />
      <Layout style={{ height: 'calc(100vh - 60px)' }}>{children}</Layout>
    </Layout>
  )
}
