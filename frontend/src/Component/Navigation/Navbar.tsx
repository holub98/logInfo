import { blue, gold } from '@ant-design/colors'
import { Flex, Typography } from 'antd'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      style={{
        padding: '8px 32px 8px 32px',
        background: blue[4],
        height: '60px',
      }}
    >
      <img src="logo-app.png" style={{ width: '120px' }} />
      <Flex gap="32px">
        <Link to="/">
          <Typography.Title
            style={{
              fontSize: 'large',
              fontWeight: 'bold',
              color: gold[0],
            }}
          >
            Messages
          </Typography.Title>
        </Link>
        <Link to="/">
          <Typography.Title
            style={{
              fontSize: 'large',
              fontWeight: 'bold',
              color: gold[0],
            }}
          >
            Marks
          </Typography.Title>
        </Link>
        <Link to="/">
          <Typography.Title
            style={{
              fontSize: 'large',
              fontWeight: 'bold',
              color: gold[0],
            }}
          >
            Attentions
          </Typography.Title>
        </Link>
        <Link to="/">
          <Typography.Title
            style={{
              fontSize: 'large',
              fontWeight: 'bold',
              color: gold[0],
            }}
          >
            Time Table
          </Typography.Title>
        </Link>
        <Link to="/">
          <Typography.Title
            style={{
              fontSize: 'large',
              fontWeight: 'bold',
              color: gold[0],
            }}
          >
            Login
          </Typography.Title>
        </Link>
      </Flex>
    </Flex>
  )
}
